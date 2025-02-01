import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
//   route("about", "./about.tsx"),
  route("login", "routes/login.tsx"), // Login page
//   route("register", "./auth/register.tsx"), // Register page
//   route("signin", "./auth/signin.tsx"), // Signin page
//   route("signup", "./auth/signup.tsx"), // Signup page
] satisfies RouteConfig;
