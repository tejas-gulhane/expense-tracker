import classes from './Counter.module.css';
import { useSelector ,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch =useDispatch()
  const counter = useSelector(state=>state.counter);

  const incr = () =>{
      dispatch( {type :"increment"})
  }

  const decr = () =>{
    dispatch( {type :"decrement"})
  }

  const incr5 = () =>{
    dispatch( {type :"incrementBy5"})
}

const decr5 = () =>{
  dispatch( {type :"decrementBy5"})
}


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incr}>Increment</button>
        <button onClick={decr}>Decrement</button> 
      </div>
      <div>  
        <button onClick={incr5}>Increment- BY -5</button>
        <button onClick={decr5}>Decrement- BY -5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;