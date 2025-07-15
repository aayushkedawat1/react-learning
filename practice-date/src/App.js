import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const [addFactor, setAddFactor] = useState(1);
  return (
    <div>
      <p>{date.toLocaleDateString()}</p>
      <button
        onClick={() =>
          setDate(new Date(date.setDate(date.getDate() - addFactor)))
        }
      >
        -
      </button>
      <input
        type="number"
        onChange={(e) => {
          console.log(Number(e.target.value));
          setDate(
            new Date(date.setDate(date.getDate() + Number(e.target.value)))
          );
        }}
      ></input>
      <button
        onClick={() => {
          console.log(date.getDate() + addFactor);
          setDate(new Date(date.setDate(date.getDate() + addFactor)));
        }}
      >
        +
      </button>
      <p>Add Factor: {addFactor}</p>
      <input
        type="range"
        max={10}
        min={0}
        value={addFactor}
        onChange={(e) => setAddFactor(Number(e.currentTarget.value))}
      />
      {/* <button onClick={() => setAddFactor(addFactor - 1)}>-</button>
      <button onClick={() => setAddFactor(addFactor + 1)}>+</button> */}
    </div>
  );
}

export default App;
