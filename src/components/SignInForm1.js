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
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onGroupButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="component-parent">
      <TextField
        className="group-textfield"
        color="primary"
        label="Enter email or user name"
        required={true}
        sx={{ width: 595 }}
        variant="filled"
      />
      <div className="frame-parent2">
        <TextField
          className="frame-textfield"
          color="primary"
          label="Password"
          required={true}
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
    </div>
  );
};

export default SignInForm1;
