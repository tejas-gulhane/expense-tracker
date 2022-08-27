import classes from './Counter.module.css';
import { useSelector ,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch =useDispatch()
  const counter = useSelector(state=>state.counter);

  const incr = () =>{
      dispatch( {type :"incrementBy2"})
  }

  const decr = () =>{
    dispatch( {type :"decrementBy2"})
}


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incr}>Increment- BY -2</button>
        <button onClick={decr}>Decrement- BY -2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;