import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import "../assets/css/sidebar-nav.css";
import useWindowDimensions from "../hooks/useWindowDimentions";
import SettingsIcon from "../assets/images/icons/Settings";
import HomeIcon from "../assets/images/icons/Home";
import DashboardLogo from "../assets/images/icons/dashboardicons/dashboardLogo";
import RequestIcon from "../assets/images/icons/dashboardicons/requests";
import TransactionHistoryIcon from "../assets/images/icons/dashboardicons/transactionHistory";
import ItemCategoriesIcon from "../assets/images/icons/dashboardicons/itemCategories";
import AppUsersIcon from "../assets/images/icons/dashboardicons/appUsers";
import StoreIcon from "../assets/images/icons/dashboardicons/store";

const SidebarNav = () => {
  return (
    <Sidebar
      defaultCollapsed={useWindowDimensions()}
      width="265px"
      collapsedWidth="65px"
      backgroundColor="#fff"
      className="main-navigation"
    >
      <Menu className="app-logo">
        <NavLink to="/home">
          <MenuItem>
            <span className="menu-icon w-100 m-0">
              <DashboardLogo />
            </span>
          </MenuItem>
        </NavLink>
      </Menu>
      <Menu className="mt-3 gap-2">
        <NavLink to="/home" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <HomeIcon />
            </span>
            <span className="menu-text">Home</span>
          </MenuItem>
        </NavLink>
        <NavLink to="/stores" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <StoreIcon />
            </span>
            <span className="menu-text">Stores</span>
          </MenuItem>
        </NavLink>
        <NavLink to="/users" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <AppUsersIcon />
            </span>
            <span className="menu-text">App Users</span>
          </MenuItem>
        </NavLink>
        <NavLink to="/item-categories" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <ItemCategoriesIcon />
            </span>
            <span className="menu-text">Items Categories</span>
          </MenuItem>
        </NavLink>
        <NavLink to="/transaction-history" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <TransactionHistoryIcon />
            </span>
            <span className="menu-text">Transactions History</span>
          </MenuItem>
        </NavLink>
        <NavLink to="/requests" className="menu-item-link">
          <MenuItem>
            <span className="menu-icon">
              <RequestIcon />
            </span>
            <span className="menu-text">Requests</span>
          </MenuItem>
        </NavLink>
        <NavLink to="/support" className="menu-item-link footer">
          <MenuItem>
            <span className="menu-icon">
              <SettingsIcon />
            </span>
            <span className="menu-text">Settings</span>
          </MenuItem>
        </NavLink>
      </Menu>
    </Sidebar>
  );
};


export default SidebarNav;
