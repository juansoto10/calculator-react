import './App.css';
import spicyLogo from './images/logo_spicy.svg'
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculate = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Please enter any value')
    }

  };

  return (
    <div className='App'>
      <div className='title'>
        <div className='title__logo-cont'>
          <img 
            className='title__logo'
            src={spicyLogo}
            alt='logo calculator' />
        </div>
        <h1>Spicy Calculator</h1>
      </div>
      <div className='calc'>
        <Screen input={input} />
        <div className='calc__row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='calc__row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='calc__row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='calc__row'>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculate}>=</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='calc__row'>
          <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
