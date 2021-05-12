import {
	Canvas,
	PrimaryNavigation,
	CanvasTitle,
	PrimaryButton,
	ClassList,
} from "../../components";
import { SampleCard } from "../../components/card/sample";

const ClassDetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-0">
					<PrimaryNavigation />
				</div>
				<div className="col-6">
					<Canvas>
						<CanvasTitle classes="class-detail__head">
							<div>
								<p>School</p>
								<h4 className="d-inline">English Language</h4>
								<span className="live-session">live</span>
							</div>
							<div>
								<PrimaryButton>Join Session</PrimaryButton>
							</div>
						</CanvasTitle>
						<div className="px-4 py-3 class-detail__body">
							<div className="class-detail__detail row">
								<div className="detail__description col-md-7 col-12">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
									fugit optio tempore nesciunt quo totam aperiam vel harum
									aliquid aut! Eius temporibus mollitia inventore animi
									reprehenderit laboriosam? Repellat, vel perspiciatis.
								</div>
								<div className="detail__summary col-md-5 col-12">
									<p>34k learners</p>
									<h6>Schedule</h6>
									<ul>
										<li>Monday - 9am</li>
										<li>Wednesday - 3pm</li>
										<li>Friday - 5pm</li>
									</ul>
								</div>
							</div>
							<div className="class-detail__previous mt-5">
								<h5 className="active-sub-nav d-inline">Previous Sessions</h5>
								<ClassList />
							</div>
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

export { ClassDetail };
