import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const itemsToDisplay =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <h2>Shopping List</h2>

      <label htmlFor="category">Filter by category:</label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={selectedCategory}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
