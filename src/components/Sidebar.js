import {Link} from "@reach/router";
import helper from "../hooks/helper";
import { useStoreContext } from "./Store";
import "./Sidebar.scss";

function Sidebar({children, open, ...other}){
	var {menuOpen} = useStoreContext();
	
	return (
		<article className={`Sidebar${menuOpen ? " Sidebar--open" : ""}`} {...other}>
			{children}
		</article>
	);
}

function Menu({children}){
	return (
		<div className="Sidebar__scroll">
			<nav className="Sidebar__menu">
				{children}
			</nav>
		</div>
	);
}
Sidebar.Menu = Menu;

function Button({children, ...other}){
	return (
		<button className="Sidebar__button" {...other}>
			{children}
		</button>
	);
}
Sidebar.Button = Button;

function Anchor({children, to, href, modifiers}){
	var {setMenuOpen, breakpointMedium} = useStoreContext();
	
	if (href) {
		return (
			<a href={href} className="Sidebar__anchor">
				{children}
			</a>
		);
	}

	function menuHandler(){
		!breakpointMedium && setMenuOpen(false)
	}

	return (
		<Link to={to} onClick={menuHandler} getProps={({isCurrent}) =>
			({
				className:
					`Sidebar__link${isCurrent
						? " Sidebar__link--active"
						: ""}${helper.modifiers("Sidebar__link", modifiers)}`
			})}
		>
			{children}
		</Link>
	);
}
Sidebar.Link = Anchor;

export default Sidebar;