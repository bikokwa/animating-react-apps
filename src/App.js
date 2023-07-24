import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("before entering status is applied")}
          onEntering={() =>
            console.log("fired after entering state is applied")
          }
          onEntered={() =>
            console.log("fired after the entered state is applied")
          }
          onExit={() =>
            console.log("fired before the exiting state is applied")
          }
          onExiting={() =>
            console.log("fired after the exiting state is applied")
          }
          onExited={() =>
            console.log("fired after the exited state is applied")
          }
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 0.3s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <br />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
