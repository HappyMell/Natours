import React, { Component } from "react";

class CardFront extends Component {
  render() {
    const { details } = this.props;
    const detailsList = details.map(detail => {
      return (
        <div key={detail.id}>
          <div className='card__details'>
            <ul>
              <li>{detail.day}</li>
              <li>{detail.numberOfPeople}</li>
              <li>{detail.tourGuides}</li>
              <li>{detail.accomodation}</li>
              <li>{detail.difficulty}</li>
            </ul>
          </div>
        </div>
      );
    });
    return <div className='detail-list'>{detailsList}</div>;
  }
}

export default CardFront;
