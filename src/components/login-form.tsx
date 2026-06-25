import { useCallback, useState } from "react";

export const LoginForm = ({
  formType,
  onSubmit,
}: {
  formType: "login" | "register";
  onSubmit: (email: string, password: string, confirmPassword?: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = useCallback(() => {
    onSubmit(
      email,
      password,
      formType === "register" ? confirmPassword : undefined,
    );
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [confirmPassword, email, formType, onSubmit, password]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "20rem",
        border: "1px solid black",
        borderRadius: "4px",
        padding: "2rem",
      }}
    >
      <h5>{`${formType} form`}</h5>
      {formType === "login" ? <h6>Don't you have an account? <a href="/register">Register</a></h6> : <h6>Do you have an account? <a href="/login">Log in</a></h6>}

      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {formType === "register" && (
        <input
          type="password"
          name="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      <button onClick={() => handleSubmit()}>
        {formType === "login" ? "Login" : "Register"}
      </button>
    </div>
  );
};
