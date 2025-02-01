import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"), // Login page
  route("sign-up", "routes/signUp.tsx"), // Register page
] satisfies RouteConfig;
