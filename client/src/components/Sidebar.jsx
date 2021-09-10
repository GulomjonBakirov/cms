import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChatIcon from "@material-ui/icons/Chat";
import DateRangeIcon from "@material-ui/icons/DateRange";
import StorageIcon from "@material-ui/icons/Storage";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const isActive = (e) => {
    e.preventDefault();
    setActive(true);
  };
  return (
    <div className="Sidebar">
      <div className="sidebarLogo">School</div>
      <ul className="sidebarList">
        <li
          className="sidebarItem"
          // style={{ color: active ? "#39ba76" : "#acaeb4" }}
          // onClick={(e) => isActive(e)}
        >
          <DashboardIcon className="sidebarIcon" />
          <Link to="/" className="sidebarLink">
            Dashboard
          </Link>
        </li>
        <li className="sidebarItem" value="messenger">
          <ChatIcon className="sidebarIcon" />
          <Link to="/messenger" className="sidebarLink">
            Messenger
          </Link>
        </li>
        <li className="sidebarItem" value="calendar">
          <DateRangeIcon className="sidebarIcon" />
          <Link to="/calendar" className="sidebarLink">
            Calendar
          </Link>
        </li>
        <li className="sidebarItem" value="database">
          <StorageIcon className="sidebarIcon" />
          <Link to="/database" className="sidebarLink">
            Database
          </Link>
        </li>
        <li className="sidebarItem" value="attendance">
          <EqualizerOutlinedIcon className="sidebarIcon" />
          <Link to="/attendance" className="sidebarLink">
            Attendance
          </Link>
        </li>
        <li className="sidebarItem" value="settings">
          <SettingsOutlinedIcon className="sidebarIcon" />
          <Link to="/settings" className="sidebarLink">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
