import { CounterButton } from './CounterButton';
import './App.css';
import { RecoilRoot } from "recoil";
import { DisplayCount } from "./DisplayCount";

const App = () => {
	return (
			<RecoilRoot>
				<DisplayCount/>
				<h1>State Management Example</h1>
				<CounterButton/>
			</RecoilRoot>
	);
}

export default App;
