import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfClicksSelector } from "./selectors";
import { counterButtonClicked } from "./actions";

export const CounterButton = () => {
  const numberOfClicks = useSelector(getNumberOfClicksSelector)
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState(1);
  return (
      <>
        <p>You have clicked the buttong {numberOfClicks} times.</p>
        <label>
          Increment By:
          <input
            value={incrementBy}
            onChange={e => setIncrementBy(Number(e.target.value))}
            type="number"
          />
        </label>
        <button
          onClick={() => dispatch(counterButtonClicked(incrementBy))}
        >Click</button>
      </>
  )
}
