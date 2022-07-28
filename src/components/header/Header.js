import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link, NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import "./Header.css";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
