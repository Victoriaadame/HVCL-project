// If your button has an ID:
const myButton = document.getElementById('myButtonId'); 

// If your button has a class:
const myButton = document.querySelector('.myButtonClass'); 
// (querySelector selects the first element with that class)

// If you want to select the first button element on the page:
const myButton = document.querySelector('button'); 


myButton.addEventListener('click', function() {
  // Code to be executed when the button is clicked
  console.log('Button was clicked!');
  // You can call other functions, modify elements, send data, etc.
});