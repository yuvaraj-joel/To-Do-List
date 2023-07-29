import React from "react";
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text} </li>
    </div>
  );
}
// style={{ textDecoration: isDone ? "line-through" : "none"
// toDone((prevone) => {
//   return !prevone;
// });
export default ToDoItem;
