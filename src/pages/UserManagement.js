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

const UserManagement = () => {
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const filterOpen = Boolean(filterAnchorEl);
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
            label="Search"
            placeholder="Search Users"
            sx={{ width: 276 }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>search_sharp</Icon>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <table className="table-ticket-priority-high">
          <thead>
            <tr>
              <th className="th" rowSpan={2}>
                <img
                  className="divider-line-horizontal3"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr />
            <tr>
              <td className="th">
                <div className="content">
                  <div className="chip-priority-high">
                    <div className="sheet1" />
                    <b className="title">Kottawa</b>
                  </div>
                  <div className="time-label">6:30 PM</div>
                  <div className="date-label">May 26, 2019</div>
                  <div className="customer-name">Tom Cruise</div>
                  <img
                    className="avatar-man-5"
                    alt=""
                    src="/avatar--man--5@2x.png"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="th" rowSpan={2}>
                <img
                  className="divider-line-horizontal4"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </td>
            </tr>
            <tr />
          </tbody>
        </table>
        <div className="table-ticket-priority-low">
          <div className="content1">
            <div className="chip-priority-low">
              <b className="title1">low</b>
            </div>
            <div className="time-label1">8:00 AM</div>
            <div className="date-label1">May 26, 2019</div>
            <div className="customer-name1">Matt Damon</div>
            <img
              className="avatar-man-5"
              alt=""
              src="/avatar--woman--5@2x.png"
            />
          </div>
          <img
            className="divider-line-horizontal5"
            alt=""
            src="/divider--line--horizontal2.svg"
          />
          <img
            className="divider-line-horizontal6"
            alt=""
            src="/divider--line--horizontal2.svg"
          />
          <div className="chip-priority-high1">
            <div className="sheet1" />
            <b className="title2">Kottawa</b>
          </div>
        </div>
        <table className="table-ticket-priority-low1">
          <thead>
            <tr>
              <th className="th1" rowSpan={2} colSpan={2}>
                <img
                  className="divider-line-horizontal3"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr />
            <tr>
              <td className="td2">
                <div className="content2">
                  <div className="time-label2">11:30 AM</div>
                  <div className="date-label2">May 25, 2019</div>
                  <div className="customer-name2">Sam Smith</div>
                  <img
                    className="avatar-man-5"
                    alt=""
                    src="/avatar--woman--6@2x.png"
                  />
                </div>
              </td>
              <td className="th1">
                <div className="chip-priority-high2">
                  <div className="sheet1" />
                  <b className="title">kandy</b>
                </div>
              </td>
            </tr>
            <tr>
              <td className="th1" rowSpan={3} colSpan={2}>
                <img
                  className="divider-line-horizontal4"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </td>
            </tr>
            <tr />
            <tr />
          </tbody>
        </table>
        <table className="table-ticket-priority-high1">
          <thead>
            <tr>
              <th className="th1" rowSpan={2} colSpan={2}>
                <img
                  className="divider-line-horizontal3"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr />
            <tr>
              <td className="td5">
                <div className="content2">
                  <div className="time-label2">7:30 PM</div>
                  <div className="date-label2">May 26, 2019</div>
                  <div className="customer-name2">Robert Downey</div>
                  <img
                    className="avatar-man-5"
                    alt=""
                    src="/avatar--woman--3@2x.png"
                  />
                </div>
              </td>
              <td className="th1">
                <div className="chip-priority-high2">
                  <div className="sheet1" />
                  <b className="title">Maharagama</b>
                </div>
              </td>
            </tr>
            <tr>
              <td className="th1" rowSpan={3} colSpan={2}>
                <img
                  className="divider-line-horizontal4"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </td>
            </tr>
            <tr />
            <tr />
          </tbody>
        </table>
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
        <div className="table-bottom">
          <div className="rows-per-page">
            <div className="rows-per-page1">Rows per page:</div>
            <div className="div5">7</div>
            <img className="icon-dropdown" alt="" src="/icon--dropdown.svg" />
          </div>
          <div className="pagination">
            <div className="of-1240">1-7 of 1240</div>
            <img
              className="icon-arrow-left"
              alt=""
              src="/icon--arrow--left.svg"
            />
            <img
              className="icon-arrow-right"
              alt=""
              src="/icon--arrow--right.svg"
            />
          </div>
        </div>
        <b className="all-users">All Users</b>
        <table className="table-ticket-priority-norm">
          <thead>
            <tr>
              <th className="th1" rowSpan={2} colSpan={2}>
                <img
                  className="divider-line-horizontal3"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr />
            <tr>
              <td className="td8">
                <div className="content2">
                  <div className="time-label2">5:00 PM</div>
                  <div className="date-label2">May 25, 2019</div>
                  <div className="customer-name2">Christian Bale</div>
                  <img
                    className="avatar-man-5"
                    alt=""
                    src="/avatar--man--7@2x.png"
                  />
                </div>
              </td>
              <td className="th1">
                <div className="chip-priority-high2">
                  <div className="sheet1" />
                  <b className="title">pettah</b>
                </div>
              </td>
            </tr>
            <tr>
              <td className="th1" rowSpan={3} colSpan={2}>
                <img
                  className="divider-line-horizontal4"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </td>
            </tr>
            <tr />
            <tr />
          </tbody>
        </table>
        <table className="table-ticket-priority-norm1">
          <thead>
            <tr>
              <th className="th1" rowSpan={2} colSpan={2}>
                <img
                  className="divider-line-horizontal3"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr />
            <tr>
              <td className="td11">
                <div className="content2">
                  <div className="time-label2">2:00 PM</div>
                  <div className="date-label2">May 25, 2019</div>
                  <div className="customer-name2">Chris Evans</div>
                  <img
                    className="avatar-man-5"
                    alt=""
                    src="/avatar--man--4@2x.png"
                  />
                </div>
              </td>
              <td className="th1">
                <div className="chip-priority-high2">
                  <div className="sheet1" />
                  <b className="title">malabe</b>
                </div>
              </td>
            </tr>
            <tr>
              <td className="th1" rowSpan={3} colSpan={2}>
                <img
                  className="divider-line-horizontal4"
                  alt=""
                  src="/divider--line--horizontal2.svg"
                />
              </td>
            </tr>
            <tr />
            <tr />
          </tbody>
        </table>
        <div className="table-ticket-priority-high2">
          <div className="sheet7" />
          <div className="content6">
            <div className="time-label6">4:00 PM</div>
            <div className="date-label6">May 25, 2019</div>
            <div className="customer-name6">Henry Cavil</div>
            <img className="avatar-man-6" alt="" src="/avatar--man--6@2x.png" />
          </div>
          <img
            className="divider-line-horizontal15"
            alt=""
            src="/divider--line--horizontal3.svg"
          />
          <img
            className="divider-line-horizontal16"
            alt=""
            src="/divider--line--horizontal3.svg"
          />
          <div className="chip-priority-high6">
            <div className="sheet1" />
            <b className="title2">kaduwela</b>
          </div>
        </div>
        <table className="table-top">
          <tbody>
            <tr>
              <td className="td14">
                <b className="user-name">User name</b>
              </td>
              <td className="td14">
                <b className="joined-date">Joined Date</b>
              </td>
              <td className="td16">
                <b className="town">Town</b>
              </td>
            </tr>
            <tr>
              <td className="td16" rowSpan={4} colSpan={3}>
                <img
                  className="divider-line-horizontal17"
                  alt=""
                  src="/divider--line--horizontal4.svg"
                />
              </td>
            </tr>
            <tr />
            <tr />
            <tr />
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default UserManagement;
