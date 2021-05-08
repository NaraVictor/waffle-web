import { Canvas, Waf, Post, PrimaryNavigation } from "../../components/index";
import { SampleCard } from "../../components/card/sample";

const HomePage = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-0">
					<PrimaryNavigation />
				</div>
				<div className="col-6">
					<Waf />
					<Canvas>
						<Post text="What is the square of 3 to the power 4 ?" />
						<Post text="The Lizard has 15 stomach compactments" />
						{/* <Post text="people, how do I perform division?" /> */}
						{/* <Post text="class schedules has been changed. Check page for updated timelines" /> */}
						{/* <Post text="one rule in life is to try to have patients and understand other people's point of view ✌✌👌" /> */}
					</Canvas>
				</div>
				<div className="col-3">
					<SampleCard />
				</div>
			</div>
		</div>
	);
};

export { HomePage };
