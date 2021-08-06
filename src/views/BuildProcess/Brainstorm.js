import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";

function Brainstorm() {
	var { Translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-01" extended="build-process-brainstorm" />
			</p>
			<ul className="BuildProcess__list">
				<li>
					Frontend
					<ul>
						<li>
							Landingpage
							<ul>
								<li>Background image</li>
								<li>Title</li>
								<li>Description</li>
								<li>CTA danish (to my work)</li>
								<li>CTA english (to my work)</li>
							</ul>
						</li>
						<li>
							Work
							<ul>
								<li>Web</li>
								<li>Tutorials</li>
								<li>Games</li>
							</ul>
						</li>
						<li>
							Building this portfolio
							<ul>
								<li>
									Tech stack (FERN)
									<ul>
										<li>Firebase</li>
										<li>Express</li>
										<li>
											React
											<ul>
												<li>Compound components</li>
												<li>BEM</li>
											</ul>
										</li>
										<li>NodeJS</li>
									</ul>
								</li>
								<li>
									Approach
									<ul>
										<li>Git/GitHub</li>
										<li>Compound components</li>
										<li>State management</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							Contact
							<ul>
								<li>Validation</li>
								<li>Errorhandling</li>
								<li>Serverside e-mail handling</li>
							</ul>
						</li>
						<li>
							CV
							<ul>
								<li>Address</li>
								<li>Profile image</li>
								<li>Resume</li>
								<li>Best work</li>
								<li>Professional skills</li>
								<li>Experience</li>
								<li>Personal skills</li>
								<li>Other information</li>
							</ul>
						</li>
						<li>
							Settings
							<ul>
								<li>
									Language
									<ul>
										<li>Translate via API</li>
										<li>Translate custom text</li>
									</ul>
								</li>
								<li>Darkmode</li>
								<li>Theme</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					Backend
					<ul>
						<li>Firebase</li>
						<li>JSON</li>
						<li>Homemade API</li>
						<li>E-mail sending functionality</li>
						<li>Content API</li>
					</ul>
				</li>
			</ul>
		</Layout.Cell>
	);
}

export default Brainstorm;
