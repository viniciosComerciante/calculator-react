import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
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
    if(this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    }else{
      const isEquals = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      }catch(e){
        values[0] = this.state.values[0];
      }
      
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: isEquals? null : operation,
        current: isEquals? 0 : 1,
        clearDisplay: !isEquals,
        values
      })
    }
  }

  addDigit(n) {
    if(n === '.' && this.state.displayValue.includes('.')){
      return;
    }
    const clearDisplay =  this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;

    this.setState({displayValue: displayValue, clearDisplay: false})

    if( n !== '.'){
      const i = this.state.current;
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({values})
      console.log(values);
    }

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
        <Button label="*" operation click={setOperation}></Button>
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
