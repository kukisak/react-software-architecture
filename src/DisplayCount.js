import { useRecoilValue } from "recoil";
import { counterState } from "./counterState";

export const DisplayCount = () => {
  const numberOfClicks = useRecoilValue(counterState); 
  
  return (
      <h2>Number of clicks: {numberOfClicks}</h2>
  )
}
