import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import { evaluate } from 'mathjs'; // Import evaluate from math.js
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(evaluate(input).toString()); // Use evaluate from math.js
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="button-grid">
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="+" className="operation" onClick={handleClick} />

        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" className="operation" onClick={handleClick} />

        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="*" className="operation" onClick={handleClick} />

        <Button value="C" className="clear" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
        <Button value="/" className="operation" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
