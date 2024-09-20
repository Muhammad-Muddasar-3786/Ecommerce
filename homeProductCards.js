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
    
      productClone.querySelector('.productName').textcontent = name;


      productContainer.append(productClone)
    
});

}



