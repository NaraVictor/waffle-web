import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

// custom
import "../src/static/css/styles.css";
// import "../src/static/css/layout.css";

import { SampleCard } from "./components/card/sample";
import {
	MobileNavigation,
	PrimaryNavigation,
	Search,
	SecondaryNavigation,
	Post,
	Canvas,
} from "./components/index";
import { urls } from "./consts/index";

function App() {
	return (
		<div>
			<SecondaryNavigation />
			<div className="container">
				<div className="row mt-3">
					{/* <h3>Waffle Web Client</h3> */}
					{/* <Search /> */}
					{/* <SampleCard /> */}
					{/* <MobileNavigation items={urls} /> */}
					<div className="col-3">
						<PrimaryNavigation />
					</div>

					<div className="col-6">
						<Canvas>
							<Post />
						</Canvas>
					</div>
					<div className="col-3">
						<SampleCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
