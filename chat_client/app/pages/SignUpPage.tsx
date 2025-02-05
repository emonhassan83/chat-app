import React, { useEffect } from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { Link, useNavigate } from "react-router";
import ChatForm from "~/components/form/ChatForm";
import ChatInput from "~/components/form/ChatInput";
import axios from "axios";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const { Title, Paragraph } = Typography;

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserExists = localStorage.getItem("user");
    if (typeof window !== "undefined") {
      if (isUserExists) {
        navigate("/", JSON.parse(isUserExists));
      }
      console.log(isUserExists);
    }
  }, []);

  const defaultValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values: any) => {
    axios
      .post("http://localhost:5000/users/register", values)
      .then((res) => {
        if (res?.data) {
          toast.success("User sign up successfully!");
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
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      {/* Left Side: App Name & Description */}
      <Col
        xs={24}
        md={12}
        style={{ textAlign: "start", padding: "40px", background: "#f0f2f5" }}
      >
        <Title level={2} style={{ color: "#1890ff" }}>
          Chat App
        </Title>
        <Paragraph style={{ fontSize: "16px", maxWidth: "400px" }}>
          Join Chat App today and start connecting with people effortlessly.
        </Paragraph>
      </Col>

      {/* Right Side: Sign-Up Form */}
      <Col
        xs={24}
        md={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            Create an Account
          </Title>
          <ChatForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <ChatInput type="text" name="name" label="User Name" />
            <ChatInput type="email" name="email" label="Email" />
            <ChatInput type="password" name="password" label="Password" />

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
          </ChatForm>
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
