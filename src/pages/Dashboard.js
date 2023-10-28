import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import NavbarContainer1 from "../components/NavbarContainer1";
import SalesContainer1 from "../components/SalesContainer1";
import VisitorInsightsContainer1 from "../components/VisitorInsightsContainer1";
import NewUserRegistrationForm1 from "../components/NewUserRegistrationForm1";
import MostTravellingRoutesCard1 from "../components/MostTravellingRoutesCard1";
import TargetVsRealityContainer1 from "../components/TargetVsRealityContainer1";
import "./Dashboard.css";

const Dashboard = () => {
  const onLanguangeClick = useCallback(() => {
    //TODO: Dropdown
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-design-parent">
        <div className="dashboard-design">
          <NavbarContainer1 />
          <header className="top-bar1">
            <div className="background" />
            <div className="languange1" onClick={onLanguangeClick}>
              <div className="text1">
                <img className="united-icon1" alt="" src="/united.svg" />
                <div className="eng-us1">Eng (US)</div>
              </div>
              <img className="united-icon1" alt="" src="/chevrondown.svg" />
            </div>
            <div className="menu1">
              <div className="rectangle-group">
                <img
                  className="frame-inner"
                  alt=""
                  src="/rectangle-1393@2x.png"
                />
                <div className="group-container">
                  <img className="group-icon" alt="" src="/group-21861.svg" />
                  <div className="admin1">Admin</div>
                  <div className="tharindu1">Tharindu</div>
                </div>
              </div>
              <img
                className="notifications-icon1"
                alt=""
                src="/notifications.svg"
              />
            </div>
            <TextField
              className="search-bar"
              color="primary"
              label="Search here..."
              sx={{ width: 513 }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon>search_sharp</Icon>
                  </InputAdornment>
                ),
              }}
            />
            <h1 className="dashboard1">Dashboard</h1>
          </header>
          <section className="total-revenue">
            <div className="background1" />
            <div className="total-revenue-parent">
              <div className="total-revenue1">Total Revenue</div>
              <div className="frame-group">
                <div className="frame-container">
                  <div className="online-sales-parent">
                    <div className="online-sales">Local</div>
                    <div className="rectangle-copy-3" />
                  </div>
                  <div className="group-15-copy">
                    <div className="offline-sales">{`Foreign `}</div>
                    <div className="rectangle-copy-31" />
                  </div>
                </div>
                <div className="path-2-copy-parent">
                  <img className="path-2-copy" alt="" src="/path-2-copy.svg" />
                  <img className="path-2-icon" alt="" src="/path-2-copy.svg" />
                  <img
                    className="path-2-copy-2"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="path-2-copy-3"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="path-2-copy-4"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="path-2-copy-5"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <div className="k">25k</div>
                  <div className="k1">20k</div>
                  <div className="k2">10k</div>
                  <div className="k3">15k</div>
                  <div className="k4">5k</div>
                  <div className="div4">0</div>
                </div>
                <div className="monday">Monday</div>
                <div className="tuesday">Tuesday</div>
                <div className="wednesday">Wednesday</div>
                <div className="thursday">Thursday</div>
                <div className="friday">Friday</div>
                <div className="saturday">Saturday</div>
                <div className="sunday">Sunday</div>
                <div className="rectangle-copy-8-parent">
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-9" />
                </div>
                <div className="frame-14-copy">
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-91" />
                </div>
                <div className="frame-14-copy-2">
                  <div className="rectangle-copy-82" />
                  <div className="rectangle-copy-92" />
                </div>
                <div className="frame-14-copy-3">
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-93" />
                </div>
                <div className="frame-14-copy-4">
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-94" />
                </div>
                <div className="frame-14-copy-5">
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-95" />
                </div>
                <div className="frame-14-copy-6">
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-96" />
                </div>
              </div>
            </div>
          </section>
          <SalesContainer1 />
          <VisitorInsightsContainer1 />
        </div>
        <NewUserRegistrationForm1 />
        <MostTravellingRoutesCard1 />
        <TargetVsRealityContainer1 />
      </div>
    </div>
  );
};

export default Dashboard;
