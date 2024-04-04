import React, { Fragment, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "./LoginDialog.css";
import UserData from "../alldata/Userdata.json";
//import CloseIcon from "@mui/icons-material/Close";
//import SignupDialog from "./SignupDialog";

const LoginDialog = (props) => {
  const { openLogin, closeLogin, handleSignup } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleCA = () => {
    closeLogin();
    handleSignup();
  };
  const handleLogin = () => {
    // Check if email exists in UserData
    const user = UserData.find((user) => user.emailID === email);

    if (user) {
      // Check if password is correct
      if (user.password === password) {
        // Password is correct, you can perform further actions here
        console.log("Login successful");
        closeLogin();
        alert("Logged in")
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Email not found");
    }
  };

  return (
    <Fragment>
      <Dialog open={openLogin} onClose={closeLogin} maxWidth="lg">
        <DialogContent sx={{ padding: 0, width: "30vw" }}>
          <div className="login-box">
            <h2>Login</h2>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <span style={{color:"red"}} className="error">{error}</span>}
            <button className="login-button" onClick={handleLogin}>
              Log in
            </button>
            <Divider>or</Divider>
            <Button
              variant="outlined"
              style={{
                borderColor: "rgb(31, 163, 70)",
                color: "rgb(31, 163, 70)",
              }}
            >
              Sign in with Google
            </Button>
            <p>
              New to QuickCart?{" "}
              <span
                style={{ color: "grey", cursor: "pointer" }}
                onClick={handleCA}
              >
                Create Account
              </span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default LoginDialog;
