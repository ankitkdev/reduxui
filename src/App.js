import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAdvice } from './store/advice/actions';
import { useEffect } from 'react';

function App() {
  const user = useSelector(state => state.adv)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAdvice())
  },[])

  console.log(user)
  return (
    <div className="App">
      {user.data.slip && user.data.slip.advice}
    </div>
  );
}

export default App;
