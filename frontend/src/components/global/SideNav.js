import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="#" className="brand-link">
          <img
            src="/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          />
          <span className="brand-text font-weight-light">CAR STEAM</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/user8-128x128.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                Ahmad Riza Hafiz
              </Link>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Package</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>Vehicle</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>Setting</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <p>Logout</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;
