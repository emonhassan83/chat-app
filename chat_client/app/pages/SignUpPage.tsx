import React from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { Link } from "react-router";

const { Title, Paragraph } = Typography;

const SignUpPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Sign-up form submitted:", values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", padding: "20px" }}>
      {/* Left Side: App Name & Description */}
      <Col xs={24} md={12} style={{ textAlign: "start", padding: "40px", background: "#f0f2f5" }}>
        <Title level={2} style={{ color: "#1890ff" }}>Chat App</Title>
        <Paragraph style={{ fontSize: "16px", maxWidth: "400px" }}>
          Join Chat App today and start connecting with people effortlessly.
        </Paragraph>
      </Col>

      {/* Right Side: Sign-Up Form */}
      <Col xs={24} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Card style={{ width: "100%", maxWidth: "400px" }}>
          <Title level={3} style={{ textAlign: "start", fontSize: "20px", marginBottom: "16px" }}>
            Create an Account
          </Title>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Login Link */}
        <div style={{ marginTop: "12px" }}>
          <Paragraph>
            Already have an account? <Link to="/login">Login</Link>
          </Paragraph>
        </div>
      </Col>
    </Row>
  );
};

export default SignUpPage;
