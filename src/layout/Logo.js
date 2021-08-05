import { Link } from "@reach/router";
import Icon from "../components/Icon";
import "./Logo.scss";

function Logo(){
	return (
		<nav className="Logo">
			<Link className="Logo__link" to="/" aria-label="Logo">
				<Icon.Logo className="Logo__icon" />
				<span className="Logo__text">Portfolio</span>
			</Link>
		</nav>
	);
}

export default Logo;