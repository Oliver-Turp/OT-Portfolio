import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import StatusMessage, { FAILED, SUCCESS } from "../components/StatusMessage";

function Login() {
  const { setToken, token, attemptLogin } = useAuthContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const [message, setMessage] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit proceed");

    if (username === "") {
      setUsernameErrorMsg("Username is required");
      return;
    } else {
      setUsernameErrorMsg("");
    }

    if (password === "") {
      setPasswordErrorMsg("Password is required");
      return;
    } else {
      setPasswordErrorMsg("");
    }

    const result = await attemptLogin({ username, password });

    if (result.success) {
      setMessage({ success: true, message: "Signed In" });
      setToken(result.data.admin.token);
    } else {
      setMessage({ success: false, message: result.message });
    }
  }

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <header>
        <h1>Admin Login</h1>
      </header>
      <main
        style={{
          paddingInline: "1.2rem",
          paddingBlock: "2rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {message.message && (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StatusMessage
                status={message.success ? SUCCESS : FAILED}
                message={message.message}
                setMessage={setMessage}
              />
            </div>
          </>
        )}
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Login as Admin</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="string"
                id="username"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameErrorMsg && (
                <p className="missing-field-alert">{usernameErrorMsg}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordErrorMsg && (
                <p className="missing-field-alert">{passwordErrorMsg}</p>
              )}
            </div>

            <div className="form-group">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
