import React from "react";
import Item from "./Item";
import { styled } from "styled-components";

const TodoList = ({
  data,
  onDeleteItem,
  onCheckBox,
  onUpdateItem,
  filterValue,
}) => {
  let sortedItem;
  if (filterValue === "all") {
    sortedItem = data;
  }
  if (filterValue === "incomplete") {
    sortedItem = data.filter((item) => item.completed === false);
  }
  if (filterValue === "completed") {
    sortedItem = data.filter((item) => item.completed === true);
  }
  if (sortedItem.length < 1) {
    return (
      <Wrapper className="container d-flex align-items-center  card w-75 p-3 ">
        <section
          className="w-25 text-center p-2 text-dark"
          style={{
            border: "1px solid",
            borderRadius: "0.5rem",
            backgroundColor: "#fff9",
          }}
        >
          No Todos
        </section>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="container d-flex align-items-center p-3 card w-75 ">
      {sortedItem.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onCheckBox={onCheckBox}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #dce8e7;
`;
export default TodoList;
