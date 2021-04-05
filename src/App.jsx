import "../src/static/css/styles.css";
import { SampleCard } from "./components/card/sample";
import { MobileNavigation } from "./components/index";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h3>Waffle Web Client</h3>
				{/* <SampleCard /> */}
				<MobileNavigation />
			</header>
		</div>
	);
}

export default App;
