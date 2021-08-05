import Sidebar from "../components/Sidebar";
import Accordion from "../components/Accordion";
import Icon from "../components/Icon";
import Profile from "../components/Profile";
import { useStoreContext } from "../components/Store";
import { useMatch } from "@reach/router";

function Menu(){
	var websites = useMatch("/dashboard/websites");
	var tutorials = useMatch("/dashboard/tutorials");
	var games = useMatch("/dashboard/games");
	var {Translate} = useStoreContext();
	
	return (
		<Sidebar>
			<Sidebar.Menu>
				<Profile />
				<Sidebar.Link to="/dashboard/build-process">
					<Icon.Tools />
					<Translate id="title-build-process" />
				</Sidebar.Link>
				<Accordion>
					<Accordion.Item open={websites || tutorials || games} title={
						<Sidebar.Button tabIndex="-1" style={{
							backgroundColor: "transparent",
							boxShadow: "none",
							pointerEvents: "none"
						}}>
							<Icon.BookOpenPageVariant />
							<Translate id="work" />
						</Sidebar.Button>
				}>
						<Sidebar.Link modifiers={["indent"]} to="/dashboard/websites">
							<Translate id="title-web" />
						</Sidebar.Link>
						<Sidebar.Link modifiers={["indent"]} to="/dashboard/tutorials">
							<Translate id="title-tutorial" />
						</Sidebar.Link>
						<Sidebar.Link modifiers={["indent"]} to="/dashboard/games">
							<Translate id="title-game" />
						</Sidebar.Link>
					</Accordion.Item>
				</Accordion>
				<Sidebar.Link to="/dashboard/contact">
					<Icon.TargetAccount />
					<Translate id="title-contact" />
				</Sidebar.Link>
				<Sidebar.Link to="/dashboard/cv">
					<Icon.CardAccountDetailsStar />
					<Translate id="title-cv" />
				</Sidebar.Link>
			</Sidebar.Menu>
		</Sidebar>
	);
}

export default Menu;