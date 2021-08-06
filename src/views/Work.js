import { useEffect } from "react";
import Layout from "../layout/Layout";
import Article from "../layout/Article";
import WorkCard from "../components/WorkCard";
import { useStoreContext } from "../components/Store";

function Work({ type }) {
	var { projects, setProjects } = useStoreContext();

	useEffect(() => {
		if (!projects?.length) {
			fetch("/portfolio.json")
				.then(response => response.json())
				.then(data => setProjects(data.projects));
		}
	}, [projects, setProjects]);

	return (
		<Article type={type} resume>
			<Layout.Cell modifiers={["section", "maxwidth-large"]}>
				<Layout.Cell modifiers={["padding"]}>
					<section>
						<Layout.Grid>
							{projects
								?.filter(project => project.types.find(tp => tp === type))
								.sort((prj1, prj2) => prj1.rating - prj2.rating)
								.reverse()
								.map(project => (
									<WorkCard key={project.id} project={project} />
								))}
						</Layout.Grid>
					</section>
				</Layout.Cell>
			</Layout.Cell>
		</Article>
	);
}

export default Work;
