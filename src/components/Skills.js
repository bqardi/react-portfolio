import { useStoreContext } from "./Store";
import Layout from "../layout/Layout";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import "./Skills.scss";
import Infotip from "./Infotip";

function Skills({ translation, array, noBottomMargin }) {
	var { translateFeed, Translate, parseString } = useStoreContext();

	return (
		<Layout.Cell modifiers={noBottomMargin ? null : ["b-margin"]}>
			<h3 className="Skills__title">
				<Translate id={translation} />
			</h3>
			<Layout.Flex
				wrap
				justify="center"
				gap="28px 16px"
				className="Skills__printflex"
			>
				{array?.map(item => {
					var description = parseString(translateFeed(item.description));

					return (
						<Tooltip key={item.name} fold={35} clickToggle contentIsBlock>
							<Tooltip.Item className="Tooltip__item" offset={15} margin={20}>
								{description && <p className="Tooltip__text">{description}</p>}
							</Tooltip.Item>
							<Layout.Flex
								tabIndex="0"
								justify="center"
								align="flex-end"
								className={`Skills__chip${
									description ? " Skills__chip--tooltip" : ""
								}`}
							>
								{item.icon && (
									<Icon
										name={item.icon}
										style={{
											backgroundColor: item.color
										}}
										className="Skills__icon"
									/>
								)}
								{item.name}
							</Layout.Flex>
						</Tooltip>
					);
				})}
			</Layout.Flex>
		</Layout.Cell>
	);
}

function Personal({ skills }) {
	var { Translate } = useStoreContext();

	return (
		<>
			<ul className="Skills__onlyprint">
				{skills.map(skill => {
					return (
						<li key={skill}>
							<span className="Skills__onlyprintTitle">
								<Translate id={`personal-skills-${skill}`} />
							</span>
							<span className="Skills__onlyprintText">
								<Translate id={`personal-skills-${skill}-description`} />
							</span>
						</li>
					);
				})}
			</ul>
			<ul className="Skills__chips Skills__noprint">
				{skills.map(skill => {
					return (
						<li key={skill}>
							<Infotip
								text={`personal-skills-${skill}`}
								popup={`personal-skills-${skill}-description`}
								chip
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}
Skills.Personal = Personal;

export default Skills;
