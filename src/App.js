import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import './index.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [disabledClicksAdd, setDisabledClicksAdd] = useState(false);
  const [disabledClicksDecrease, setDisabledClicksDecrease] = useState(true);


  const add = () => {
    if(counter === 9){
      setCounter (counter + 1);
      setDisabledClicksAdd (true);
    }else if(counter < 10){
      setCounter (counter + 1);
      setDisabledClicksDecrease (false);
    }
  }

  const decrease = () => {
    if(counter === 1){
      setCounter (counter - 1);
      setDisabledClicksDecrease (true);
    }else if(counter > 1){
      setCounter (counter - 1);
      setDisabledClicksAdd (false);
    }
  }

  const resetCounter = () => {
    if(counter === 10){
      setCounter (0);
      setDisabledClicksAdd (false);
      setDisabledClicksDecrease (true);
    }else if(counter <= 10){
      setCounter (0);
      setDisabledClicksAdd (false);
      setDisabledClicksDecrease (true);
    }
  }

  return (
    <div className='box'>
      <Counter counter={counter}/>
      <div className='main-container'>
        <Button disabled={disabledClicksAdd} text='+' ButtonClick='button-add' handleCounter={add} />
        <Button disabled={disabledClicksDecrease} text='-' ButtonClick='button-decrease' handleCounter={decrease} />
        <Button text='RESET' ButtonClick='button-reset' handleCounter={resetCounter} />
      </div>
    </div>
  )
}

export default App;