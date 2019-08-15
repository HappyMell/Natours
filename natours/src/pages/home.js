import React, { Component } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import PopTours from "../components/tours/PopTours";
import Stories from "../components/Stories";
import Booking from "../components/Booking";

class Home extends Component {
  render() {
    return (
      <div>
        <Header main='Outdoors' under='Is where life happens' />
        <About />
        <Features />
        <PopTours />
        <Stories />
        <Booking />
      </div>
    );
  }
}

export default Home;
