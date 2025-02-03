import Header from "./Header";
import ChatArea from "./ChatArea";
import Footer from "./Footer";
import { useEffect } from "react";
import socket from "~/utils/Socket";

const MainChat = () => {
  useEffect(()=>{
    console.log(socket.id);
    
  },[socket])

  return (
    <div className="w-[50vw] ">
      <Header />
      <ChatArea />
      <Footer/>
    </div>
  );
};

export default MainChat;
