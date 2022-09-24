const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;
window.addEventListener("load", () => {
  // set items to local storage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippinFreePrice", shippingFreePrice);
  // set items to session storage
  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippinFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
// Capturing vs. Bubbling
productsDiv.addEventListener("click", (event) => {
    if(event.target.className === "fa-solid fa-minus"){
      if(event.target.nextElementSibling.innerText > 1){
        event.target.nextElementSibling.innerText--;
      } else{
        if(confirm("Would you like to remove the item?")){
          //remove the div from the cart
          event.target.parentElement.parentElement.parentElement.remove()
        }
      }
    } else if(event.target.classList.contains("fa-plus")){
      event.target.previousElementSibling.innerText++;

    } else if(event.target.className === "remove-product"){
          event.target.parentElement.parentElement.parentElement.remove()
      
    };
});













