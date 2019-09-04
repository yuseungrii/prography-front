import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = props => {
  const [state, setState] = useState({
    title: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    props.addTodo(state.title);
    setState({ title: "" });
  };

  const onChange = e => setState({ [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        style={addTodoStyle}
        value={state.title}
        onChange={onChange}
      />
      <input type="submit" value="" style={spaceshipStyle} />
    </form>
  );
};

const addTodoStyle = {
  display: "block",
  width: "80%",
  resize: "none",
  margin: "5.8rem auto 0 auto",
  padding: "0.1rem",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "0.1px #D1C7AC solid",
  outline: "none",
  fontFamily: "Noto Sans KR, sansSerif",
  fontSize: "1.1rem",
  lineHeight: "1.1rem",
  color: "#EFEFEF"
};

const spaceshipStyle = {
  display: "block",
  width: "3.3rem",
  height: "5rem",
  margin: "2.3rem auto 0 auto",
  padding: "0",
  backgroundImage: "url('/rocket.png')",
  backgroundPosition: "top center",
  backgroundSize: "100% auto",
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  outline: "none",
  alt: "rocketship",
  cursor: "pointer"
};

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
