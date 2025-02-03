import { Avatar } from "antd";

const Profile = () => {
  return (
    <div className="max-h-[98vh] flex flex-col items-center justify-center gap-3 p-6">
      {/* User Avatar */}
      <Avatar
        size={150}
        src="https://i.ibb.co.com/jZGjwrF/author2.png"
      />
      
      {/* User Info */}
      <div className="text-center">
        <h2 className="text-5xl font-bold">John Doe</h2>
        <p className="text-gray-500 text-xl mt-1">Software Engineer</p>
        <p className="text-gray-600 text-base">johndoe@example.com</p>
      </div>
    </div>
  );
};

export default Profile;
