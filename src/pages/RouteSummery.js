import { Button, Radio, FormControlLabel } from "@mui/material";
import ContainerFrame from "../components/ContainerFrame";
import FormContainer from "../components/FormContainer";
import CrowdedCard from "../components/CrowdedCard";
import AdditionalInfoDiv from "../components/AdditionalInfoDiv";
import "./RouteSummery.css";

const RouteSummery = () => {
  return (
    <div className="route-summery">
      <ContainerFrame />
      <section className="frame">
        <div className="frame1">
          <header className="top-bar">
            <div className="languange">
              <div className="text">
                <img className="united-icon" alt="" src="/united.svg" />
                <div className="eng-us">Eng (US)</div>
              </div>
              <img className="united-icon" alt="" src="/chevrondown.svg" />
            </div>
            <div className="menu">
              <div className="rectangle-parent">
                <img
                  className="frame-child"
                  alt=""
                  src="/rectangle-1393@2x.png"
                />
                <div className="group-parent">
                  <img className="frame-item" alt="" src="/group-21861.svg" />
                  <div className="admin">Admin</div>
                  <div className="tharindu">Tharindu</div>
                </div>
              </div>
              <img
                className="notifications-icon"
                alt=""
                src="/notifications.svg"
              />
            </div>
            <div className="route-summery1">Route Summery</div>
          </header>
        </div>
        <div className="frame2">
          <div className="tickets-and-tasks">
            <div className="tasks">
              <div className="cards-default">
                <Button
                  className="chip-default-success"
                  sx={{ width: 174 }}
                  color="primary"
                  variant="contained"
                >
                  Generate Reports
                </Button>
              </div>
              <div className="button-text-button-primary" />
              <b className="report-genarator">Report Genarator</b>
              <div className="today">Today</div>
              <FormControlLabel
                className="task-2"
                label="Include OverCrowded People Amount"
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                className="task-1"
                label="Include OverCrowing Time line"
                control={<Radio color="primary" />}
              />
            </div>
            <FormControlLabel
              className="task-3"
              label="Include OverCrowded People Amount"
              control={<Radio color="primary" />}
            />
            <div className="unresolved-tickets">
              <div className="cards-default" />
              <b className="daily-purchased-tickets">Daily Purchased tickets</b>
              <div className="group-support">
                <span className="group">{`Group: `}</span>
                <span className="support">Support</span>
              </div>
              <div className="unresolved-ticket-1">
                <div className="total-purchased-tickets">
                  Total Purchased Tickets
                </div>
                <div className="div">4260</div>
                <img
                  className="divider-line-horizontal"
                  alt=""
                  src="/divider--line--horizontal.svg"
                />
              </div>
              <div className="unresolved-ticket-2">
                <div className="total-purchased-tickets">Total Users</div>
                <div className="div">3000</div>
                <img
                  className="divider-line-horizontal"
                  alt=""
                  src="/divider--line--horizontal.svg"
                />
              </div>
              <div className="unresolved-ticket-3">
                <div className="total-purchased-tickets">Local Travellers</div>
                <div className="div">2500</div>
                <img
                  className="divider-line-horizontal"
                  alt=""
                  src="/divider--line--horizontal.svg"
                />
              </div>
              <div className="unresolved-ticket-4">
                <div className="total-purchased-tickets">
                  Foreign Travellers
                </div>
                <div className="div">500</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame3">
          <FormContainer />
        </div>
        <div className="todays-trends">
          <div className="cards-default" />
          <b className="todays-trends-of">
            Today’s trends of passenger Crowding
          </b>
          <div className="as-of-25">as of 25 May 2019, 09:41 PM</div>
          <div className="graph-help">
            <div className="today1">
              <img
                className="divider-graph-horizontal"
                alt=""
                src="/divider--graph--horizontal.svg"
              />
              <div className="today2">Today</div>
            </div>
            <div className="yesterday">
              <img
                className="divider-graph-horizontal1"
                alt=""
                src="/divider--graph--horizontal1.svg"
              />
              <div className="yesterday1">Yesterday</div>
            </div>
          </div>
          <CrowdedCard />
          <AdditionalInfoDiv />
          <img className="todays-trends-child" alt="" src="/line-24.svg" />
        </div>
      </section>
    </div>
  );
};

export default RouteSummery;
