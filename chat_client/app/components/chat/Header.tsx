import { 
    ArrowLeftOutlined, 
    MoreOutlined, 
    PhoneOutlined, 
    UserOutlined, 
    VideoCameraOutlined 
  } from "@ant-design/icons";
  import { Avatar, Button, Typography } from "antd";
  
  const { Title, Text } = Typography;
  
  const Header = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Ensures that items are spread across
          gap: "12px",
          padding: "12px",
          width: "100%",
        }}
      >
        {/* Arrow Left Button */}
        <Button
          type="text"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size="large"
        />
        
        {/* Avatar and User Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexGrow: 1 }}>
          <Avatar size={64} icon={<UserOutlined />} />
          <div>
            <Title level={5} style={{ margin: 0 }}>
              Jone Doe
            </Title>
            <Text>UI Frontend Developer</Text>
          </div>
        </div>
  
        {/* Video and Phone Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Button
            type="text"
            shape="circle"
            icon={<VideoCameraOutlined />}
            size="large"
          />
          <Button
            type="text"
            shape="circle"
            icon={<PhoneOutlined />}
            size="large"
          />
        </div>
      </div>
    );
  };
  
  export default Header;
  