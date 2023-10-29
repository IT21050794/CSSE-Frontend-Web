import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SideMenuContainer2 from "../components/SideMenuContainer2";
import Header from "../components/Header";
import "./UserManagement.css";

const data = [
  {
    avatar: <img src="/avatar--man--6@2x.png" alt="" />,
    userName: "Tom Cruise",
    email: "Tom27@gmail.com",
    joinedDate: "21th October, 2023",
    town: "Kottawa",
  },
  {
    avatar: <img src="/avatar--man--5@2x.png" alt="" />,
    userName: "Robert Downey",
    email: "robert.d@gmail.com",
    joinedDate: "18th October, 2023",
    town: "Kottawa",
  },
  {
    avatar: <img src="/avatar--woman--5@2x.png" alt="" />,
    userName: "Mary Poppins",
    email: "mary1@gmail.com",
    joinedDate: "19th October, 2023",
    town: "Kottawa",
  },
  {
    avatar: <img src="/avatar--woman--3@2x.png" alt="" />,
    userName: "Sophie Cooper",
    email: "cooper69@gmail.com",
    joinedDate: "25th October, 2023",
    town: "Kottawa",
  },
  {
    avatar: <img src="/avatar--man--4@2x.png" alt="" />,
    userName: "Tom Hardy",
    email: "matt.d4@gmail.com",
    joinedDate: "19th October, 2023",
    town: "Kottawa",
  },
  {
    avatar: <img src="/avatar--man--7@2x.png" alt="" />,
    userName: "Christian Bale",
    email: "chris555@gmail.com",
    joinedDate: "20th October, 2023",
    town: "Kottawa",
  },
  {
    avatar: <img src="/avatar--woman--6@2x.png" alt="" />,
    userName: "Maya Angelou",
    email: "Maya.4@gmail.com",
    joinedDate: "21th October, 2023",
    town: "Kottawa",
  },
];

const UserManagement = () => {
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const filterOpen = Boolean(filterAnchorEl);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState(data);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };
  const sortOpen = Boolean(sortAnchorEl);
  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };
  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredRoutes = data.filter((route) =>
      route.userName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredRoutes(filteredRoutes);
  };

  return (
    <div className="user-management">
      <SideMenuContainer2 />
      <nav className="nav">
        <img className="group-icon1" alt="" src="/group2.svg" />
        <div className="text2">User Management</div>
      </nav>
      <Header pageTitle="User Managment" />
      <main className="all-tickets">
        <div className="cards-default3">
          <div className="sheet" />
          <TextField
            className="search"
            color="primary"
            label="Search Users"
            placeholder="Type User Name"
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
        <div className="table-container">
          <b className="all-users">All Users</b>
          <div className="filter">
            <Button
              sx={{ width: 58 }}
              id="button-Filter"
              aria-controls="menu-Filter"
              aria-haspopup="true"
              aria-expanded={filterOpen ? "true" : undefined}
              onClick={handleFilterClick}
              color="primary"
            >
              Filter
            </Button>
            <Menu
              anchorEl={filterAnchorEl}
              open={filterOpen}
              onClose={handleFilterClose}
            />
          </div>
          <div className="sort">
            <Button
              sx={{ width: 53 }}
              id="button-Sort"
              aria-controls="menu-Sort"
              aria-haspopup="true"
              aria-expanded={sortOpen ? "true" : undefined}
              onClick={handleSortClick}
              color="primary"
            >
              Sort
            </Button>
            <Menu
              anchorEl={sortAnchorEl}
              open={sortOpen}
              onClose={handleSortClose}
            />
          </div>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th5">
                  <div className="table-head-text">
                    <div className="bus-route"> </div>
                  </div>
                </th>
                <th className="th5">
                  <div className="bus-category">User Name</div>
                </th>
                <th className="th5">
                  <div className="popularityinterest">Email</div>
                </th>
                <th className="th5">
                  <div className="tickets-weekly">Joined Date</div>
                </th>
                <th className="th5">
                  <div className="tickets-weekly">Town</div>
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
                        <div className="bus-route">{item.avatar}</div>
                      </div>
                    </td>
                    <td className="th5">
                      <div className="table-data1">{item.userName}</div>
                    </td>
                    <td className="th5">
                      <div className="table-data1">{item.email}</div>
                    </td>
                    <td className="th5">
                      <div className="table-data1">{item.joinedDate}</div>
                    </td>
                    <td className="th5">
                      <div className="tags">
                        <div className="tag">
                          <div className="semi-luxury">{item.town}</div>
                        </div>
                      </div>
                    </td>
                    <td className="th11">
                      <button
                        className="button"
                        color="primary"
                        variant="outlined"
                        //onClick={onButtonClick}
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
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
