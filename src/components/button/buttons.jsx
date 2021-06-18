function DefaultButton({ big, heavy, classes, click, children, ...props }) {
	return (
		<button
			className={`button button__default ${big && "button--big"} 
            ${heavy && "button--heavy"} ${classes}`}
			{...props}>
			{children}
		</button>
	);
}

function PrimaryButton({ big, heavy, classes, click, children, ...props }) {
	return (
		<button
			className={`button button__primary ${big && "button--big"} 
            ${heavy && "button--heavy"} ${classes}`}
			{...props}>
			{children}
		</button>
	);
}

export { PrimaryButton, DefaultButton };
