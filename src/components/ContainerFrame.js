import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContainerFrame.css";

const ContainerFrame = () => {
  const navigate = useNavigate();

  const onNavigationClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameNavigationClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onFrameNavigation1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavigationClick2 = useCallback(() => {
    navigate("/bus-route-records");
  }, [navigate]);

  return (
    <section className="side-menu1">
      <div className="background2" />
      <div className="frame-div">
        <nav className="group-group" onClick={onFrameNavigationClick}>
          <img className="group-icon2" alt="" src="/group3.svg" />
          <div className="text3">User Management</div>
        </nav>
        <nav className="sign-out-parent" onClick={onFrameNavigation1Click}>
          <div className="sign-out">Sign Out</div>
          <img className="sign-out-icon" alt="" src="/sign-out-icon1@2x.png" />
        </nav>
      </div>
      <div className="mibus1">MiBus</div>
      <img className="dummy-logo-icon1" alt="" src="/dummy-logo.svg" />
      <nav className="nav1" onClick={onNavigationClick}>
        <img className="graph-1-icon" alt="" src="/graph-1.svg" />
        <div className="text4">Dashboard</div>
      </nav>
      <nav className="nav2" onClick={onNavigationClick2}>
        <img
          className="interface-chart-line"
          alt=""
          src="/interface--chart-line.svg"
        />
        <div className="text4">Bus Route records</div>
      </nav>
    </section>
  );
};

export default ContainerFrame;
