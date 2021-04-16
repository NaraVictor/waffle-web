export function Card({ title, children, footerText }) {
	return (
		<article className="card">
			<h3 className="card--title">{title}</h3>
			{children}
			{footerText && <span className="card__footer">{footerText}</span>}
		</article>
	);
}
