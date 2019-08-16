import React, { Component } from "react";
import LogoSm from "../img/logo-green-small-1x.png";
import LogoLg from "../img/logo-green-2x.png";
import Link from "react-router-dom/Link";

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <source srcSet={LogoSm} media='(max-width: 37.5em)' />
            <img srcSet={LogoLg} alt='Full logo' />
          </picture>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <Link to='#' href='#' className='footer__link'>
                    Company
                  </Link>
                </li>
                <li className='footer__item'>
                  <Link to='#' href='#' className='footer__link'>
                    Contact Us
                  </Link>
                </li>
                <li className='footer__item'>
                  <Link to='#' href='#' className='footer__link'>
                    Careers
                  </Link>
                </li>
                <li className='footer__item'>
                  <Link to='#' href='#' className='footer__link'>
                    Privacy Policy
                  </Link>
                </li>
                <li className='footer__item'>
                  <Link to='#' href='#' className='footer__link'>
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built by{" "}
              <Link to='#' href='#' className='footer__link'>
                Mellisa Madrid
              </Link>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
