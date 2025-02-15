import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import type { Socket } from "socket.io-client";
import MainChat from "~/components/chat/MainChat";
import Profile from "~/components/profile/profile";
import Sidebar from "~/components/Sidebar";
import socket from "~/utils/Socket";

export function Welcome() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [onlineUsers, setOnlineUsers] = useState<Array<string>>([]);
  const [roomData, setRoomData] = useState({
    room: null,
    receiver: null,
  });
  const [allMessage, setAllMessage] = useState<any[]>([]);
  const navigate = useNavigate();
  const socketRef = useRef<Socket | null>(null);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user") || "null")
      : null;

  useEffect(() => {
    console.log("🔍 useEffect running...");

    if (!user) {
      console.log(
        "❌ No user found in sessionStorage, redirecting to login..."
      );
      navigate("/login");
      return;
    }

    console.log("Attempting to connect socket...");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("✅ Socket connected!");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected!");
      setIsConnected(false);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err);
    });

    return () => {
      console.log("🧹 Cleaning up socket listeners...");
      socket.off("connect");
      socket.off("disconnect");
      socket.off("connect_error");
    };
  }, [navigate, user]);

  useEffect(() => {
    if (isConnected && user) {
      socketRef.current?.emit("ADD_USER", user);

      const handleUserAdded = (data: any) => {
        console.log("USER_ADDED data:", data);
        setOnlineUsers(data);
      };

      socketRef.current?.on("USER_ADDED", handleUserAdded);

      socketRef.current?.on("RECEIVE_MSG", (data) => {
        console.log("From Another User: ", data);
        if (data.sender._id !== user._id) {
          setAllMessage((prevState) => [...prevState, data]);
        }
      });

      socketRef.current?.on("DELETED_MSG", (data) => {
        if (data.sender._id !== user._id) {
          setAllMessage((prevState) =>
            prevState.filter((item: any) => item?._id !==data.message._id)
          );    
        }
      });

      return () => {
        socketRef.current?.on("disconnect", handleUserAdded);
      };
    }
  }, [isConnected]);

  const handleSentMessage = (message: any) => {
    console.log(socketRef.current);
    if (socketRef?.current?.connected) {
      let sender = user;
      sender.socketId = socketRef?.current?.id;

      const data = {
        message,
        receiver: roomData?.receiver,
        sender,
      };
      socketRef.current.emit("SENT_MSG", data);
      // setAllMessage((prevState) => [...prevState, data]);
    }
  };

  const handleDeleteMessage = (id: string) => {
    axios.delete(`http://localhost:5000/message/${id}`)
      .then((res) => {
        if (socketRef?.current?.connected) {
          const data = {
            message: res.data?.data,
            receiver: roomData?.receiver,
            sender: user
          };
          socketRef.current.emit("DELETED_MSG", data);
          setAllMessage((prevState) =>
            prevState.filter((data: any) => data?._id !== res.data.data._id)
          );          
        }
      })
      .catch((error) => {
        console.log(error)
      })
  };

  console.log(allMessage);

  return (
    <div className="flex max-h-[98vh]">
      <Sidebar
        user={user}
        onlineUsers={onlineUsers}
        roomData={roomData}
        setRoomData={setRoomData}
      />
      <MainChat roomData={roomData} handleSentMessage={handleSentMessage} allMessage={allMessage} user={user} handleDeleteMessage={handleDeleteMessage} />
      <Profile user={user} />
    </div>
  );
}
