function PrimaryNavigation() {}

function SecondaryNavigation() {}

function MobileNavItem({ icon, activeIcon, label, url }) {
	return (
		<a href={url}>
			<div>
				<img src={icon} alt="navigation icon" />
			</div>
		</a>
	);
}

function MobileNavigation() {
	return (
		<div className="mobile-nav">
			<h1>Hello to the mobile navigation</h1>
		</div>
	);
}

export { PrimaryNavigation, SecondaryNavigation, MobileNavigation };
