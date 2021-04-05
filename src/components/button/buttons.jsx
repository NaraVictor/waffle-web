function DefaultButton({ big, heavy, classes, click, children }) {
	return (
		<button
			className={`button button__default ${big && "button--big"} 
            ${heavy && "button--heavy"} ${classes}`}
			onClick={() => click()}>
			{children}
		</button>
	);
}

function PrimaryButton({ big, heavy, classes, click, children }) {
	return (
		<button
			className={`button button__primary ${big && "button--big"} 
            ${heavy && "button--heavy"} ${classes}`}
			onClick={() => click()}>
			{children}
		</button>
	);
}

export { PrimaryButton, DefaultButton };
