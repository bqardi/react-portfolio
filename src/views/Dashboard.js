import { useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useStoreContext } from "../components/Store";
import Layout from "../layout/Layout";
import Menu from "../layout/Menu";
import Topbar from "../components/Topbar";
import Animate, { useAnimate } from "../components/Animate";
import Loading from "../components/Loading";

function Dashboard() {
	var { menuOpen } = useStoreContext();
	var [controller, { begin, end }] = useAnimate(300);

	useEffect(() => {
		menuOpen && begin();
		!menuOpen && end();
	}, [menuOpen, begin, end]);

	return (
		<Layout modifiers={["mediaunit"]}>
			<Layout.Cell modifiers={["fixed", "light", "noprint"]}>
				<Topbar />
			</Layout.Cell>
			<Menu />
			<Layout.Cell modifiers={["minheight", "overflow-hidden"]}>
				<Animate className="Animate__menu" controller={controller}>
					<Layout.Cell modifiers={["ghost"]}></Layout.Cell>
					<Layout.Cell modifiers={["minheight", "fullwidth", "lighter"]}>
						<Suspense
							fallback={
								<div className="App__loading">
									<Loading size={64} />
								</div>
							}
						>
							<Outlet />
						</Suspense>
					</Layout.Cell>
				</Animate>
			</Layout.Cell>
		</Layout>
	);
}

export default Dashboard;
