import { useCallback } from "react";
import { LoginForm } from "../components";

export const LoginPage = () => {
  const handleLogin = useCallback(
    (email: "login" | "register", password: string) => {
      console.log("email:", email);
      console.log("password:", password);
    },
    [],
  );
  return <LoginForm formType="login" onSubmit={handleLogin} />;
};
