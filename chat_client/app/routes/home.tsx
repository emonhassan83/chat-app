import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat App | Home" },
    { name: "description", content: "Welcome to Chat App!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
