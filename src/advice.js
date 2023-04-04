import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {good, bad} from './createAdvice';


function Advice() {
 const sys = useSelector((state)=> state.advice.value)
 const dispatched = useDispatch();

  return (
    <div className="Advice">
      <h1>{sys}</h1>
      <button onClick={()=>dispatched(good())}>Good Habit</button>
      <button onClick={()=>dispatched(bad())}>Bad Habit</button>
    </div>
  );
}

export default Advice;
