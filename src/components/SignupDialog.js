import React, { Fragment, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SignupDialog.css";

const SignupDialog = (props) => {
  const { openSignup, closeSignup, handleLogin } = props;
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handle1 = () => {
    closeSignup();
    handleLogin();
  };
  const handleCreateAccount = () => {
    // You can perform validation here if needed
    // For simplicity, I'm assuming all fields are filled
    if (email && phoneNum && password === confirmPassword) {
      // Perform account creation logic here
      alert("Account created successfully");
      // Close the dialog or navigate to the next step
      closeSignup();
      handleLogin();
    } else {
      // Display error message or handle invalid input
      console.log("Invalid input");
    }
  };
  return (
    <Fragment>
      <Dialog open={openSignup} onClose={closeSignup} maxWidth="md">
        <DialogContent sx={{ padding: 0, width: "30vw" }}>
          <div className="signup-box">
            <h2>Signup</h2>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="phoneNum"
              label="Phone Number"
              variant="outlined"
              size="small"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
            {showPasswordFields && (
              <Fragment>
                <TextField
                  id="password"
                  label="Create Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Fragment>
            )}
            {showPasswordFields ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(31, 163, 70)" }}
                onClick={() => handleCreateAccount()}
              >
                Finish Signup
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "rgb(31, 163, 70)" }}
                onClick={() => setShowPasswordFields(true)}
              >
                Create Account
              </Button>
            )}
            <p>
              Already have an account?{" "}
              <span
                style={{ color: "grey", cursor: "pointer" }}
                onClick={handle1}
              >
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
