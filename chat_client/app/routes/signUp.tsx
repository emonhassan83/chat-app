import SignUpPage from "~/pages/SignUpPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat App | Sign Up" },
    { name: "description", content: "Welcome to Chat App!" },
  ];
}

export default function Login() {
  return <SignUpPage />;
}
