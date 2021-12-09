import { Fragment } from "react";
import { Link } from "@reach/router";
import { useStoreContext } from "../components/Store";
import Icon from "../components/Icon";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Layout from "../layout/Layout";
import "./Landing.scss";
import usePageTitle from "../hooks/usePageTitle";
import Christmas from "../components/Christmas";

var languageExperience = [
	{
		id: "javascript",
		name: "JavaScript",
		icon: "JavaScript",
		separator: ", "
	},
	{
		id: "react",
		name: "React",
		icon: "React",
		separator: ", "
	},
	{
		id: "html",
		name: "HTML",
		icon: "Html",
		separator: "[translate]and"
	},
	{
		id: "css",
		name: "CSS",
		icon: "Css"
	}
];

function Landing() {
	var { Translate, translate, language, setLanguage, displayChristmas } = useStoreContext();
	usePageTitle();

	return (
		<section className="Landing">
			{displayChristmas && <Christmas.Heading />}
			<div className="Landing__info">
				<header className="Landing__header">
					<ButtonGroup className="Landing__translation">
						<ButtonGroup.Button
							id="dan"
							aria-label="Oversæt til dansk"
							defaultSelected={language === "dan"}
							onClick={() => setLanguage("dan")}
						>
							<Icon.DanishFlag />
						</ButtonGroup.Button>
						<ButtonGroup.Button
							id="eng"
							aria-label="Translate to english"
							defaultSelected={language === "eng"}
							onClick={() => setLanguage("eng")}
						>
							<Icon.BritishFlag />
						</ButtonGroup.Button>
					</ButtonGroup>
					<nav className="Landing__nav">
						<Link to="/dashboard/projects" className="Landing__hidden">
							<Translate id="landing-work" />
						</Link>
						<Link to="/dashboard/contact">
							<Translate id="landing-contact" />
						</Link>
						<Link to="/dashboard/cv">
							<Translate id="landing-cv" />
						</Link>
					</nav>
				</header>
				<div className="Landing__container">
					<div className="Landing__design">
						<div className="Landing__inner">
							<h1 className="Landing__title">
								<Translate id="landing-title" />
							</h1>
							<p className="Landing__text">
								<Translate
									id="landing-text"
									languages={languageExperience.map(xp => (
										<Fragment key={xp.id}>
											<span className="Landing__nowrap">
												<Icon
													name={xp.icon}
													className={`Landing__language Landing__language--${xp.id}`}
												/>
												<span className="Landing__programming">{xp.name}</span>
											</span>
											{xp.separator?.substring(0, 11) === "[translate]"
												? ` ${translate(
														xp.separator.split("[translate]").join("")
												  )} `
												: xp.separator}
										</Fragment>
									))}
								/>
							</p>
							<p className="Landing__text Landing__text--hightlight Landing__cta--onlylarge">
								<Translate id="landing-skill" />
							</p>
							<Layout.Flex
								align="center"
								gap="16px"
								wrap
								style={{ marginBottom: "16px" }}
							>
								<Button
									to="/dashboard/projects"
									variation="cta"
									className="Landing__cta"
								>
									<Translate id="landing-cta" />
								</Button>
								<Button
									to="/dashboard/cv"
									variation="cta-secondary"
									className="Landing__cta Landing__cta--onlylarge"
								>
									<Translate id="landing-cta-secondary" />
								</Button>
							</Layout.Flex>
							<Layout.Flex className="Landing__social">
								<Button
									href="https://linkedin.com/in/sune-seifert"
									variation="mix"
								>
									<Icon.Linkedin className="Profile__icon Profile__icon--linkedin" />
									LinkedIn
								</Button>
								<Button href="https://github.com/bqardi" variation="mix">
									<Icon.Github className="Profile__icon Profile__icon--github" />
									GitHub
								</Button>
							</Layout.Flex>
						</div>
					</div>
				</div>
				<footer className="Landing__footer">
					<Theme color="orange" hue="28" saturation="90%" />
					<Theme color="Blue" hue="230" saturation="60%" />
					<Theme color="Purple" hue="290" saturation="86%" />
					<Theme color="Red" hue="0" saturation="90%" />
					<Theme color="Green" hue="110" saturation="70%" />
					<Theme color="Cyan" hue="180" saturation="86%" />
				</footer>
			</div>
		</section>
	);
}

function Theme({ color, hue, saturation }) {
	var { translate, theme, setTheme } = useStoreContext();

	return (
		<button
			className="Landing__changetheme"
			aria-label={translate("landing-theme-" + color)}
			onClick={() => setTheme({ hue, saturation })}
		>
			<span
				style={{ backgroundColor: `hsl(${hue}, ${saturation}, 60%)` }}
				className={theme.hue === hue ? "active" : null}
			></span>
		</button>
	);
}

export default Landing;
