import { useEffect, useState } from "react";
import Toggler from "../components/Toggler";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Dropdown from "../components/Dropdown";
import { useStoreContext } from "../components/Store";
import "./Settings.scss";

function Settings() {
	var {
		menuOpen,
		setMenuOpen,
		Translate,
		translate,
		breakpointSmall,
		darkmode,
		setDarkmode
	} = useStoreContext();
	var [settingsOpen, setSettingsOpen] = useState(false);

	function settingsClickHandler() {
		!breakpointSmall && setMenuOpen(false);
		setSettingsOpen(prev => !prev);
	}

	useEffect(() => {
		if (breakpointSmall) {
			setSettingsOpen(false);
		} else {
			menuOpen && setSettingsOpen(false);
		}
	}, [menuOpen]);

	useEffect(() => {
		var themeMeta = document.getElementById("theme-color");
		darkmode
			? themeMeta?.setAttribute("content", "hsl(0, 0%, 17%)")
			: themeMeta?.setAttribute("content", "hsl(0, 0%, 83%)");
	}, [darkmode]);

	return (
		<Dropdown
			open={settingsOpen}
			onOpen={setSettingsOpen}
		>
			<Button
				variation="icon"
				onClick={settingsClickHandler}
				aria-label={translate("aria-settings")}
			>
				<Icon.DotsVertical />
			</Button>
			<Dropdown.List className="Settings__droplist">
				<Dropdown.List.Header>
					<h3>
						<Translate id="settings" />
					</h3>
					<Dropdown.List.Item index={0}>
						<Button tabIndex="-1" variation="icon" onClick={() => setSettingsOpen(false)}>
							<Icon.Close style={{ fill: "var(--primary-light)" }} />
						</Button>
					</Dropdown.List.Item>
				</Dropdown.List.Header>
				<Dropdown.List.Item index={1}>
					<Toggler
						id={"settings-darkmode"}
						isOn={darkmode}
						label={<Translate id="settings-darkmode" />}
						callback={() => setDarkmode(prev => !prev)}
						tabIndex="-1"
					/>
				</Dropdown.List.Item>
				<Dropdown.List.Header>
					<h3 style={{ margin: "0" }}>
						<Translate id="settings-theme" />
					</h3>
				</Dropdown.List.Header>
				<Dropdown.List.Group className="Settings__dropgroup">
					<Dropdown.List.Item index={2}>
						<Theme color="Orange" hue="28" saturation="90%" />
					</Dropdown.List.Item>
					<Dropdown.List.Item index={3}>
						<Theme color="Blue" hue="230" saturation="60%" />
					</Dropdown.List.Item>
					<Dropdown.List.Item index={4}>
						<Theme color="Purple" hue="290" saturation="86%" />
					</Dropdown.List.Item>
					<Dropdown.List.Item index={5}>
						<Theme color="Red" hue="0" saturation="90%" />
					</Dropdown.List.Item>
					<Dropdown.List.Item index={6}>
						<Theme color="Green" hue="110" saturation="70%" />
					</Dropdown.List.Item>
					<Dropdown.List.Item index={7}>
						<Theme color="Cyan" hue="180" saturation="86%" />
					</Dropdown.List.Item>
				</Dropdown.List.Group>
			</Dropdown.List>
		</Dropdown>
	);
}

function Theme({ color, hue, saturation }) {
	var { setTheme } = useStoreContext();

	return (
		<Button
			className="Settings__theme"
			variation="mix"
			onClick={() => setTheme({ hue, saturation })}
			tabIndex="-1"
		>
			<span
				style={{ backgroundColor: `hsl(${hue}, ${saturation}, 60%)` }}
				className="Settings__themeColor"
			></span>
			<span className="Settings__themeMode">{color}</span>
		</Button>
	);
}

export default Settings;
