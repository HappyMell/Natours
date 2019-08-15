import React, { Component } from "react";

class Booking extends Component {
  render() {
    return (
      <section class='section-book'>
        <div class='row'>
          <div class='book'>
            <div class='book__form'>
              <form action='#' class='form'>
                <div class=' u-margin-bottom-medium'>
                  <h2 class='heading-secondary'>Start booking now</h2>
                </div>
                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='Full name'
                    required
                    id='name'
                  />
                  <label for='name' class='form__label'>
                    Full name
                  </label>
                </div>
                <div class='form__group'>
                  <input
                    type='email'
                    class='form__input'
                    placeholder='Email address'
                    required
                    id='email'
                  />
                  <label for='email' class='form__label'>
                    Email address
                  </label>
                </div>

                <div class='form__group u-margin-bottom-medium'>
                  <div class='form__radio-group'>
                    <input
                      type='radio'
                      class='form__radio-input'
                      id='small'
                      name='size'
                    />
                    <label for='small' class='form__radio-label'>
                      <span class='form__radio-button' />
                      Small tour group
                    </label>
                  </div>
                  <div class='form__radio-group'>
                    <input
                      type='radio'
                      class='form__radio-input'
                      id='large'
                      name='size'
                    />
                    <label for='large' class='form__radio-label'>
                      <span class='form__radio-button' />
                      Large tour group
                    </label>
                  </div>
                </div>

                <div class='form__group'>
                  <button class='btn btn--green'>Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Booking;
