import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart((prev) => !prev);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name} - {category}
      <button onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
