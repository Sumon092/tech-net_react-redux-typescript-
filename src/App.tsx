import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="font-bold text-center text-2xl mb-6 mt-6">Tech net</h1>
      <div className="ml-4 flex items-center">
        <button
          className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-full"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded-full"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Amount
        </button>
        <p className="mx-2 text-xl">{count}</p>
        <button
          className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-2 px-4 rounded-full"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
