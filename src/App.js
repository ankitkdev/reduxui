import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAdvice } from './store/advice/actions';

function App() {
  const user = useSelector
  return (
    <div className="App">
      <Advice/>
    </div>
  );
}

export default App;
