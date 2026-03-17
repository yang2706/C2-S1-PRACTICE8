import React from "react";
import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  { id: 1, name: "Banana",
    price: 54.5 
  },
  { id: 2, name: "Computer", 
    price: 100.5 
  },
  { id: 3, name: "Table", 
    price: 60 
  },
];

export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);

  function addStuff(newStuff) {
    setStuffs((prev) => [...prev, { ...newStuff, id: Date.now() }]);
  }

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm onAddStuff={addStuff} />

      <div className="stuff-list">
        {stuffs.map((stuff) => (
          <StuffCard key={stuff.id} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}