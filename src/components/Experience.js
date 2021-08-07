import helper from "../hooks/helper";
import { useStoreContext } from "./Store";
import Card from "./Card";
import "./Experience.scss";
import Icon from "./Icon";
import Button from "./Button";

function Experience({ xp, showLine, isCurrent, className }) {
	var { Translate, translateFeed, parseAttributes } = useStoreContext();

	return (
		<Card
			className={`Experience${xp.jobhunting ? " Experience--jobhunting" : ""}${helper.className(className)}`}
		>
			<div
				className={`Experience__period${helper.className(
					`Experience__period--${xp.type.eng}`
				)}`}
			>
				<time>
					<span className="Experience__year">
						{isCurrent ? helper.latestDate(xp.from).year : xp.from.year}
					</span>
					/
					<span className="Experience__month">
						{isCurrent ? helper.latestDate(xp.from).month : xp.from.month}
					</span>
				</time>
				<Icon.ArrowRightBold className="Experience__periodSeparator" />
				<time>
					<span className="Experience__year">{xp.to.year}</span>/
					<span className="Experience__month">{xp.to.month}</span>
				</time>
			</div>
			<Card.Body
				className={`Experience__body${helper.className(
					showLine && "Experience__body--line"
				)}`}
			>
				<div className="Experience__location">
					<div className="Experience__locationBackground">
						<Icon.Philadelphia />
					</div>
					<span className="Experience__locationTitle">
						{<Translate id="experience-city" />}
					</span>
					<span className="Experience__locationSeparator">:</span>
					<span className="Experience__locationCity">
						{translateFeed(xp.location)}
					</span>
				</div>
				<h3 className="Experience__name">
					{translateFeed(xp.name) || xp.name}
					<span className="Experience__separator">&middot;</span>
					<span
						className={`Experience__type${helper.className(
							`Experience__type--${xp.type.eng}`
						)}`}
					>
						{translateFeed(xp.type)}
					</span>
				</h3>
				<h4 className="Experience__title">{translateFeed(xp.title)}</h4>
				<p className="Experience__description">
					{parseAttributes(translateFeed(xp.description), {
						link: (
							<Button to="/dashboard/contact">
								<Translate id="experience-contact-link" />
							</Button>
						)
					})}
				</p>
			</Card.Body>
			{xp.jobhunting && <Button.HireMe className="Experience__cta" />}
		</Card>
	);
}

export default Experience;
