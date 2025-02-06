import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import { useEffect } from "react";
import socket from "~/utils/Socket";

const MainChat = ({ roomData, handleSentMessage }: any) => {
  useEffect(() => {
    console.log(socket.id);
  }, [socket]);

  return (
    <div className="w-[50vw] ">
      {roomData?.room ? (
        <>
          <Header roomData={roomData}/>
          <ChatArea />
          <Footer handleSentMessage={handleSentMessage}/>
        </>
      ) : (
        <>Please Select a User for Chat</>
      )}
    </div>
  );
};

export default MainChat;
