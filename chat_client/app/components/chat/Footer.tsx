import { useState } from "react";
import { Button, Form, Input } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { FaRegFaceMeh } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

interface FooterProps {
  handleSentMessage: (message: string) => void;
}

const Footer: React.FC<FooterProps> = ({ handleSentMessage }) => {
  const [message, setMessage] = useState<string>("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      handleSentMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="p-2 flex items-center justify-between gap-4">
      {/* Left Buttons (More & FaceMeh icons) */}
      <div className="flex items-center gap-0 mt-1.5">
        <Button type="text" shape="circle" icon={<MoreOutlined />} size="large" />
        <Button type="text" shape="circle" icon={<FaRegFaceMeh />} size="large" />
      </div>

      {/* Form for Message Input */}
      <Form
        onFinish={handleSubmit} // ✅ Using AntD form submit handler
        style={{ display: "flex", alignItems: "center", flex: 1, marginTop: "8px" }}
      >
        <Form.Item style={{ flex: 1, margin: 0 }}>
          <Input
            placeholder="Type your message..."
            onChange={handleChange}
            value={message}
          />
        </Form.Item>

        <Button type="text" htmlType="submit" shape="circle" icon={<IoSend />} size="large" />
      </Form>
    </div>
  );
};

export default Footer;
