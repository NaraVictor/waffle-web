import { Canvas, PrimaryNavigation } from "../../components/index";
import { CoverArt } from "./components/cover";

const Institution = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-0">
					<PrimaryNavigation />
				</div>
				<div className="col-9">
					<CoverArt />
					<Canvas>
						<h2>Profile Page</h2>
					</Canvas>
				</div>
			</div>
		</div>
	);
};

export { Institution };
