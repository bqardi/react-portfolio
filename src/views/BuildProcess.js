import { useStoreContext } from "../components/Store";
import Article from "../layout/Article";
import Layout from "../layout/Layout";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Brainstorm from "./BuildProcess/Brainstorm";
import LandingPage from "./BuildProcess/LandingPage";
import WorkPage from "./BuildProcess/WorkPage";
import ContactPage from "./BuildProcess/ContactPage";
import CVPage from "./BuildProcess/CVPage";
import TranslationFeature from "./BuildProcess/TranslationFeature";
import StateManagement from "./BuildProcess/StateManagement";
import DarkmodeColorTheme from "./BuildProcess/DarkmodeColorTheme";
import Backend from "./BuildProcess/Backend";
import "./BuildProcess.scss";
import usePageTitle from "../hooks/usePageTitle";

function BuildProcess() {
	var { Translate, translate } = useStoreContext();
	usePageTitle(translate("title-build-process"));

	return (
		<Article type="build-process">
			<section className="BuildProcess">
				<Layout.Cell modifiers={["print-avoid-break-after"]}>
					<Layout.Cell modifiers={["padding", "maxwidth", "print-padding"]}>
						<h2 className="BuildProcess__title">
							<Translate id="title-01" extended="build-process" />
						</h2>
						<p className="BuildProcess__text">
							<Translate id="title-01-p-01" extended="build-process" />
						</p>
						<p className="BuildProcess__text">
							<Translate id="title-01-p-02" extended="build-process" />
						</p>
						<ul className="BuildProcess__list">
							<li>
								<span className="BuildProcess__listHighlight">
									<Translate
										id="title-01-li-01-span"
										extended="build-process"
									/>
								</span>
								<Translate id="title-01-li-01" extended="build-process" />
							</li>
							<li>
								<span className="BuildProcess__listHighlight">
									<Translate
										id="title-01-li-02-span"
										extended="build-process"
									/>
								</span>
								<Translate id="title-01-li-02" extended="build-process" />
							</li>
							<li>
								<span className="BuildProcess__listHighlight">
									<Translate
										id="title-01-li-03-span"
										extended="build-process"
									/>
								</span>
								<Translate id="title-01-li-03" extended="build-process" />
							</li>
							<li>
								<span className="BuildProcess__listHighlight">
									<Translate
										id="title-01-li-04-span"
										extended="build-process"
									/>
								</span>
								<Translate id="title-01-li-04" extended="build-process" />
							</li>
						</ul>
						<h2 className="BuildProcess__title BuildProcess__title--space">
							<Translate id="title-02" extended="build-process" />
						</h2>
						<p className="BuildProcess__text">
							<Translate id="title-02-p-03" extended="build-process" />
						</p>
						<ul className="BuildProcess__list BuildProcess__list--nodot">
							<li>
								<Icon.React className="react" />
								<span className="BuildProcess__listHighlight">React</span>
								<Translate
									id="title-02-li-01"
									extended="build-process"
									link={
										<Button
											href="https://dev.to/bqardi/compound-components-react-1ag8"
											variation="link"
										>
											Compound Component
										</Button>
									}
								/>
								<ul>
									<li>
										<strong>Hooks</strong> - useState, useEffect, useRef,
										useContext, useMemo, custom hooks.
									</li>
									<li>
										<strong>Portal</strong> - createPortal, react-dom
									</li>
									<li>
										<strong>Lazy load</strong> - lazy, Suspense, react
									</li>
								</ul>
							</li>
							<li>
								<div className="BuildProcess__bullet reachrouter">Rr</div>
								<span className="BuildProcess__listHighlight">
									@Reach/Router
								</span>
								<Translate id="title-02-li-02" extended="build-process" />
							</li>
							<li>
								<Icon.JavaScript className="javascript" />
								<span className="BuildProcess__listHighlight">JavaScript</span>
								<Translate id="title-02-li-03" extended="build-process" />
							</li>
							<li>
								<Icon.Html className="html" />
								<span className="BuildProcess__listHighlight">HTML</span>
								<Translate id="title-02-li-04" extended="build-process" />
							</li>
							<li>
								<Icon.Sass className="sass" />
								<span className="BuildProcess__listHighlight">SASS / SCSS</span>
								<Translate id="title-02-li-05" extended="build-process" />
							</li>
							<li>
								<Icon.Node className="node" />
								<span className="BuildProcess__listHighlight">Node</span>
								<Translate id="title-02-li-06" extended="build-process" />
							</li>
							<li>
								<div className="BuildProcess__bullet express">Ex</div>
								<span className="BuildProcess__listHighlight">Express</span>
								<Translate id="title-02-li-07" extended="build-process" />
							</li>
						</ul>
					</Layout.Cell>
				</Layout.Cell>
				<Layout.Cell modifiers={["section", "print-avoid-break-after"]}>
					<Layout.Cell modifiers={["padding", "maxwidth", "print-padding"]}>
						<h2 className="BuildProcess__title">
							<Translate id="title-03" extended="build-process" />
						</h2>
						<div className="BuildProcess__accordion">
							<Accordion
								id="brainstorm"
								title={translate("summary", "build-process-brainstorm")}
							>
								<Brainstorm />
							</Accordion>
							<Accordion
								id="state-management"
								title={translate("summary", "build-process-state-management")}
							>
								<StateManagement />
							</Accordion>
							<Accordion
								id="landing-page"
								title={translate("summary", "build-process-landing-page")}
							>
								<LandingPage />
							</Accordion>
							<Accordion
								id="work-page"
								title={translate("summary", "build-process-work")}
							>
								<WorkPage />
							</Accordion>
							<Accordion
								id="contact-page"
								title={translate("summary", "build-process-contact")}
							>
								<ContactPage />
							</Accordion>
							<Accordion
								id="cv-page"
								title={translate("summary", "build-process-cv")}
							>
								<CVPage />
							</Accordion>
							<Accordion
								id="translation-feature"
								title={translate("summary", "build-process-translation")}
							>
								<TranslationFeature />
							</Accordion>
							<Accordion
								id="darkmode-color-theme"
								title={translate("summary", "build-process-darkmode-theme")}
							>
								<DarkmodeColorTheme />
							</Accordion>
							<Accordion
								id="backend"
								title={translate("summary", "build-process-backend")}
							>
								<Backend />
							</Accordion>
						</div>
					</Layout.Cell>
				</Layout.Cell>
				<Layout.Cell modifiers={["print-avoid-break-after"]}>
					<Layout.Cell modifiers={["padding", "maxwidth", "print-padding"]}>
						<h2 className="BuildProcess__title">
							<Translate id="title-04" extended="build-process" />
						</h2>
						<p className="BuildProcess__text">
							<Translate id="title-04-p-01" extended="build-process" />
						</p>
						<Button.HireMe translation="button-hire-me-contact" />
					</Layout.Cell>
				</Layout.Cell>
			</section>
		</Article>
	);
}

export default BuildProcess;
