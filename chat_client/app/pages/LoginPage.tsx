import React, { useEffect, useState } from "react";
import { Button, Typography, Row, Col, Card } from "antd";
import { Link, useNavigate } from "react-router";
import ChatForm from "~/components/form/ChatForm";
import ChatInput from "~/components/form/ChatInput";
import axios from "axios";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const { Title, Paragraph } = Typography;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const defaultValues = {
    email: "jawed@gmail.com",
    password: "123456",
  };

  useEffect(() => {
    const isUserExists = localStorage.getItem("user");
    if (typeof window !== "undefined") {
      if (isUserExists) {
        navigate("/", JSON.parse(isUserExists));
      }
    }
  }, []);

  const onSubmit = (values: any) => {
    axios
      .post("http://localhost:5000/users/login", values)
      .then((res) => {
        if (res?.data) {
          toast.success("User login successfully!");

          localStorage.setItem("token", res.data.data);

          const user = jwtDecode(res.data.data);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/", { state: user });
        }
      })
      .catch((err) => {
        toast.error(err?.message);
        console.log(err);
      });
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", margin: "auto 20px" }}
    >
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
          <Title level={2} style={{ color: "#1890ff" }}>
            Chat App
          </Title>
          <Paragraph>
            Welcome to our platform. Please log in to continue and manage your
            activities seamlessly.
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
          <Title
            level={3}
            style={{
              textAlign: "start",
              fontSize: "20px",
              marginBottom: "16px",
            }}
          >
            Login To Access App
          </Title>
          <ChatForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <ChatInput type="email" name="email" label="Email" />
            <ChatInput type="password" name="password" label="Password" />

            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </ChatForm>
          <Paragraph style={{ marginTop: "12px", textAlign: "center" }}>
            New to Chat App? <Link to="/sign-up">Sign Up</Link>
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
