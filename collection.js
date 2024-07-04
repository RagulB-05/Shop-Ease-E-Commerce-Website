const productContainer = document.getElementById("product");
const search = document.getElementById("search");
const productList = productContainer.querySelectorAll("div");

const searchlist = function () {
  const enteredValue = event.target.value.toUpperCase();

  for (i = 0; i < productList.length; i++) {
    const productName = productList[i].querySelector("p").textContent;

    if (productName.toUpperCase().indexOf(enteredValue) < 0) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
};

search.addEventListener("keyup", searchlist);
