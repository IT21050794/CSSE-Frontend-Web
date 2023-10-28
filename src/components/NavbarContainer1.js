import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarContainer1.css";

const NavbarContainer1 = () => {
  const navigate = useNavigate();

  const onFrameNavigationClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onFrameNavigation1Click = useCallback(() => {
    navigate("/bus-route-records");
  }, [navigate]);

  const onFrameNavigation2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="side-menu3">
      <div className="background3" />
      <ul className="parent">
        <nav className="nav4">
          <img className="graph-1-icon2" alt="" src="/graph-11.svg" />
          <div className="text10">Dashboard</div>
        </nav>
        <nav className="frame-nav" onClick={onFrameNavigationClick}>
          <img className="group-icon4" alt="" src="/group1.svg" />
          <div className="text11">User Management</div>
        </nav>
        <nav
          className="interface-chart-line-parent"
          onClick={onFrameNavigation1Click}
        >
          <img
            className="interface-chart-line2"
            alt=""
            src="/interface--chart-line1.svg"
          />
          <div className="text12">Bus Route records</div>
        </nav>
        <nav className="sign-out-container" onClick={onFrameNavigation2Click}>
          <div className="sign-out2">Sign Out</div>
          <img className="sign-out-icon2" alt="" src="/sign-out-icon1@2x.png" />
        </nav>
      </ul>
      <div className="mibus3">MiBus</div>
      <img className="dummy-logo-icon3" alt="" src="/dummy-logo.svg" />
    </section>
  );
};

export default NavbarContainer1;
