import { MoreOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";

const { Title, Text } = Typography;

const AppHeader: React.FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#1890ff", padding: "12px" }}>
      {/* Avatar */}
      <Avatar size={64} icon={<UserOutlined />} />

      {/* User Info */}
      <div style={{ color: "white" }}>
        <Title level={5} style={{ margin: 0, color: "white" }}>Jone Doe</Title>
        <Text style={{ color: "white" }}>UI Frontend Developer</Text>
      </div>
      <MoreOutlined style={{ color: "white", fontSize: "24px", marginLeft: "auto" }} />
    </div>
  );
};

export default AppHeader;
