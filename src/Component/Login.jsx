import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Login() {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  function handleClick() {
    // navigate("/home");
  }
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <form onSubmit={handleClick}>
        <button
          onClick={() => loginWithRedirect()}
          className="btn btn-primary btn-lg shadow"
        >
          Login into Benz
        </button>
      </form>
    </div>
  );
}
