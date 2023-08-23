import React, { useState } from "react";
import Logo from "../components/Logo";
import { styled } from "styled-components";
import TodoList from "../components/TodoList";
import Hero from "../components/Hero";
import { toast } from "react-toastify";
// const initialLists = [
//   {
//     id: 1,
//     task: "1st task",
//     completed: true,
//   },
//   {
//     id: 2,
//     task: "2nd task",
//     completed: false,
//   },
//   {
//     id: 3,
//     task: "3rd task",
//     completed: false,
//   },
//   {
//     id: 4,
//     task: "4th task",
//     completed: false,
//   },
// ];
let localdata = JSON.parse(localStorage.getItem("item"));
let tempItem = [];
const Home = () => {
  const [items, setItems] = useState(localdata ? localdata : []);
  const [filterValue, setFilterValue] = useState("all");
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
    tempItem = [...localdata, item];
    localStorage.setItem("item", JSON.stringify(tempItem));
    toast.success("new task added");
  };
  const handleDeleteItem = (id) => {
    const newItem = items.filter((list) => list.id !== id);
    setItems(newItem);
    localStorage.clear();
    localStorage.setItem("item", JSON.stringify(newItem));
    toast.success("task deleted");
  };
  const handleCheckBox = (id) => {
    const newItem = items.map((list) =>
      list.id === id ? { ...list, completed: !list.completed } : list
    );
    setItems(newItem);
    localStorage.clear();
    localStorage.setItem("item", JSON.stringify(newItem));
    toast.success("task updated");
  };

  const handleUpdateItem = (id, item) => {
    const newItem = items.map((list) =>
      list.id === id
        ? { ...list, task: item.task, completed: item.completed }
        : list
    );
    setItems(newItem);

    localStorage.clear();
    localStorage.setItem("item", JSON.stringify(newItem));
    toast.success("task updated");
  };

  return (
    <Wrapper className="container-flued">
      <Logo />
      <Hero onAddItem={handleAddItem} onFilterValue={setFilterValue} />
      <TodoList
        data={items}
        filterValue={filterValue}
        onDeleteItem={handleDeleteItem}
        onCheckBox={handleCheckBox}
        onUpdateItem={handleUpdateItem}
      />
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Home;
