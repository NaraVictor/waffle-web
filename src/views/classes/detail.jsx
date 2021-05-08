import {
	Canvas,
	PrimaryNavigation,
	CanvasTitle,
	PrimaryButton,
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
								<h4>English Language</h4>
							</div>
							<div>
								<PrimaryButton>Join Session</PrimaryButton>
							</div>
						</CanvasTitle>
						<div className="px-4 py-3 class-detail__body">
							<div className="class-detail__detail row">
								<div className="detail__description col-md-8 col-12">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
									fugit optio tempore nesciunt quo totam aperiam vel harum
									aliquid aut! Eius temporibus mollitia inventore animi
									reprehenderit laboriosam? Repellat, vel perspiciatis.
								</div>
								<div className="detail__summary col-md-4 col-12">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Eligendi sint nemo, quis incidunt repellat autem non
								</div>
							</div>
							<div className="class-detail__previous mt-5">
								<h5>Previous Sessions</h5>
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
