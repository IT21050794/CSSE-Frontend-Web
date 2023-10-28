import { useCallback, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./BusRouteRecords.css";

const data = [
  {
    route: "138 Kottawa - Pettah",
    category: "Semi luxury",
    popularity: 9, // Number of rectangles for popularity
    weeklyTickets: "590,972,542",
    dailyTickets: "21,452",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "174 Borella - Kottawa",
    category: "Semi luxury",
    popularity: 7,
    weeklyTickets: "88,458,892",
    dailyTickets: "32,892",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "993 Malabe - Maharagama",
    category: "Semi luxury",
    popularity: 10,
    weeklyTickets: "22,008,901",
    dailyTickets: "345,321",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "689 Hokandara - Nugegoda",
    category: "luxury",
    popularity: 3,
    weeklyTickets: "56,133",
    dailyTickets: "1,095",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "170 Athurugiriya - Pettah",
    category: "Semi luxury",
    popularity: 5,
    weeklyTickets: "787,901",
    dailyTickets: "8,223",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "190 Meegoda - Pettah",
    category: "Semi luxury",
    popularity: 9,
    weeklyTickets: "1,045,901",
    dailyTickets: "10,453",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "17 Kandy - Panadura",
    category: "Semi luxury",
    popularity: 8,
    weeklyTickets: "20,450,901",
    dailyTickets: "16,553",
    lastUpdated: "21th October, 2023",
  },
  {
    route: "154 Borella - Bambalapitiya",
    category: "Semi luxury",
    popularity: 8,
    weeklyTickets: "4,450,901",
    dailyTickets: "11,527",
    lastUpdated: "21th October, 2023",
  },
];

const BusRouteRecords = () => {
  const navigate = useNavigate();

  const onFrameNavigationClick = useCallback(() => {
    navigate("/user-management");
  }, [navigate]);

  const onFrameNavigation1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/route-summery");
  }, [navigate]);

  const onNavigationClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredRoutes = data.filter((route) =>
      route.route.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredRoutes(filteredRoutes);
  };

  return (
    <div className="bus-route-records">
      <section className="side-menu1">
        <div className="background2" />
        <div className="frame-div">
          <nav className="group-group" onClick={onFrameNavigationClick}>
            <img className="group-icon2" alt="" src="/group3.svg" />
            <div className="text3">User Management</div>
          </nav>
          <nav className="sign-out-parent" onClick={onFrameNavigation1Click}>
            <div className="sign-out">Sign Out</div>
            <img
              className="sign-out-icon"
              alt=""
              src="/sign-out-icon1@2x.png"
            />
          </nav>
        </div>
        <div className="mibus1">MiBus</div>
        <img className="dummy-logo-icon1" alt="" src="/dummy-logo.svg" />
      </section>
      <Header pageTitle="Bus Route records" propColor="#000" />
      <main className="container">
        <div className="table-title">
          <div className="title8">
            <div className="collection-of-all">
              Collection of all Bus Routes
            </div>
            <div className="keep-track-of">
              Keep track of all the Bus Routes on system
            </div>
          </div>
          <TextField
            className="search1"
            color="primary"
            label="Search"
            placeholder="Search Bus Routes"
            sx={{ width: 276 }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>search_sharp</Icon>
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th5">
                <div className="table-head-text">
                  <div className="select" />
                  <div className="bus-route">Bus Route</div>
                  <img className="icon-arrow" alt="" src="/icon--arrow.svg" />
                </div>
              </th>
              <th className="th5">
                <div className="bus-category">Bus Category</div>
              </th>
              <th className="th5">
                <div className="popularityinterest">Popularity/Interest</div>
              </th>
              <th className="th5">
                <div className="tickets-weekly">Tickets Weekly</div>
              </th>
              <th className="th5">
                <div className="tickets-weekly">Tickets Daily</div>
              </th>
              <th className="th5">
                <div className="popularityinterest">Last Updated Date</div>
              </th>
              <th className="th11">
                <div className="view">View</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRoutes.map((item, index) => (
              <>
                <tr key={index}>
                  <td className="th5">
                    <div className="table-data">
                      <div className="bus-route">{item.route}</div>
                    </div>
                  </td>
                  <td className="th5">
                    <div className="tags">
                      <div className="tag">
                        <div className="semi-luxury">{item.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="th5">
                    <div className="popularity">
                      <div className="rectangle-container">
                        {Array.from({ length: item.popularity }).map((_, i) => (
                          <div className="rectangle-div" key={i} />
                        ))}
                      </div>
                      <div className="rectangle-container">
                        <img
                          className="icon-arrow"
                          alt=""
                          src="/phtrendupbold.svg"
                        />
                        <div className="trending">
                          {item.popularity > 8 ? "Trending" : ""}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="th5">
                    <div className="table-data1">{item.weeklyTickets}</div>
                  </td>
                  <td className="th5">
                    <div className="table-data1">{item.dailyTickets}</div>
                  </td>
                  <td className="th5">
                    <div className="table-data3">{item.lastUpdated}</div>
                  </td>
                  <td className="th11">
                    <button
                      className="button"
                      color="primary"
                      variant="outlined"
                      onClick={onButtonClick}
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr className="tr1" />
                <tr className="tr1" />
              </>
            ))}
          </tbody>
          <tfoot>
            <tr className="tr">
              <td className="td81">
                <div className="pagination1">
                  <div className="of-12401">1-8 of 240</div>
                  <img
                    className="icon-arrow-left1"
                    alt=""
                    src="/icon--arrow--left.svg"
                  />
                  <img
                    className="icon-arrow-right1"
                    alt=""
                    src="/icon--arrow--right.svg"
                  />
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
      <section className="page-title">
        <b className="td81">Bus Route records</b>
        <div className="group1">
          <Button className="file">
            <img className="icon-arrow" alt="" />
            <div className="filter1">Filter</div>
          </Button>
          <Button color="primary" variant="text">
            Export as PDF
          </Button>
        </div>
      </section>
      <nav className="nav1" onClick={onNavigationClick}>
        <img className="graph-1-icon" alt="" src="/graph-1.svg" />
        <div className="text4">Dashboard</div>
      </nav>
      <nav className="nav2">
        <img
          className="interface-chart-line"
          alt=""
          src="/interface--chart-line.svg"
        />
        <div className="text4">Bus Route records</div>
      </nav>
    </div>
  );
};

export default BusRouteRecords;
