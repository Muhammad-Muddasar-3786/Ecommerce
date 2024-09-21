import { addToCart } from './addToCart.js';
import { homeQuantityToggle } from './homeQuantityToggle.js';


const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate')

export const showProductContainer =  (products) => {

if (!products) {
    return false;
}

products.forEach(curProduct => {
    const {id, name, category, brand, price, stock, description, image
      } = curProduct


      const productClone = document.importNode(productTemplate.content, true);
// --------FOR ADDING TOGGLR-----------
      productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    
      productClone.querySelector(".category").textContent = category;
      productClone.querySelector(".productName").textContent = name;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productImage").alt = name;
      productClone.querySelector(".productStock").textContent = stock;
      productClone.querySelector(".productDescription").textContent = description;
      productClone.querySelector(".productPrice").textContent = `₹${price}`;
      productClone.querySelector(".productActualPrice").textContent = `₹${
        price * 4
      }`;

      
      // --------FOR ADDING TOGGLR-----------
        productClone
          .querySelector(".stockElement")
          .addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock); 
          });

 // --------FOR ADDING ADD TO CART-----------

    productClone
    .querySelector('.add-to-cart-button')
    .addEventListener("click", (event) => {
       
      addToCart(event, id, stock);

    })
        


      productContainer.append(productClone)
    
});

}














