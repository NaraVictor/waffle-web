import { Card } from "./card";

export function SampleCard() {
	return (
		<Card title="Institutions to follow" footerText="Show more">
			<div className="card__list-item">
				<h4 className="card__list--title">Title</h4>
				<p className="card__list--text">Some random text here</p>
			</div>
			<div className="card__list-item">
				<div>
					<h4 className="card__list--title">Title</h4>
					<p className="card__list--text">Some random text here</p>
				</div>
			</div>
			<div className="card__list-item">
				<h4 className="card__list--title">Title</h4>
				<p className="card__list--text">Some random text here</p>
			</div>
		</Card>
	);
}
