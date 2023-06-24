import { useState } from "react";
import "./App.css";
import { snacks } from "./backend/data";
function App() {
  const [items, setItems] = useState(snacks);
  const [price, setPrice] = useState(false);
  const [cal, setCal] = useState(false);
  const searchHandler = (text) => {
    const temp =
      text.length > 0
        ? snacks.filter((item) =>
            item.product_name.toLowerCase().includes(text.toLowerCase())
          )
        : snacks;

    setItems(temp);
  };
  const priceSort = (bool) => {
    if (bool) {
      const temp = snacks
        .map((items) => items)
        .sort((a, b) => a.price - b.price);
      setItems(temp);
    }
    if (!bool) {
      const temp = snacks
        .map((items) => items)
        .sort((a, b) => b.price - a.price);
      setItems(temp);
    }
  };
  const caloriesSort = (bool) => {
    if (bool) {
      const temp = snacks
        .map((items) => items)
        .sort((a, b) => a.calories - b.calories);
      setItems(temp);
    }
    if (!bool) {
      const temp = snacks
        .map((items) => items)
        .sort((a, b) => b.calories - a.calories);
      setItems(temp);
    }
  };
  return (
    <div className="App" style={{ margin: "2rem" }}>
      <h1>Snack Table</h1>
      <br />
      <br />
      <input
        placeholder="search product name"
        type="text"
        onChange={(e) => searchHandler(e.target.value)}
      />
      <br />
      <br />
      <div style={{ margin: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              width: "10px",
              cursor: "pointer",
            }}
          >
            <b>ID</b>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              width: "100px",
              cursor: "pointer",
            }}
          >
            <b>NAME</b>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              width: "100px",
              cursor: "pointer",
            }}
          >
            <b>WEIGHT</b>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              width: "100px",
              cursor: "pointer",
            }}
            onClick={() => {
              priceSort(price);
              setPrice(!price);
            }}
          >
            <b>PRICE</b>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              width: "100px",
              cursor: "pointer",
            }}
            onClick={() => {
              caloriesSort(cal);
              setCal(!cal);
            }}
          >
            <b>CALEROIES</b>
          </div>
          <div
            style={{
              border: "1px solid black",
              padding: "0.5rem",
              width: "500px",
              cursor: "pointer",
            }}
          >
            <b>INGREDIENTS</b>
          </div>
        </div>
        {items.map((item) => (
          <div
            style={{
              display: "flex",
              border: "1px solid black",
              wrap: "flex-wrap",
              width: "fit-content",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                width: "10px",
              }}
            >
              {item.id}
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                width: "100px",
              }}
            >
              {item.product_name}
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                width: "100px",
              }}
            >
              {item.product_weight}
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                width: "100px",
              }}
            >
              {item.price}
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                width: "100px",
              }}
            >
              {item.calories}
            </div>
            <div
              style={{
                border: "1px solid black",
                padding: "0.5rem",
                width: "500px",
              }}
            >
              {item.ingredients.map((items) => (
                <span>{items},</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
