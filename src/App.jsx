import { useEffect, useState } from "react";
import "./App.css";
import { snacks } from "./backend/data";
function App() {
  const [items, setItems] = useState(snacks);
  const searchHandler = (text) => {
    const temp =
      text.length > 0
        ? snacks.filter((item) =>
            item.product_name.toLowerCase().includes(text.toLowerCase())
          )
        : snacks;

    setItems(temp);
  };
  const IdSort = () => {
    const temp = snacks.sort((a, b) => b.id - a.id);
    setItems(temp);
  };
  const nameSort = () => {
    const temp = snacks.sort((a, b) => a.product_name - b.product_name);
    setItems(temp);
    console.log(snacks.sort((a, b) => a.product_name - b.product_name));
  };

  const weightSort = () => {
    const temp = snacks
      .map((item) => item)
      .sort((a, b) => a.product_weight - b.product_weight);
    setItems(temp);
  };
  const priceSort = () => {
    const temp = snacks.map((items) => items).sort((a, b) => a.price - b.price);
    setItems(temp);
  };
  const caloriesSort = () => {
    const temp = snacks.map((items)=>items).sort((a, b) => a.calories - b.calories);
    setItems(temp);
    console.log(temp, "temp");
  };
  useEffect(() => {
    console.log(items);
  }, []);
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
            onChange={() => IdSort()}
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
            //onClick={() => nameSort()}
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
            //onClick={() => weightSort()}
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
            onClick={() => priceSort()}
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
            onClick={() => caloriesSort()}
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
