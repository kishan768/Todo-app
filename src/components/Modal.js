import React, { useState } from "react";
const Modal = ({ id, setIsOpen, onUpdateItem, item }) => {
  const [title, setTitle] = useState(item.task);
  const [completed, setCompleted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newItem = {
      id: item.id,
      task: title,
      completed: Boolean(completed),
    };
    onUpdateItem(id, newItem);
    // console.log(newItem);
    setTitle("");
    setCompleted(false);
    setIsOpen(false);
  };
  return (
    <div className="d-flex justify-content-right mb-3">
      <form
        className="w-50"
        style={{
          zIndex: "2",
          position: "absolute",
          backgroundColor: "#dce8e7",
          padding: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        {/* cancel button */}
        <button
          style={{
            float: "right",
            borderColor: "transparent",
            backgroundColor: "transparent",
          }}
        >
          ❌
        </button>
        {/* end cancel button */}
        <div className="mb-3">
          <h4 className="mb-4">Update TODO</h4>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Status
          </label>
          <br />
          <select
            className="w-100 text-bg-light p-2"
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value={false}>Incomplete</option>
            <option value={true}>Completed</option>
          </select>
        </div>

        <button
          type="submit"
          //   data-bs-dismiss="modal"
          className="btn btn-outline-info m-1"
        >
          Update Task
        </button>
        <button
          type="button"
          // data-bs-dismiss="modal"
          onClick={() => setIsOpen(false)}
          className="btn btn-outline-secondary m-1"
        >
          cancel
        </button>
      </form>
    </div>
  );
};

export default Modal;
