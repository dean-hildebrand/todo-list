import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// npm install boostrap then import the min file
import "bootstrap/dist/css/bootstrap.min.css";
// npm install uuid and import
// creates a unique id
import {v1 as uuid} from "uuid";

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };
    console.log("This is the added item", newItem);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
    console.log("Item array", this.state.items);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
