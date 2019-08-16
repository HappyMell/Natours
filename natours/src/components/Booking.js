import React, { Component } from "react";
import PopTours from "../components/tours/PopTours";

class Booking extends Component {
  render() {
    return (
      <div>
        <PopTours />
        <section className='section-book u-margin-top-huge'>
          <div className='row'>
            <div className='book'>
              <div className='book__form'>
                <form action='#' className='form'>
                  <div className=' u-margin-bottom-medium'>
                    <h2 className='heading-secondary'>Start booking now</h2>
                  </div>
                  <div className='form__group'>
                    <input
                      type='text'
                      className='form__input'
                      placeholder='Full name'
                      required
                      id='name'
                    />
                    <label htmlFor='name' className='form__label'>
                      Full name
                    </label>
                  </div>
                  <div className='form__group'>
                    <input
                      type='email'
                      className='form__input'
                      placeholder='Email address'
                      required
                      id='email'
                    />
                    <label htmlFor='email' className='form__label'>
                      Email address
                    </label>
                  </div>
                  <div className='form__group u-margin-bottom-medium'>
                    <select className='form__select' id='tour'>
                      <option>Choose a tour</option>
                      <option>The Sea Explorer</option>
                      <option>The Forest Hiker</option>
                      <option>The Snow Adventurer</option>
                      <option>The River Jumper</option>
                      <option>The Spring Soaker</option>
                      <option>The Valley Roller</option>
                      <option>The Cave Snorkeler</option>
                      <option>The Forest Hiker</option>
                      <option>The Cliff Climber</option>
                      <option>The Mountain Explorer</option>
                      <option>The Tundra Expedition</option>
                      <option>The Desert Adventurer</option>
                    </select>
                  </div>

                  <div className='form__group u-margin-bottom-medium'>
                    <div className='form__radio-group'>
                      <input
                        type='radio'
                        className='form__radio-input'
                        id='small'
                        name='size'
                      />
                      <label htmlFor='small' className='form__radio-label'>
                        <span className='form__radio-button' />
                        Small tour group
                      </label>
                    </div>
                    <div className='form__radio-group'>
                      <input
                        type='radio'
                        className='form__radio-input'
                        id='large'
                        name='size'
                      />
                      <label htmlFor='large' className='form__radio-label'>
                        <span className='form__radio-button' />
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div className='form__group'>
                    <button className='btn btn--green'>Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Booking;
