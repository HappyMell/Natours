import React, { Component } from "react";
import Video from "../img/video.mp4";
import Video2 from "../img/video.webm";
import Photo1 from "../img/nat-8.jpg";
import Photo2 from "../img/nat-9.jpg";

class Stories extends Component {
  render() {
    return (
      <section className='section-stories'>
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={Video} type='video/mp4' />
            <source src={Video2} type='video.webm' />
            Your browser is not supported
          </video>
        </div>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>We make people genuinely happy</h2>
        </div>
        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={Photo1}
                alt='Person on a tour'
                className='story__image'
              />
              <figcaption className='story__caption'>Mary Smith</figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis veritatis aperiam quod! Quos veniam alias
                necessitatibus, quibusdam accusamus consectetur! Ipsa autem
                architecto harum quam rerum asperiores fuga cupiditate excepturi
                tempore.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={Photo2}
                alt='Person on a tour'
                className='story__image'
              />
              <figcaption className='story__caption'>Jack Wilson</figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Wow! My life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis veritatis aperiam quod! Quos veniam alias
                necessitatibus, quibusdam accusamus consectetur! Ipsa autem
                architecto harum quam rerum asperiores fuga cupiditate excepturi
                tempore.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Stories;
