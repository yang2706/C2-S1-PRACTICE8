import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  { product: "Banana",
    price: 54.6,
    quantity: 3 
    },
  { product: "Computer",
    price: 100.5,
    quantity: 4 
  },
  { product: "Table",
    price: 1070,
    quantity: 3 
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const handleChangeQuantity = (productName, newQuantity) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.product === productName
          ? { ...order, quantity: Math.max(newQuantity, 0) }
          : order
      )
    );
  };

  const total = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order) => (
          <OrderCard
            key={order.product}
            order={order}
            onChangeQuantity={handleChangeQuantity}
          />
        ))}
      </div>

      <CheckoutButton total={total.toFixed(2)} />
    </>
  );
}