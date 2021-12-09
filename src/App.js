import { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Landing from "./views/Landing";
import Store from "./components/Store";
import Dashboard from "./views/Dashboard";
import useMediaQuery from "./hooks/useMediaQueries";
import useLanguage from "./hooks/useLanguage";
import Toast from "./components/Toast";
import "./App.scss";
import useLocalStorage from "./hooks/useLocalStorage";
import Missing from "./views/Missing";
import Christmas from "./components/Christmas";

const displayChristmas = true;

function App() {
	var breakpointSmall = useMediaQuery("(min-width: 600px)");
	var breakpointMedium = useMediaQuery("(min-width: 990px)");

	var [menuOpen, setMenuOpen] = useState(false);
	var [toast, setToast] = useState({});
	var [darkmode, setDarkmode] = useLocalStorage("darkmode", true);
	var [theme, setTheme] = useLocalStorage("theme", {
		hue: "290",
		saturation: "86%"
	});
	var [projects, setProjects] = useState([]);
	const [snow, setSnow] = useState(true);
	var {
		language,
		setLanguage,
		languages,
		translate,
		translateFeed,
		Translate,
		parseAttributes,
		parseString
	} = useLanguage();

	useEffect(() => {
		document.body.className = darkmode ? "dark" : "";
	}, [darkmode]);

	useEffect(() => {
		document.body.style.setProperty("--hue", theme.hue);
		document.body.style.setProperty("--saturation", theme.saturation);
	}, [theme]);

	return (
		<div className="App">
			<Store
				value={{
					projects, setProjects,
					darkmode, setDarkmode,
					theme, setTheme,
					menuOpen, setMenuOpen,
					toast, setToast,
					breakpointSmall, breakpointMedium,
					language, setLanguage,
					languages, translate, translateFeed, Translate,
					parseAttributes, parseString,
					displayChristmas, snow, setSnow
				}}
			>
				<Toast toast={toast} />
				{displayChristmas && snow && <Christmas />}
				<Router>
					<Landing path="/" />
					<Dashboard path="/dashboard/*" />
					<Missing default />
				</Router>
			</Store>
		</div>
	);
}

export default App;
