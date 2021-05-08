import { NavLink } from "react-router-dom";
import logo from "../../static/img/logo.png";
import { Search } from "../index";
import homeIcon from "../../static/svg/icons/nav/home-outline-blue.svg";
import classesIcon from "../../static/svg/icons/nav/class-outline-blue.svg";

function PrimaryNavigation() {
	return (
		<nav className="primary-nav">
			<div className="nav__items">
				<NavLink
					to="/"
					exact
					className="nav__item"
					activeClassName="nav__item--active">
					<img src={homeIcon} alt="classes icon" />
					<span>Home</span>
				</NavLink>
				<NavLink
					to="/classes"
					className="nav__item"
					activeClassName="nav__item--active">
					<img src={classesIcon} alt="classes icon" />
					<span>Classes</span>
				</NavLink>
			</div>
		</nav>
	);
}

function SecondaryNavigation() {
	return (
		<nav className="seconday-nav">
			<button className="nav__button">
				<span className="button-line"></span>
				<span className="button-line"></span>
				<span className="button-line"></span>
			</button>
			<div className="nav__items">
				<NavLink to="/">
					<img src={logo} alt="waffle logo" className="nav__logo" />
					<span>waffle</span>
				</NavLink>
				<NavLink
					to="/about"
					activeClassName="nav__item--active"
					className="nav__item">
					About
				</NavLink>
				<NavLink
					to="/help"
					activeClassName="nav__item--active"
					className="nav__item">
					Help
				</NavLink>
			</div>
			<Search />
			<div className="nav__item-avatar">
				<small>username</small>
				<small>Avatar</small>
			</div>
		</nav>
	);
}

function MobileNavItem({ icon, activeIcon, label, url }) {
	return (
		<NavLink
			to={url}
			className="mobile-nav__item"
			activeClassName="mobile-nav__item--active">
			<img src={icon} className="mobile-nav__img" alt="navigation icon" />
			<p className="mobile-nav__label">{label}</p>
		</NavLink>
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

function SubNav(props) {
	return <nav className={`sub-nav ${props.classes}`}>{props.children}</nav>;
}

export { PrimaryNavigation, SecondaryNavigation, MobileNavigation, SubNav };
