import React, { Component } from "react";
import Header from "../components/Header";
import PopTours from "../components/tours/PopTours";
import EasyTour from "../components/tours/EasyTour";
import MediumTour from "../components/tours/MediumTour";
import HardTour from "../components/tours/HardTours";

class Tours extends Component {
  render() {
    return (
      <div>
        <Header main='Tours' under='See where it takes you' />
        <PopTours />
        <EasyTour
          name='The River Jumper'
          name1='The Spring Soaker'
          name2='The Valley Roller'
        />
        <MediumTour
          name='The Cave Snorkeler'
          name1='The Forest Hiker'
          name2='The Cliff Climber'
        />

        <HardTour
          name='The Mountain Explorer'
          name1='The Tundra Expedition'
          name2='The Desert Adventurer'
        />
      </div>
    );
  }
}

export default Tours;
