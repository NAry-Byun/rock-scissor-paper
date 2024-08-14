import React from 'react';

const Box = (props) => {
  let result = "";

  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result; // Assigning the result based on the condition.
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item ? props.item.img : ""} alt={props.item ? props.item.name : "Item"} />
      <h2>{result}</h2>
    </div>
  );
}

export default Box;
