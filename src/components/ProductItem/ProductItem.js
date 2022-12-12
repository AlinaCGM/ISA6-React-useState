import React from "react";
import "./ProductItem.css";

export default function ProductItem(props) {
  const item = props.item;
  return (
    <>
      {/* <div>{input}</div> */}
      <div className="item">
        <h3>Name:{item.title} </h3>
        <p> {item.price} sek</p>
        <img className="image" src={item.image} alt="" />
      </div>
    </>
  );
}
