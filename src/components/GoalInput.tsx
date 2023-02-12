import { useState } from 'react';

function GoalInput(props: any) {
  const [enteredValue, setEnteredValue] = useState('');

  const submitHandler = () => {
    props.submitHandler(enteredValue);
    console.log(enteredValue, 'enteredValue');
    setEnteredValue('');
  };

  const inputHandler = (event: any) => {
    event.preventDefault();
    setEnteredValue(event.target.value);
  };

  return (
    <div className="goal-input-container">
      <div className="goal-input">
        <input type="text" placeholder="Type Your Goal Here" onChange={inputHandler} value={enteredValue} />
      </div>
      <button className="btn" type="submit" onClick={submitHandler}>
        Add Goal
      </button>
    </div>
  );
}

export default GoalInput;
