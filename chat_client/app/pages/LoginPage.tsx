import React from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { Link } from "react-router";

const { Title, Paragraph } = Typography;

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Login form submitted:", values);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh", margin: "auto 20px" }}>
      <Col
        xs={24}
        md={12}
        style={{
          padding: "40px",
          background: "#f0f2f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "start", maxWidth: "400px" }}>
          <Title level={2} style={{ color: "#1890ff" }}>Chat App</Title>
          <Paragraph>
            Welcome to our platform. Please log in to continue and manage your activities seamlessly.
          </Paragraph>
        </div>
      </Col>

      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Card style={{ width: "100%", maxWidth: "400px" }}>
          <Title level={3} style={{ textAlign: "start", fontSize: "20px", marginBottom: "16px" }}>
            Login To Access App
          </Title>
          <Form layout="vertical" onFinish={onFinish}>
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
                Login
              </Button>
            </Form.Item>
          </Form>
          <Paragraph style={{ marginTop: "12px", textAlign: "center" }}>
            New to Chat App? <Link to="/sign-up">Sign Up</Link>
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
