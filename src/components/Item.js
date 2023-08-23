import React, { useState } from "react";
import { styled } from "styled-components";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import Modal from "./Modal";
const Item = ({ item, onDeleteItem, onCheckBox, onUpdateItem }) => {
  const { id, task, completed, date } = item;
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {/* modal */}
      {isOpen && (
        <Modal
          id={id}
          setIsOpen={setisOpen}
          item={item}
          onUpdateItem={onUpdateItem}
        />
      )}
      {/* end modal */}
      <Wrapper className="card  w-100 m-1 d-flex flex-row justify-content-between">
        <div>
          <div className="d-flex p-2 align-items-center">
            <input
              className="checkbox m-3"
              type="checkbox"
              checked={completed}
              onChange={() => onCheckBox(id)}
            />
            <div>
              <p className={completed ? "checked" : ""}>{task}</p>
              <p className="d-flex align-items-center mb-0">{date}</p>
            </div>
          </div>
        </div>
        <div className="d-flex  align-items-center ">
          <button
            className="m-1 button text-bg-secondary btn"
            onClick={() => onDeleteItem(id)}
          >
            <AiTwotoneDelete />
          </button>

          <button
            className="m-1 button text-bg-secondary btn"
            onClick={() => setisOpen((isOpen) => !isOpen)}
          >
            <AiTwotoneEdit />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .checkbox {
    cursor: pointer;
  }
  .button {
    /* font-size: 0.5rem; */
    border-color: transparent;
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .button:hover {
    padding: 0.2rem 0.8rem;
  }
`;

export default Item;
