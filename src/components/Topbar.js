import { useEffect } from "react";
import { useStoreContext } from "./Store";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "../layout/Logo";
import Layout from "../layout/Layout";
import Settings from "../layout/Settings";
import Language from "./Language";
import "./Topbar.scss";

function Topbar() {
	var {
		translate,
		menuOpen,
		setMenuOpen,
		breakpointMedium
	} = useStoreContext();

	function menuClickHandler() {
		setMenuOpen(prev => !prev);
	}

	useEffect(() => {
		setMenuOpen(breakpointMedium);
	}, [setMenuOpen, breakpointMedium]);

	return (
		<div className="Topbar">
			<Button
				variation="icon"
				onClick={menuClickHandler}
				aria-label={translate("aria-menu")}
			>
				{menuOpen ? <Icon.MenuOpen /> : <Icon.Menu />}
			</Button>
			<Logo />
			<Layout.Flex>
				<Language />
				<Settings />
			</Layout.Flex>
		</div>
	);
}

export default Topbar;
