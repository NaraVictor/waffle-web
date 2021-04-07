import "../src/static/css/styles.css";
import { SampleCard } from "./components/card/sample";
import { MobileNavigation, Search } from "./components/index";
import { urls } from "./consts/index";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h3>Waffle Web Client</h3>
				{/* <Search /> */}
				{/* <SampleCard /> */}
				{/* <MobileNavigation items={urls} /> */}
			</header>
		</div>
	);
}

export default App;
