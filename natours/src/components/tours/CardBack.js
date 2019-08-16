import React, { Component } from "react";
import Link from "react-router-dom/Link";

class CardFront extends Component {
  render() {
    const { price } = this.props;
    return (
      <div>
        <div className='card__cta'>
          <div className='card__price-box'>
            <p className='card__price-only'>Only</p>
            <p className='card__price-value'>${price}</p>
          </div>
          <Link to='/book' className='btn btn-white'>
            Book now!
          </Link>
        </div>
      </div>
    );
  }
}

export default CardFront;
