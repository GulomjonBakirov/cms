import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChatIcon from "@material-ui/icons/Chat";
import DateRangeIcon from "@material-ui/icons/DateRange";
import StorageIcon from "@material-ui/icons/Storage";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebarLogo">School</div>
      <ul className="sidebarList">
        <li className="sidebarItem">
          <DashboardIcon className="sidebarIcon" />
          <a className="sidebarLink">Dashboard</a>
        </li>
        <li className="sidebarItem">
          <ChatIcon className="sidebarIcon" />
          <a className="sidebarLink">Messenger</a>
        </li>
        <li className="sidebarItem">
          <DateRangeIcon className="sidebarIcon" />
          <a className="sidebarLink">Calendar</a>
        </li>
        <li className="sidebarItem">
          <StorageIcon className="sidebarIcon" />
          <a className="sidebarLink">Database</a>
        </li>
        <li className="sidebarItem">
          <EqualizerOutlinedIcon className="sidebarIcon" />
          <a className="sidebarLink">Attendance</a>
        </li>
        <li className="sidebarItem">
          <SettingsOutlinedIcon className="sidebarIcon" />
          <a className="sidebarLink">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
