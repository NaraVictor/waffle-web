import {
	Canvas,
	CanvasTitle,
	ClassList,
	PrimaryNavigation,
	SubNav,
} from "../../components/index";
import { SampleCard } from "../../components/card/sample";
import { NavLink } from "react-router-dom";

const Classes = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-0">
					<PrimaryNavigation />
				</div>
				<div className="col-6">
					<Canvas>
						<CanvasTitle>
							<h4>Classes</h4>
						</CanvasTitle>
						<div className="px-4 mb-3">
							<SubNav classes="my-4">
								<NavLink
									to="/classes"
									exact
									activeClassName="active-sub-nav"
									className="mr-3 sub-nav__item">
									All Classes
								</NavLink>
								{/* <NavLink
									to="#"
									activeClassName="active-sub-nav"
									className="sub-nav__item">
									Subscribed
								</NavLink> */}
							</SubNav>
							<ClassList
								title="English Language"
								students="34k"
								institution="GreatIdeas Labs"
							/>
							<hr />
							<ClassList
								title="English Language"
								students="34k"
								institution="GreatIdeas Labs"
							/>
							<hr />
							<ClassList
								title="English Language"
								students="34k"
								institution="GreatIdeas Labs"
							/>
						</div>
					</Canvas>
				</div>
				<div className="col-3">
					<SampleCard />
				</div>
			</div>
		</div>
	);
};

export { Classes };
