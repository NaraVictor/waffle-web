function Canvas({ children }) {
	return <div className="canvas">{children}</div>;
}

function CanvasTitle({ children, classes }) {
	return <div className={`canvas-title ${classes}`}>{children}</div>;
}

export { CanvasTitle, Canvas };
