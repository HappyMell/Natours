import React, { Component } from "react";
import Link from "react-router-dom/Link";
import NaturePhoto1 from "../img/nat-1-large.jpg";
import NaturePhoto2 from "../img/nat-2-large.jpg";
import NaturePhoto3 from "../img/nat-3-large.jpg";

class About extends Component {
  render() {
    return (
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            Exciting tours for adventurous people
          </h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              You're going to fall in love with nature
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
              blanditiis eligendi soluta assumenda dolores aspernatur sit a nemo
              quis consectetur eos ullam amet!
            </p>

            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live adventures like you never have before
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              explicabo eaque eos ea culpa distinctio, delectus non obcaecati
              expedita autem atque.
            </p>
            <Link to='/tours' href='#' className='btn-text'>
              Learn more &rarr;
            </Link>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                src={NaturePhoto1}
                alt='Overlay1'
                className='composition__photo composition__photo--p1'
              />
              <img
                src={NaturePhoto2}
                alt='Overlay2'
                className='composition__photo composition__photo--p2'
              />
              <img
                src={NaturePhoto3}
                alt='Overlay3'
                className='composition__photo composition__photo--p3'
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
