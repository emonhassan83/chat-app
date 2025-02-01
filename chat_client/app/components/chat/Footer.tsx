import { Button, Form, Input } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { FaRegFaceMeh } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-2 flex items-center justify-between gap-4">
      {/* Left Buttons (More & FaceMeh icons) */}
      <div className="flex items-center gap-0 mt-1.5">
        <Button
          type="text"
          shape="circle"
          icon={<MoreOutlined />}
          size="large"
        />
        <Button
          type="text"
          shape="circle"
          icon={<FaRegFaceMeh />}
          size="large"
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center", // Center align vertically
          justifyContent: "center", // Center align horizontally
          flex: 1,
          marginTop: "8px",
          gap: "0px", // Adds space between input and send button
        }}
      >
        <Form.Item
          label=""
          name="message"
          style={{ flex: 1, margin: 0 }} // Ensures the input takes full width available
          rules={[{ required: true, message: "Type your message and hit" }]}
        >
          <Input placeholder="Type your msg and hit..." />
        </Form.Item>

        <Button
          type="text"
          shape="circle"
          icon={<IoSend />}
          size="large"
        />
      </div>
    </div>
  );
};

export default Footer;
