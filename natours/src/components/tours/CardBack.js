import React, { Component } from "react";
import Link from "react-router-dom/Link";

class CardFront extends Component {
  render() {
    const { price } = this.props;
    return (
      <div>
        <div class='card__cta'>
          <div class='card__price-box'>
            <p class='card__price-only'>Only</p>
            <p class='card__price-value'>${price}</p>
          </div>
          <Link to='/book' class='btn btn-white'>
            Book now!
          </Link>
        </div>
      </div>
    );
  }
}

export default CardFront;
