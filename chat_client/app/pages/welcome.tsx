import MainChat from "~/components/chat/MainChat";
import Profile from "~/components/profile/profile";
import Sidebar from "~/components/Sidebar";

export function Welcome() {
  return (
    <div className="flex max-h-[98vh]">
      <Sidebar />
      <MainChat/>
      <Profile/>
    </div>
  );
}
