import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };

  click(html) {
    console.log(html);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay:false})

  


  }

  render() {
    const addDigit = (n) => this.addDigit(n);
    const setOperation = (n) => this.setOperation(n);
    const clearMemory = (_) => this.clearMemory();

    return (
      <div className="calculator">
        <Display value={this.state.displayValue}></Display>
        <Button triple label="AC" click={clearMemory}></Button>
        <Button label="/" operation click={setOperation}></Button>
        <Button label="7" click={addDigit}></Button>
        <Button label="8" click={addDigit}></Button>
        <Button label="9" click={addDigit}></Button>
        <Button label="*" operation click={addDigit}></Button>
        <Button label="4" click={addDigit}></Button>
        <Button label="5" click={addDigit}></Button>
        <Button label="6" click={addDigit}></Button>
        <Button label="-" operation click={setOperation}></Button>
        <Button label="1" click={addDigit}></Button>
        <Button label="2" click={addDigit}></Button>
        <Button label="3" click={addDigit}></Button>
        <Button label="+" operation click={setOperation}></Button>
        <Button double="double" label="0" click={addDigit}></Button>
        <Button label="." click={addDigit}></Button>
        <Button label="=" operation click={setOperation}></Button>
      </div>
    );
  }
}
