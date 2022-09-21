let productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  console.log(event.target);
  let quantityP =
    event.target.parentElement.parentElement.querySelector(
      ".product-quantity"
    );

let eachPrice = quantityP.parentElement.parentElement.querySelector("strong");
  if (event.target.classList.contains("fa-minus")) {
    quantityP.textContent -= 1;

    if(quantityP.textContent < 1){
       quantityP.parentElement.parentElement.parentElement.remove();
    }
  }
  else if (event.target.classList.contains("fa-plus")) {
    quantityP.textContent++;
    eachPrice.textContent *= quantityP.innerText;
  }
});
