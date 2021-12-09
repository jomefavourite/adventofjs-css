const addCartButtons = document.querySelectorAll(".btn-cart");
const cartContainer = document.querySelector(".cart-container");
// const decreaseCartItem = document.querySelector("#btnLeft");
// const increaseCartItem = document.querySelector("#btnRight");

const state = [];

addCartButtons.forEach((button) => {
  button.addEventListener("click", getFoodInfo);
});

function getFoodInfo() {
  // changing text bg and color and icon
  this.children[0]?.classList.toggle("hide");
  this.classList.toggle("btn-clicked");
  this.children[1]?.classList.toggle("clicked");
  this.children[2]?.classList.toggle("clicked");

  let id = parseInt(this.dataset.id);

  if (state.length > 0) {
    let found = state.some((item) => {
      return parseInt(item.id) == id;
    });

    if (found) {
      state.splice(state[id - 1], 1);
      // let newState = state.filter((data) => {
      //   return data.id !== id;
      // });

      // // delete state[this.dataset.id - 1];
      addToCart(state);
      return;
    }
  }
  state.push({
    id: parseInt(this.dataset.id),
    price: this.dataset.price,
    foodName: this.dataset.foodname,
    value: 1,
    quantityPrice: this.dataset.price,
  });

  addToCart(state);
}

function addToCart(foods) {
  console.log(foods);
  cartContainer.innerHTML = "";
  foods.forEach((food) => {
    cartContainer.innerHTML += `
    <div class="cart-item">
      <div class="cart-image-container">
        <img
          src=${generateImageName(food.id)}
          alt="plate fish sticks fries"
          class="cart-image"
        />
        <span class="quantity-show">${food.value}</span>
      </div>
      <div class="cart-content">
        <h3 class="cart-food-name">${food.foodName}</h3>
        <p class="cart-price">$${food.price}</p>
        <div class="cart-sub">
          <div class="cart-controller">
            <button class="btn-arrow" id="btnLeft">
              <img src="./images/chevron.svg" alt="chevron" aria-hidden="true" />
            </button>
            <div class="cart-quantity">
              <p>${food.value} </p>
            </div>
            <button class="btn-arrow" id="btnRight">
              <img src="./images/chevron-right.svg" alt="chevron" aria-hidden="true" />
            </button>
          </div>
          <h4 class="new-price">$${
            Math.round(food.quantityPrice * 100) / 100
          }</h4>
        </div>
      </div>
    </div>

    <!--
    <div>
      <div>
          Subtotal: ${Math.round(food.quantityPrice * 100) / 100}
      </div>
      <div>
          Tax: ${Math.round(food.quantityPrice * 100) / 100}
      </div>
      <div>
          Total: ${Math.round(food.quantityPrice * 100) / 100}
      </div>
    </div>
    -->
    `;
  });

  const decreaseCartItemAll = document.querySelectorAll("#btnLeft");
  const increaseCartItemAll = document.querySelectorAll("#btnRight");
  const newPrices = document.querySelectorAll(".new-price");

  increaseCartItemAll.forEach((increaseBtn, i) => {
    increaseBtn.dataset.id = i;
    increaseBtn.addEventListener("click", function () {
      state[this.dataset.id].value = state[this.dataset.id].value + 1;

      state[this.dataset.id].quantityPrice =
        state[this.dataset.id].price * state[this.dataset.id].value;

      addToCart(state);
    });
  });
  decreaseCartItemAll.forEach((decreaseBtn, i) => {
    decreaseBtn.dataset.id = i;
    decreaseBtn.addEventListener("click", function () {
      if (state[this.dataset.id].value > 1) {
        state[this.dataset.id].value = state[this.dataset.id].value - 1;

        state[this.dataset.id].quantityPrice =
          state[this.dataset.id].price * state[this.dataset.id].value;
      }
      addToCart(state);
    });
  });
}

function generateImageName(id) {
  switch (id) {
    case 1:
      return "./images/plate__french-fries.png";
    case 2:
      return "./images/plate__salmon-vegetables.png";
    case 3:
      return "./images/plate__spaghetti-meat-sauce.png";
    case 4:
      return "./images/plate__fish-sticks-fries.png";

    default:
      break;
  }
}
