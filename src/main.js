import data from "./data.json";
import CardCopm from "./card";
import "./main.css";
import { useState } from "react";

function Main() {
  const [items, setItems] = useState(data);

  function handleSubmit(event) {
    event.preventDefault();
    let searchedValue = event.target.search.value.toLowerCase();

    // Filter items based on the searched value
    let filteredItems = data.filter(function (item) {
      return item.title.toLowerCase().includes(searchedValue);
    });

    setItems(filteredItems);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <div id="container">
        {items.map(function (item) {
          return (
            <CardCopm
              key={item.title}
              image={item.image_url}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
