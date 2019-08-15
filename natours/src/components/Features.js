import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <div>
        <section className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon fa fa-globe' />
                <h3 className='heading-tertiary  u-margin-bottom-small'>
                  Explore the world
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  explicabo eaque eos ea culpa distinctio.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon fa fa-compass' />
                <h3 className='heading-tertiary  u-margin-bottom-small'>
                  Meet nature
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  explicabo eaque eos ea culpa distinctio.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon fa fa-map' />
                <h3 className='heading-tertiary  u-margin-bottom-small'>
                  Find your way
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  explicabo eaque eos ea culpa distinctio.
                </p>
              </div>
            </div>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon fa fa-heart' />
                <h3 className='heading-tertiary  u-margin-bottom-small'>
                  Live a healthier life
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  explicabo eaque eos ea culpa distinctio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
