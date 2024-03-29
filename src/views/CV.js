import { useEffect, useState } from "react";
import { useStoreContext } from "../components/Store";
import Layout from "../layout/Layout";
import Article from "../layout/Article";
import Address from "../components/Address";
import Card from "../components/Card";
import WorkCard from "../components/WorkCard";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import "./CV.scss";
import usePageTitle from "../hooks/usePageTitle";
import useScrollToTop from "../hooks/useScrollToTop";

function CV() {
	var { translate, Translate, projects, setProjects } = useStoreContext();
	usePageTitle(translate("title-cv"));
	var [data, setData] = useState({});
	const onTop = useScrollToTop();

	useEffect(() => {
		fetch("/portfolio.json")
			.then(response => response.json())
			.then(data => setData(data));
	}, [setData]);

	useEffect(() => {
		if (data && !projects?.length) {
			setProjects(data.projects);
		}
	}, [data, projects, setProjects]);

	if (!onTop) return null;

	return (
		<Article type="cv">
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<Layout.Cell>
					<Layout.Grid modifiers={["profile"]}>
						<Address />
						<img
							className="CV__profile"
							src="/images/profil.jpg"
							title={translate("about-image-alt")}
							alt={translate("about-image-alt")}
						/>
					</Layout.Grid>
				</Layout.Cell>
				<Card>
					<Card.Body className="CV__extInfo">
						<p>
							<Translate id="birth-date-title" />
							&nbsp;
							<span className="CV__faded">
								<Translate id="birth-date" />
							</span>
						</p>
						<p>
							<Translate id="drivers-license" />
						</p>
						<p>
							<Translate id="current-occupation-title" />
							&nbsp;
							<span className="CV__faded">
								<Translate id="current-occupation" />
							</span>
						</p>
					</Card.Body>
				</Card>
				<Layout.Cell>
					<Card>
						<Card.Body className="CV__padding CV__dark">
							<h2 className="CV__title">
								<Translate id="a-little-about-me" />
							</h2>
							{translate("resume").map(sentence => (
								<p className="CV__paragraph" key={sentence}>
									{sentence}
								</p>
							))}
						</Card.Body>
					</Card>
				</Layout.Cell>
			</Layout.Cell>
			<Layout.Cell modifiers={["section", "print-avoid-break-after"]}>
				<Layout.Cell modifiers={["padding", "maxwidth", "print-padding"]}>
					<h2 className="CV__title">
						<Translate id="work" />
					</h2>
					<Layout.Grid>
						<WorkCard project={projects?.find(project => project.id === "prj16")} />
						<WorkCard project={projects?.find(project => project.id === "prj25")} />
						<WorkCard project={projects?.find(project => project.id === "prj11")} />
					</Layout.Grid>
				</Layout.Cell>
			</Layout.Cell>
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<h2 className="CV__title">
					<Translate id="skills" />
				</h2>
				{data.skills?.languages.length ? <Skills translation="skills-languages" array={data.skills.languages} /> : null}
				{data.skills?.tech.length ? <Skills translation="skills-tech" array={data.skills.tech} /> : null}
				{data.skills?.paradigms.length ? <Skills translation="skills-paradigms" array={data.skills.paradigms} /> : null}
				{data.skills?.design.length ? <Skills translation="skills-other" array={data.skills.design} /> : null}
				{data.skills?.fiddle.length ? <Skills translation="skills-fiddle" array={data.skills.fiddle} /> : null}
			</Layout.Cell>
			<Layout.Cell modifiers={["section", "print-avoid-break-after"]}>
				<Layout.Cell modifiers={["padding", "maxwidth", "print-padding"]}>
					<h2 className="CV__title">
						<Translate id="personal-skills" />
					</h2>
					<Skills.Personal skills={["01", "02", "03", "04", "05"]} />
				</Layout.Cell>
			</Layout.Cell>
			<Layout.Cell modifiers={["padding", "maxwidth", "print-padding"]}>
				<h2 className="CV__title">
					<Translate id="experience" />
				</h2>
				<Layout.Grid>
					{data.experience && (
						<Experience
							className="CV__noprint"
							xp={data.experience.current}
							showLine
							isCurrent
						/>
					)}
					{data.experience?.historic.map((xp, index, arr) => (
						<Experience
							key={xp.id}
							xp={xp}
							showLine={index !== arr.length - 1}
						/>
					))}
				</Layout.Grid>
			</Layout.Cell>
		</Article>
	);
}

export default CV;
