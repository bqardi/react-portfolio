import helper from "../hooks/helper";
import { Link } from "@reach/router";
import "./Button.scss";
import Icon from "./Icon";
import { useStoreContext } from "./Store";

function Button({children, className, to, href, variation="default", modifiers, ...other}){
	if (variation === "cta") {
		return (
			<Link
				to={to}
				className={`Button Button--cta${helper.modifiers("Button", modifiers)}${helper.className(className)}`}
				{...other}
			>
				<span className="Button__centered">
					{children}
				</span>
				<Icon.ChevronRight />
			</Link>
		);
	}
	if (href) {
		return (
			<a
				href={href}
				className={`Button Button--${variation === "default" ? "link" : variation}${helper.modifiers("Button", modifiers)}${helper.className(className)}`}
				{...other}
			>
			{children}
			</a>
		);
	}
	if (to) {
		return (
			<Link
				to={to}
				className={`Button Button--${variation === "default" ? "link" : variation}${helper.modifiers("Button", modifiers)}${helper.className(className)}`}
				{...other}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			className={`Button Button--${variation}${helper.modifiers("Button", modifiers)}${helper.className(className)}`}
			{...other}
		>
			{children}
		</button>
	);
}

function HireMe({className, translation="button-hire-me", ...other}){
	var {Translate} = useStoreContext();

	return (
		<Link
			to="/dashboard/contact"
			className={`Button Button--cta${helper.className(className)}`}
		>
			<span className="Button__centered">
				<Translate id={translation} {...other} />
			</span>
			<Icon.ChevronRight />
		</Link>
	);
}
Button.HireMe = HireMe;

export default Button;