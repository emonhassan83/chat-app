import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import { useEffect } from "react";
import socket from "~/utils/Socket";

const MainChat = ({ roomData }: any) => {
  useEffect(() => {
    console.log(socket.id);
  }, [socket]);

  return (
    <div className="w-[50vw] ">
      {roomData?.room ? (
        <>
          <Header roomData={roomData}/>
          <ChatArea />
          <Footer />
        </>
      ) : (
        <>Please Select a User for Chat</>
      )}
    </div>
  );
};

export default MainChat;
