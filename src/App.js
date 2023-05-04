import { lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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

const Work = lazy(() => import("./views/Work"));
const BuildProcess = lazy(() => import("./views/BuildProcess"));
const Contact = lazy(() => import("./views/Contact"));
const CV = lazy(() => import("./views/CV"));

const displayChristmas = false;

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
					projects,
					setProjects,
					darkmode,
					setDarkmode,
					theme,
					setTheme,
					menuOpen,
					setMenuOpen,
					toast,
					setToast,
					breakpointSmall,
					breakpointMedium,
					language,
					setLanguage,
					languages,
					translate,
					translateFeed,
					Translate,
					parseAttributes,
					parseString,
					displayChristmas,
					snow,
					setSnow
				}}
			>
				<Toast toast={toast} />
				{displayChristmas && snow && <Christmas />}
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="dashboard" element={<Dashboard />}>
						<Route path="build-process" element={<BuildProcess />} />
						<Route path="projects" element={<Work />} />
						<Route path="contact" element={<Contact />} />
						<Route path="cv" element={<CV />} />
					</Route>
					<Route path="*" element={<Missing />} />
				</Routes>
			</Store>
		</div>
	);
}

export default App;
