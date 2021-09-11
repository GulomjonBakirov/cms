import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardInfo from "../components/DashboardInfo";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="AdminDashboard">
      <div className="search">
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search for student, teacher, document ..."
        />
      </div>
      <h1 className="dashboardTitle">Dashboard</h1>
      <ul className="menu">
        <li className="menuItem">
          <LocalLibraryIcon className="menuItemIcon" />
          <Link to="/dashboard/students" className="menuLink">
            Students <span className="val">302</span>
          </Link>
        </li>
        <li className="menuItem">
          <FaChalkboardTeacher className="menuItemIcon" />
          <Link to="/dashboard/teachers" className="menuLink">
            Teachers <span className="val">33</span>
          </Link>
        </li>
        <li className="menuItem">
          <BsFillPersonLinesFill className="menuItemIcon" />
          <Link to="/dashboard/staffs" className="menuLink">
            Staffs <span className="val">28</span>
          </Link>
        </li>
      </ul>
      <DashboardInfo />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
