import React, { Component } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class HardTours extends Component {
  state = {
    details: [
      {
        day: "7 day tour",
        numberOfPeople: "Up to 5 people",
        tourGuides: "1 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Hard",
        id: 1
      },
      {
        day: "4 day tour",
        numberOfPeople: "Up to 10 people",
        tourGuides: "2 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Hard",
        id: 2
      },
      {
        day: "2 day tour",
        numberOfPeople: "Up to 15 people",
        tourGuides: "2 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Hard",
        id: 3
      }
    ]
  };
  render() {
    const { name, name1, name2 } = this.props;

    return (
      <div className='u-margin-bottom-big'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Discover Hard Tours</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--10'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--10'>
                    {name}
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-10'>
                <CardBack price='795' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--11'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--11'>
                    {name1}
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-11'>
                <CardBack price='697' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--12'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--12'>
                    {name2}
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-12'>
                <CardBack price='597' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HardTours;
