import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useStoreContext } from "../components/Store";
import Article from "../layout/Article";
import Layout from "../layout/Layout";
import "./Missing.scss";

function Missing(){
	var [removeAnimation, setRemoveAnimation] = useState(false);

	useEffect(() => {
		var timeout = setTimeout(() => {
			setRemoveAnimation(true);
		}, 2500);
		return () => {
			clearTimeout(timeout)
			setRemoveAnimation(false);
		};
	}, []);

	return (
		<Article type="missing">
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<div className="Missing">
					{removeAnimation
						? <MissingNavigation />
						: <MissingAnimation />}
				</div>
			</Layout.Cell>
		</Article>
	);
}

function MissingAnimation(){
	var { translate } = useStoreContext();
	return (
		<div className="Missing__animateX">
			<div className="Missing__animateY">
				<img className="Missing__animateRotate" src="https://picsum.photos/924/500" alt={translate("description-missing")} />
			</div>
		</div>
	);
}

function MissingNavigation(){
	var { Translate } = useStoreContext();

	return (
		<div className="Missing__navigate">
			<h2><Translate id="missing-title" /></h2>
			<ul>
				<li><Button to="/"><Translate id="missing-to-frontpage" /></Button></li>
				<li><Button to="/dashboard/websites"><Translate id="missing-to-projects" /></Button></li>
				<li><Button to="/dashboard/cv"><Translate id="missing-to-cv" /></Button></li>
			</ul>
		</div>
	);
}
Missing.MissingNavigation = MissingNavigation;

export default Missing;