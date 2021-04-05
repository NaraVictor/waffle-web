export function Card({ title, children }) {
	return (
		<article className="card">
			<h3 className="card--title">{title}</h3>
			{children}
		</article>
	);
}
