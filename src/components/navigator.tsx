import { Link } from "react-router";

export const Navigator = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 5,
        justifyContent: "space-between",
        margin: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={"/home"}>
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/about"}>
          About
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/contact"}>
          Contact
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={"/login"}>
          Log in
        </Link>        
      </div>
    </div>
  );
};
