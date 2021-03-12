import React, { Component } from "react";
import "./Calculator.css";
import Button from '../components/Button';
import Display from "../components/Display";

const initialState = {
  
}

export default class Calculator extends Component {

  click(html){
    console.log(html);
  }

  clearMemory(){
    console.log('limpar')
  }

  setOperation(operation){
    console.log(operation)
  }

  addDigit(n){
    console.log(n)
  }

  render() {

    const addDigit = n => this.addDigit(n);
    const setOperation = n=> this.setOperation(n);
    const clearMemory = _=> this.clearMemory();

    return(
        <div className="calculator">
            <Display value="100"></Display>
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
    )
  }
}
