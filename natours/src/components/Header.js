import React, { Component } from "react";
import Link from "react-router-dom/Link";
import HeaderLogo from "../img/logo-white.png";

class Header extends Component {
  render() {
    const { main, under } = this.props;
    return (
      <header className='header'>
        <div className='header__logo-box'>
          <Link to='/'>
            <img src={HeaderLogo} alt='Logo' className='header__logo' />
          </Link>
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary-main'>{main}</span>
            <span className='heading-primary-sub'>{under}</span>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
