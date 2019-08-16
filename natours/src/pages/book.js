import React, { Component } from "react";
import Header from "../components/Header";
import BookingForm from "../components/Booking";

class Book extends Component {
  render() {
    return (
      <div>
        <Header main='Booking' under='See whats happening now' />
        <BookingForm />
      </div>
    );
  }
}

export default Book;
