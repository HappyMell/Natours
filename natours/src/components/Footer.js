import React, { Component } from "react";
import LogoSm from "../img/logo-green-small-1x.png";
import LogoLg from "../img/logo-green-2x.png";

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <source srcset={LogoSm} media='(max-width: 37.5em)' />
            <img srcset={LogoLg} alt='Full logo' />
          </picture>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Company
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Contact Us
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Careers
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Privacy Policy
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built by{" "}
              <a href='#' className='footer__link'>
                Mellisa Madrid
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
