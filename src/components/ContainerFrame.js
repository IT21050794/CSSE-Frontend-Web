import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContainerFrame.css";

const ContainerFrame = () => {
  const navigate = useNavigate();

  const onNavigationClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <section className="frame4">
      <div className="side-menu2">
        <div className="frame-parent1">
          <div className="group-parent1">
            <img className="group-icon3" alt="" src="/group.svg" />
            <div className="text6">User Management</div>
          </div>
          <div className="sign-out-group">
            <div className="sign-out1">Sign Out</div>
            <img className="sign-out-icon1" alt="" src="/sign-out-icon.svg" />
          </div>
          <div className="mdicog-outline-parent">
            <img
              className="mdicog-outline-icon"
              alt=""
              src="/mdicogoutline.svg"
            />
            <div className="text7">Settings</div>
          </div>
        </div>
        <div className="frame5">
          <div className="mibus2">MiBus</div>
          <img className="dummy-logo-icon2" alt="" src="/dummy-logo.svg" />
        </div>
      </div>
      <div className="frame6">
        <div className="div6">
          <img
            className="interface-chart-line1"
            alt=""
            src="/interface--chart-line.svg"
          />
          <div className="text8">Bus Route records</div>
        </div>
      </div>
      <ul className="frame7">
        <nav className="nav3" onClick={onNavigationClick}>
          <img className="graph-1-icon1" alt="" src="/graph-1.svg" />
          <div className="text8">Dashboard</div>
        </nav>
      </ul>
    </section>
  );
};

export default ContainerFrame;
