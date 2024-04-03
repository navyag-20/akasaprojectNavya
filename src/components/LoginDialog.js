import React, { Fragment, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "./LoginDialog.css";
//import CloseIcon from "@mui/icons-material/Close";
//import SignupDialog from "./SignupDialog";

const LoginDialog = (props) => {
  const { openLogin, closeLogin, handleSignup } = props;
  const handleCA = () => {
    closeLogin();
    handleSignup();
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
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              size="small"
            />
            <button className="login-button">Log in</button>
            <Divider>or</Divider>
            <Button
              variant="outlined"
              style={{ borderColor: "rgb(31, 163, 70)", color: "rgb(31, 163, 70)"}}
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
