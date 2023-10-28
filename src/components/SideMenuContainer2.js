import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenuContainer2.css";

const SideMenuContainer2 = () => {
  const navigate = useNavigate();

  const onNavigationClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameNavigationClick = useCallback(() => {
    navigate("/bus-route-records");
  }, [navigate]);

  const onFrameNavigation1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className="side-menu4">
      <div className="background5" />
      <ul className="frame-ul">
        <nav className="nav5" onClick={onNavigationClick}>
          <img className="graph-1-icon3" alt="" src="/graph-1.svg" />
          <div className="text13">Dashboard</div>
        </nav>
        <nav
          className="interface-chart-line-group"
          onClick={onFrameNavigationClick}
        >
          <img
            className="interface-chart-line3"
            alt=""
            src="/interface--chart-line1.svg"
          />
          <div className="text14">Bus Routes records</div>
        </nav>
        <nav className="sign-out-parent1" onClick={onFrameNavigation1Click}>
          <div className="sign-out3">Sign Out</div>
          <img className="sign-out-icon3" alt="" src="/sign-out-icon1@2x.png" />
        </nav>
      </ul>
      <div className="mibus4">MiBus</div>
      <img className="dummy-logo-icon4" alt="" src="/dummy-logo.svg" />
    </section>
  );
};

export default SideMenuContainer2;
