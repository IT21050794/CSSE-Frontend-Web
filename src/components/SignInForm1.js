import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SignInForm1.css";

const SignInForm1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [loginError, setLoginError] = useState(false);

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onGroupButtonClick = useCallback(() => {

    if (username === "admin" && password === "admin") {
      window.confirm("Login Successfully.");
      navigate("/dashboard");
    } else {
      //setLoginError(true);
      window.confirm("Error: Login Failed. Please try again.");
    }
  }, [navigate, username, password]);

  return (
    <div className="component-parent">
      <TextField
        className="group-textfield"
        color="primary"
        label="Enter email or user name"
        required={true}
        sx={{ width: 595 }}
        variant="filled"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="frame-parent2">
        <TextField
          className="frame-textfield"
          color="primary"
          label="Password"
          required={true}
          type={showPassword ? "text" : "password"}
          sx={{ width: 595 }}
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="forgot-password"
          sx={{ width: 191.9 }}
          color="primary"
          variant="text"
        >
          Forgot password ?
        </Button>
      </div>
      <Button
        className="group-button"
        sx={{ width: 595 }}
        color="primary"
        variant="contained"
        onClick={onGroupButtonClick}
      >
        Login
      </Button>
      <h3 className="sign-in">Sign in</h3>

      {/* {loginError && <p className="error-message">Error: Login Failed</p>} */}
    </div>
  );
};

export default SignInForm1;
