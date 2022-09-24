const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 200;
window.addEventListener("load", () => {
  calculateCartPrice();
//  //!  set items to local storage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
//   //! set items to session storage
});

const productsDiv = document.querySelector(".products");
// Capturing vs. Bubbling
productsDiv.addEventListener("click", (event) => {
    if(event.target.className === "fa-solid fa-minus"){
      if(event.target.nextElementSibling.innerText > 1){
        event.target.nextElementSibling.innerText--;
        calculateProductPrice(event.target);
        calculateCartPrice();

      } else{
        if(confirm(`Would you like to remove the ${event.target.parentElement.parentElement.firstElementChild.innerText}?`)){
          //remove the div from the cart
          event.target.parentElement.parentElement.parentElement.remove();
          calculateCartPrice();
        }
      }
    } else if(event.target.classList.contains("fa-plus")){
        event.target.previousElementSibling.innerText++;
        calculateProductPrice(event.target);
        calculateCartPrice();

    } else if(event.target.className === "remove-product"){
          event.target.parentElement.parentElement.parentElement.remove();
          calculateCartPrice();


    }
});

const calculateProductPrice = (clickedBtn) => {
  const productInfoDiv = clickedBtn.parentElement.parentElement;
   const price = productInfoDiv.querySelector(".product-price strong").innerText;
   const quantity = productInfoDiv.querySelector(".quantity").innerText;
   const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
   productTotalDiv.innerText = (price * quantity).toFixed(2);

}
const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(".product-line-price");
  // foreach ==> NodeList, Array
  let subTotal = 0;
  productsTotalPricesDivs.forEach(div => {    
    subTotal += parseFloat(div.innerText);
  });
    const taxPrice = subTotal * localStorage.getItem("taxRate");

    const shippingPrice = parseFloat((subTotal > 0 && subTotal < localStorage.getItem("shippingFreePrice") ? localStorage.getItem("shippingPrice") : 0));

    document.querySelector("#cart-subtotal").lastElementChild.innerText = subTotal.toFixed(2);

    document.querySelector("#cart-tax").lastElementChild.innerText = (subTotal * localStorage.getItem("taxRate")).toFixed(2);

    document.querySelector("#cart-shipping").children[1].innerText = shippingPrice.toFixed(2);

    document.querySelector("#cart-total").lastElementChild.innerText = Number(subTotal + taxPrice + shippingPrice).toFixed(2);

    

}











