import React from "react";

export default function OrderCard({ order, onChangeQuantity }) {
  const { product, price, quantity } = order;

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          onClick={() => onChangeQuantity(product, quantity - 1)}
        >
          -
        </div>

        <h4>{quantity}</h4>

        <div
          className="order-button"
          onClick={() => onChangeQuantity(product, quantity + 1)}
        >
          +
        </div>
      </div>
    </div>
  );
}