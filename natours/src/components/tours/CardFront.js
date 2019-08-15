import React, { Component } from "react";

class CardFront extends Component {
  render() {
    const {
      day,
      numberOfPeople,
      tourGuides,
      accomodation,
      difficulty
    } = this.props;
    return (
      <div>
        <div class='card__details'>
          <ul>
            <li>{day}</li>
            <li>{numberOfPeople}</li>
            <li>{tourGuides}</li>
            <li>{accomodation}</li>
            <li>{difficulty}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CardFront;
