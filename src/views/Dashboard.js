import { useEffect, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { useStoreContext } from "../components/Store";
import Layout from "../layout/Layout";
import Menu from "../layout/Menu";
import Topbar from "../components/Topbar";
import Animate, { useAnimate } from "../components/Animate";
import Loading from "../components/Loading";

// const Work = lazy(() => import("../views/Work"));
// const BuildProcess = lazy(() => import("../views/BuildProcess"));
const Contact = lazy(() => import("../views/Contact"));
// const CV = lazy(() => import("../views/CV"));

function Dashboard(){
	var {menuOpen} = useStoreContext();
  var [controller, {begin, end}] = useAnimate(300);

  useEffect(() => {
    menuOpen && begin();
    !menuOpen && end();
  }, [menuOpen, begin, end]);

	return (
		<Layout modifiers={["mediaunit"]}>
			<Layout.Cell modifiers={["fixed", "light"]}>
				<Topbar />
			</Layout.Cell>
			<Menu />
			<Layout.Cell modifiers={["minheight", "colspan"]}>
				<Animate className="Animate__menu" controller={controller}>
					<Layout.Cell modifiers={["ghost"]}></Layout.Cell>
					<Layout.Cell modifiers={["minheight", "fullwidth", "lighter"]}>
						<Suspense fallback={
							<div className="App__loading">
								<Loading size={64} />
							</div>
						}>
							<Router>
								{/* <BuildProcess path="/build-process" />
								<Work path="/websites" type="web" />
								<Work path="/tutorials" type="tutorial" />
								<Work path="/games" type="game" /> */}
								<Contact path="/contact" />
								{/* <CV path="/cv" /> */}
							</Router>
						</Suspense>
					</Layout.Cell>
				</Animate>
			</Layout.Cell>
		</Layout>
	);
}

export default Dashboard;