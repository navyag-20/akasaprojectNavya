import React, { Fragment, useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "./SignupDialog.css";

const SignupDialog = (props) => {
  const { openSignup, closeSignup, handleLogin } = props;
  const handle1 = () => {
    closeSignup();
    handleLogin();
  };
  return (
    <Fragment>
      <Dialog open={openSignup} onClose={closeSignup} maxWidth="md">
        <DialogContent sx={{ padding: 0, width: "30vw" }}>
          <div className="signup-box">
          <h2>Signup</h2>
          <TextField id="email" label="Email" variant="outlined" size="small" />
          <TextField
            id="phoneNum"
            label="Phone Number"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" style={{backgroundColor:"rgb(31, 163, 70)"}}>Create Account</Button>
          {/* <Divider>or</Divider>
          <Button variant="outlined">Sign in with Google</Button> */}
          <p>
            Already have an account?{" "}
            <span style={{ color: "grey", cursor: "pointer" }} onClick={handle1}>
              Log in
            </span>
          </p>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default SignupDialog;
