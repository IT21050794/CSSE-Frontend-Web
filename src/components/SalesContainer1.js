import { Button } from "@mui/material";
import "./SalesContainer1.css";

const SalesContainer1 = () => {
  return (
    <section className="today-sales">
      <div className="div38">
        <div className="bg" />
        <div className="from-yesterday">0,5% from yesterday</div>
        <div className="new-users">New Users</div>
        <div className="div39">300</div>
        <img className="icon" alt="" src="/icon.svg" />
      </div>
      <div className="div40">
        <div className="bg1" />
        <div className="from-yesterday">+1,2% from yesterday</div>
        <div className="new-users">Tickets Purchased</div>
        <div className="div39">25000</div>
        <img className="icon" alt="" src="/icon1.svg" />
      </div>
      <div className="div42">
        <div className="bg2" />
        <div className="from-yesterday">+5% from yesterday</div>
        <div className="new-users">Total Passengers</div>
        <div className="div39">20000</div>
        <img className="icon" alt="" src="/icon2.svg" />
      </div>
      <div className="div44">
        <div className="bg3" />
        <div className="from-yesterday">+8% from yesterday</div>
        <div className="new-users">Day Earnings</div>
        <div className="div39">RS 1,000,000</div>
        <img className="icon" alt="" src="/icon3.svg" />
      </div>
      <Button
        className="exports"
        sx={{ width: 100 }}
        color="primary"
        variant="outlined"
      >
        Export
      </Button>
      <div className="todays-usage-parent">
        <div className="todays-usage">Today’s Usage</div>
        <div className="usage-summery">Usage Summery</div>
      </div>
    </section>
  );
};

export default SalesContainer1;
