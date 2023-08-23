import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import dateFormat from "dateformat";
import { toast } from "react-toastify";

const Hero = ({ onAddItem, onFilterValue }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [filter, setFilter] = useState("all");
  // console.log(dateFormat(new Date()));
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    if (!title) {
      toast.error("please provide title");
      return;
    }

    const newItem = {
      id,
      task: title,
      completed,
      date: dateFormat(new Date()),
    };
    onAddItem(newItem);
    setTitle("");
    setCompleted(false);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    onFilterValue(filter);
    // eslint-disable-next-line
  }, [filter]);
  return (
    <Wrapper className="container  d-flex w-75 p-3 justify-content-between">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#add"
      >
        Add Task
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="add"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#dce8e7" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add TODO
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                    onChange={(e) => setCompleted(Boolean(e.target.value))}
                  >
                    <option value="false">Incomplete</option>
                    <option value="true">Completed</option>
                  </select>
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-outline-info m-1"
                >
                  Add Task
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-outline-secondary m-1"
                >
                  cancel
                </button>
              </form>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <select
        value={filter}
        onChange={handleFilter}
        className="p-2"
        style={{ borderRadius: "0.5rem" }}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  select {
    background-color: #dce8e7;
  }
`;

export default Hero;
