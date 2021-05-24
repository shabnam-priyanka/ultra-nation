import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let totalPopulation = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    totalPopulation = totalPopulation + element.population;
  }
  return (
    <div>
      <h4>Total Population:{totalPopulation} </h4>
    </div>
  );
};

export default Cart;
