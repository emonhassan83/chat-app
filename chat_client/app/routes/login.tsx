import type { Route } from "./+types/home";
import LoginPage from "~/pages/LoginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat App | Login" },
    { name: "description", content: "Welcome to Chat App!" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
