import { Avatar, Button } from "antd";
import { useNavigate } from "react-router";

const Profile = ({user}: any) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="max-h-[98vh] flex flex-col items-center justify-center gap-3 p-6">
      {/* User Avatar */}
      <Avatar
        size={150}
        src="https://i.ibb.co.com/jZGjwrF/author2.png"
      />
      
      {/* User Info */}
      <div className="text-center">
        <h2 className="text-5xl font-bold">{user?.name}</h2>
        <p className="text-gray-500 text-xl mt-1">Software Engineer</p>
        <p className="text-gray-600 text-base mb-4">{user?.email}</p>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};

export default Profile;
