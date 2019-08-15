import React, { Component } from "react";
import Link from "react-router-dom/Link";

class Nav extends Component {
  render() {
    return (
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />
        <label htmlFor='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>&nbsp;</span>
        </label>
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <Link to='/tours' href='#' className='navigation__link'>
                <span>01</span>Popular Tours
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/stories' href='#' className='navigation__link'>
                <span>02</span>Stories
              </Link>
            </li>
            <li className='navigation__item'>
              <Link to='/book' href='#' className='navigation__link'>
                <span>03</span>Book Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
