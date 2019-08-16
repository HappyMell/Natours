import React, { Component } from "react";
import Link from "react-router-dom/Link";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class Tours extends Component {
  state = {
    details: [
      {
        day: "3 day tour",
        numberOfPeople: "Up to 30 people",
        tourGuides: "2 tour guides",
        accomodation: "Sleep in cozy hostels",
        difficulty: "Difficulty: Easy",
        id: 1
      },
      {
        day: "7 day tour",
        numberOfPeople: "Up to 40 people",
        tourGuides: "6 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Medium",
        id: 2
      },
      {
        day: "5 day tour",
        numberOfPeople: "Up to 15 people",
        tourGuides: "3 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Hard",
        id: 3
      }
    ]
  };
  render() {
    return (
      <section className='section-tours' id='section-tours'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Most popular tours</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--1'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--1'>
                    The Sea Explorer
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-1'>
                <CardBack price='295' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--2'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--2'>
                    The Forest Hiker
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-2'>
                <CardBack price='497' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--3'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--3'>
                    The Snow Adventurer
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-3'>
                <CardBack price='897' />
              </div>
            </div>
          </div>
        </div>
        <div className='u-center-text u-margin-top-huge'>
          <Link to='/tour' href='#' className='btn btn--green'>
            Discover all tours
          </Link>
        </div>
      </section>
    );
  }
}

export default Tours;
