import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={addTodoStyle}
          value={this.state.title}
          onChange={this.onChange}
        />
        {/* <div type="submit" style={spaceshipStyle}></div> */}
        <input type="submit" value="" style={spaceshipStyle} />
      </form>
    );
  }
} //export class ends

const addTodoStyle = {
  display: "block",
  width: "80%",
  resize: "none",
  margin: "4.5rem auto 0 auto",
  padding: "0.1rem",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "0.1px #D1C7AC solid",
  //   인풋 기본 속성 제거... 왜 적용이 안 되지... 더 찾아봐야함
  boxShadow: "none",
  WebkitBoxShadow: "none",
  MozBoxShadow: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  fontFamily: "Noto Sans KR, sansSerif",
  fontSize: "1.1rem",
  lineheight: "1.1rem",
  color: "#EFEFEF"
};

const spaceshipStyle = {
  display: "block",
  width: "3.3rem",
  height: "5rem",
  margin: "2.3rem auto 0 auto",
  padding: "0",
  backgroundImage: "url('/rocket2.png')",
  backgroundPosition: "top center",
  backgroundSize: "100% auto",
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  alt: "rocketship",
  cursor: "pointer"
};

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
