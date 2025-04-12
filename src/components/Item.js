import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart]=useState(false);

  const handleCartClick = () => {
    setIsInCart((prevState) => !prevState);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
