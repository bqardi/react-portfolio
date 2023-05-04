import { NavLink } from "react-router-dom";
import helper from "../hooks/helper";
import { useStoreContext } from "./Store";
import "./Sidebar.scss";

function Sidebar({ children, open, ...other }) {
	var { menuOpen } = useStoreContext();

	return (
		<article
			className={`Sidebar${menuOpen ? " Sidebar--open" : ""}`}
			{...other}
		>
			{children}
		</article>
	);
}

function Menu({ children }) {
	return (
		<div className="Sidebar__scroll">
			<nav className="Sidebar__menu">{children}</nav>
		</div>
	);
}
Sidebar.Menu = Menu;

function Button({ children, ...other }) {
	return (
		<button className="Sidebar__button" {...other}>
			{children}
		</button>
	);
}
Sidebar.Button = Button;

function Anchor({ children, to, href, modifiers }) {
	var { menuOpen, setMenuOpen, breakpointMedium } = useStoreContext();

	if (href) {
		return (
			<a
				href={href}
				className="Sidebar__anchor"
				tabIndex={menuOpen ? null : "-1"}
			>
				{children}
			</a>
		);
	}

	function menuHandler() {
		!breakpointMedium && setMenuOpen(false);
	}

	return (
		<NavLink
			to={to}
			onClick={menuHandler}
			className={({ isActive }) =>
				`Sidebar__link${
					isActive ? " Sidebar__link--active" : ""
				}${helper.modifiers("Sidebar__link", modifiers)}`
			}
			tabIndex={menuOpen ? null : "-1"}
		>
			{children}
		</NavLink>
	);
}
Sidebar.Link = Anchor;

export default Sidebar;
