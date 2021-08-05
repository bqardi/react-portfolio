import { useStoreContext } from "./Store";
import Tooltip from "./Tooltip";
import Icon from "./Icon";

function Infotip({text, popup, dotted, caption, extended, chip}){
	var {Translate} = useStoreContext();

	return (
		<Tooltip fold={35} clickToggle>
			<Tooltip.Item className="Tooltip__item" offset={5} margin={20}>
				<p className="Tooltip__text">
					<Translate id={popup} extended={extended} />
				</p>
			</Tooltip.Item>
			<span className={`Tooltip__infotip${dotted ? " Tooltip__dotted" : ""}${caption ? " Tooltip__caption" : ""}${chip ? " Tooltip__chip" : ""}`}>
				<Translate id={text} extended={extended} />
				<Icon.InformationOutline className="Tooltip__icon" />
			</span>
		</Tooltip>
	);
}

export default Infotip;