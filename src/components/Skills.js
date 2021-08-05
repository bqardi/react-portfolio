import { useStoreContext } from "./Store";
import Layout from "../layout/Layout";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import "./Skills.scss";

function Skills({translation, array, noBottomMargin}){
	var {translateFeed, Translate, parseString} = useStoreContext();

	return (
		<Layout.Cell modifiers={noBottomMargin ? null : ["b-margin"]}>
			<h3 style={{marginBottom: "2rem"}}><Translate id={translation} /></h3>
			<Layout.Flex wrap justify="center" gap="28px 16px">
				{array?.map(item =>
					{
						var description = parseString(translateFeed(item.description));

						return <Tooltip key={item.name} fold={35} clickToggle contentIsBlock>
							<Tooltip.Item className="Tooltip__item" offset={15} margin={20}>
								{description && <p className="Tooltip__text">
									{description}
								</p>}
							</Tooltip.Item>
							<Layout.Flex tabIndex="0" justify="center" align="flex-end" className={`Skills__chip${description ? " Skills__chip--tooltip" : ""}`}>
								{item.icon && <Icon
									name={item.icon}
									style={{
										backgroundColor: item.color
									}}
									className="Skills__icon"
								/>}
								{item.name}
							</Layout.Flex>
						</Tooltip>
					}
				)}
			</Layout.Flex>
		</Layout.Cell>
	);
}

export default Skills;