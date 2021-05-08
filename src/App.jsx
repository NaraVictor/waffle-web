import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

// custom
import "../src/static/css/styles.css";
// import "../src/static/css/layout.css";

import SiteRoutes from "./routes/site-routes";

function App() {
	return (
		<BrowserRouter>
			<SiteRoutes />
		</BrowserRouter>
	);
}

export default App;
