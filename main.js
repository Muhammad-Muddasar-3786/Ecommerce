// import "./style.css";

// import products from "./api/products.json";


// Use fetch to load the products.json file
fetch('./api/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(products => {
    // Now you have access to the products data
    console.log(products);

    // You can use the products data here in your app
    // Example: Display product names in the console
    products.forEach(products => {
      console.log(products.name);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



  // --------IMPORT CARDS-----------

 import {showProductContainer} from './homeProductCards.js';
 fetch('./api/products.json')
 .then(response => response.json())
 .then(products => {
   // Call the function to display products
   showProductContainer(products);
 })
 .catch(error => {
   console.error('Error fetching the products:', error);
 });

 // ---------CARDS ADDED ABOVE-----------