import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../assets/css/sidebar-nav.css";
import useWindowDimensions from "../hooks/useWindowDimentions";
import SettingsIcon from "../assets/images/icons/Settings";
import MessagesIcon from "../assets/images/icons/Messages";
import PaymentIcon from "../assets/images/icons/Payment";
import ManagerIcon from "../assets/images/icons/Manager";
import BookingIcon from "../assets/images/icons/Booking";
import HomeIcon from "../assets/images/icons/Home";
import SpacesIcon from "../assets/images/icons/Spaces";

const SidebarNav = () => {

  return (
    <Sidebar
      defaultCollapsed={useWindowDimensions()}
      width="290px"
      collapsedWidth="65px"
      backgroundColor="#fff"
      className="main-navigation"
    >
      <Menu className="mt-3 gap-2">
        <NavLink to="/" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <HomeIcon />
            </span>
            Home
          </MenuItem>
        </NavLink>
        <NavLink to="/stores" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <HomeIcon />
            </span>
            Stores
          </MenuItem>
        </NavLink>
        <NavLink to="/users" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <SpacesIcon />
            </span>
            App Users
          </MenuItem>
        </NavLink>
        <NavLink to="/item-categories" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <BookingIcon />
            </span>
            Items Categories
          </MenuItem>
        </NavLink>
        <NavLink to="/transaction-history" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <ManagerIcon />
            </span>
            Transactions History
          </MenuItem>
        </NavLink>
        <NavLink to="/requests" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <PaymentIcon />
            </span>
            Requests
          </MenuItem>
        </NavLink>
      </Menu>

      <Menu className="sidebar-footer">
        <NavLink to="/support" className="menu-item-link footer">
          <MenuItem>
            <span className="menu-icon">
              <SettingsIcon />
            </span>
            Settings
          </MenuItem>
        </NavLink>
      </Menu>
    </Sidebar>
  );
};

export default SidebarNav;
