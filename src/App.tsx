import { useState } from 'react';

import './App.css';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItem';
interface IProps {
  id: string;
  value: string;
}

function App() {
  const [totalGoals, setTotalGoals] = useState([] as IProps[]);

  const GoalInputHandler = (enteredValue: any) => {
    setTotalGoals((prevGoals: any) => [...prevGoals, { id: Math.random().toString(), value: enteredValue }]);
    console.log(totalGoals, 'totalGoals');
  };
  const goalDeleteHandler = (key: any) => {
    setTotalGoals((prevGoals: any) => {
      return prevGoals.filter((goalItem: any) => goalItem.id !== key);
    });
  };
  return (
    <div className="App">
      <GoalInput submitHandler={GoalInputHandler} />
      {totalGoals.map((goal: any) => (
        <GoalItems goal={goal.value} id={goal.id} key={goal.id} deleteHandler={goalDeleteHandler} />
      ))}
    </div>
  );
}

export default App;
