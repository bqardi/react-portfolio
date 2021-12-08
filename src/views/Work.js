import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Article from "../layout/Article";
import { useStoreContext } from "../components/Store";
import usePageTitle from "../hooks/usePageTitle";
import WorkFilter from "./WorkFilter";

function Work() {
	var { projects, setProjects, translate, Translate } = useStoreContext();
	const [sorted, setSorted] = useState([]);
	usePageTitle(translate("title-projects"));

	useEffect(() => {
		if (!projects?.length) {
			fetch("/portfolio.json")
				.then(response => response.json())
				.then(data => setProjects(data.projects));
			return;
		}
		const sortedProjects = projects
			.sort((prj1, prj2) => prj2.rating - prj1.rating);
		setSorted(sortedProjects);
	}, [projects]);

	return (
		<Article type={"projects"} resume>
			<Layout.Cell modifiers={["section", "maxwidth-large"]}>
				<Layout.Cell modifiers={["padding"]}>
					<section style={{minHeight: "110vh"}}>
						<Layout.Cell modifiers={["b-margin"]}>
							<h2><Translate id="work" /></h2>
						</Layout.Cell>
						<WorkFilter array={sorted} />
					</section>
				</Layout.Cell>
			</Layout.Cell>
		</Article>
	);
}

export default Work;
