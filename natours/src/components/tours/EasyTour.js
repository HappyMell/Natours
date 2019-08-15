import React, { Component } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

class EasyTour extends Component {
  render() {
    const { name, name1, name2 } = this.props;
    return (
      <div className='u-margin-bottom-big'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Discover easy tours</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-3'>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--4'>&nbsp;</div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--4'>
                    {name}
                  </span>
                </h4>
                <CardFront
                  day='3 day tour'
                  numberOfPeople='Up to 10 people'
                  tourGuides='1 tour guide'
                  accomodation='Sleep in cozy cabin'
                  difficulty='Difficulty: Easy'
                />
              </div>
              <div class='card__side card__side--back card__side--back-4'>
                <CardBack price='295' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--5'>&nbsp;</div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--5'>
                    {name1}
                  </span>
                </h4>
                <CardFront
                  day='2 day tour'
                  numberOfPeople='Up to 6 people'
                  tourGuides='1 tour guide'
                  accomodation='Sleep in cozy cabin'
                  difficulty='Difficulty: Easy'
                />
              </div>
              <div class='card__side card__side--back card__side--back-5'>
                <CardBack price='297' />
              </div>
            </div>
          </div>
          <div className='col-1-of-3'>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--6'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--2'>
                    {name2}
                  </span>
                </h4>
                <CardFront
                  day='5 day tour'
                  numberOfPeople='Up to 10 people'
                  tourGuides='1 tour guide'
                  accomodation='Sleep in cozy cabin'
                  difficulty='Difficulty: Easy'
                />
              </div>
              <div className='card__side card__side--back card__side--back-2'>
                <CardBack price='297' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyTour;
