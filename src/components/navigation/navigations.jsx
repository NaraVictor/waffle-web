function PrimaryNavigation() {}

function SecondaryNavigation() {}

function MobileNavItem({ icon, activeIcon, label, url }) {
	return (
		<a href={url} className="mobile-nav__item">
			<img src={icon} className="mobile-nav__img" alt="navigation icon" />
			<p className="mobile-nav__label">{label}</p>
		</a>
	);
}

function MobileNavigation({ items }) {
	// refactor and abstract code after it works
	const labels = ["Home", "Discover", "Profile", "Classes"];

	return (
		<div className="mobile-nav">
			<div className="mobile-nav__items">
				{items.map((item) => {
					if (labels.includes(item.label)) {
						return (
							<MobileNavItem
								key={item.label}
								label={item.label}
								url={item.url}
								icon={item.icons.white.inactive}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}

export { PrimaryNavigation, SecondaryNavigation, MobileNavigation };
