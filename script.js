'use strict';

const buyBtn = document.querySelector('.buy');
const pollBtn = document.querySelector('.poll');




/*
* * Default Parameters ES5 & ES6 way 

const bookings = [];

const createBooking = function (flightNum, numPass = 1, price = 100 * numPass) {
  //ES5 Default values
  // numPass = numPass || 1;
  // price = price || 100;

  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('UA1234'); // Show casing default values
createBooking('UA1234', 2, 100); // Normal entry
createBooking('UA1234', 2); // price is calculated based on num pass using default values
createBooking('UA1234', undefined, 100); // skipping default values by setting as undefined
*/
