import SignInForm1 from "../components/SignInForm1";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="frame-parent">
        <div className="sign-in-to-mibus-parent">
          <h2 className="sign-in-to">Sign in to MiBus</h2>
          <h3 className="your-gateway-to">
            Your gateway to manage the seamless operation of the system.
          </h3>
        </div>
        <img className="saly-14-icon" alt="" src="/saly14@2x.png" />
      </div>
      <SignInForm1 />
      <div className="side-menu">
        <div className="mibus">MiBus</div>
        <img className="dummy-logo-icon" alt="" src="/dummy-logo.svg" />
      </div>
    </div>
  );
};

export default Login;
