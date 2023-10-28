import { useMemo } from "react";
import "./Header.css";

const Header = ({ pageTitle, propColor }) => {
  const userManagmentStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <header className="top-bar2">
      <div className="background6" />
      <div className="languange2">
        <div className="text15">
          <img className="united-icon2" alt="" src="/united.svg" />
          <div className="eng-us2">Eng (US)</div>
        </div>
        <img className="united-icon2" alt="" src="/chevrondown.svg" />
      </div>
      <div className="menu2">
        <div className="rectangle-parent24">
          <img className="rectangle-icon" alt="" src="/rectangle-1393@2x.png" />
          <div className="group-parent2">
            <img className="frame-child108" alt="" src="/group-21861.svg" />
            <div className="admin2">Admin</div>
            <div className="tharindu2">Tharindu</div>
          </div>
        </div>
        <img className="notifications-icon2" alt="" src="/notifications.svg" />
      </div>
      <h1 className="user-managment" style={userManagmentStyle}>
        {pageTitle}
      </h1>
    </header>
  );
};

export default Header;
