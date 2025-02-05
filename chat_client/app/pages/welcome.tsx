import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import type { Socket } from "socket.io-client";
import MainChat from "~/components/chat/MainChat";
import Profile from "~/components/profile/profile";
import Sidebar from "~/components/Sidebar";
import socket from "~/utils/Socket";

export function Welcome() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const socketRef = useRef<Socket | null>(null);

  // Ensure localStorage access only in browser
  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "null") : null;

  useEffect(() => {
    console.log("🔍 useEffect running...");

    if (!user) {
      console.log("❌ No user found in localStorage, redirecting to login...");
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
      };

      socketRef.current?.on("USER_ADDED", handleUserAdded);

      return () => {
        socketRef.current?.off("USER_ADDED", handleUserAdded);
      };
    }
  }, [isConnected]);
  
  return (
    <div className="flex max-h-[98vh]">
      <Sidebar user={user} />
      <MainChat />
      <Profile user={user} />
    </div>
  );
}
