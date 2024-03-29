import Sidebar from "../components/Sidebar";
// import Accordion from "../components/Accordion";
import Icon from "../components/Icon";
import Profile from "../components/Profile";
import { useStoreContext } from "../components/Store";

function Menu() {
	var { Translate } = useStoreContext();

	return (
		<Sidebar>
			<Sidebar.Menu>
				<Profile />
				<Sidebar.Link to="/dashboard/build-process">
					<Icon.Tools />
					<Translate id="title-build-process" />
				</Sidebar.Link>
				<Sidebar.Link to="/dashboard/projects">
					<Icon.Web />
					<Translate id="title-projects" />
				</Sidebar.Link>
				{/* <Sidebar.Link to="/dashboard/tutorials">
					<Icon.HandHeart />
					<Translate id="title-tutorial" />
				</Sidebar.Link>
				<Sidebar.Link to="/dashboard/games">
					<Icon.GamepadVariant />
					<Translate id="title-game" />
				</Sidebar.Link> */}
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
