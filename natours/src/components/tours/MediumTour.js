import React, { Component } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class MediumTour extends Component {
  state = {
    details: [
      {
        day: "4 day tour",
        numberOfPeople: "Up to 20 people",
        tourGuides: "2 tour guides",
        accomodation: "Sleep in cozy hostels",
        difficulty: "Difficulty: Medium",
        id: 1
      },
      {
        day: "7 day tour",
        numberOfPeople: "Up to 15 people",
        tourGuides: "2 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Medium",
        id: 2
      },
      {
        day: "5 day tour",
        numberOfPeople: "Up to 20 people",
        tourGuides: "3 tour guides",
        accomodation: "Sleep in provided tents",
        difficulty: "Difficulty: Medium",
        id: 3
      }
    ]
  };
  render() {
    const { name, name1, name2 } = this.props;
    return (
      <div className='u-margin-bottom-big'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Discover Medium Tours</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--7'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--7'>
                    {name}
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-7'>
                <CardBack price='597' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--8'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--8'>
                    {name1}
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-8'>
                <CardBack price='397' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--9'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--9'>
                    {name2}
                  </span>
                </h4>
                <CardFront details={this.state.details} />
              </div>
              <div className='card__side card__side--back card__side--back-9'>
                <CardBack price='597' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MediumTour;
