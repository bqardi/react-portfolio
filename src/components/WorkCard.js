import Button from "./Button";
import Icon from "./Icon";
import "./WorkCard.scss";
import { useStoreContext } from "./Store";
import helper from "../hooks/helper";

function WorkCard({ project }) {
	var { translateFeed } = useStoreContext();

	if (!project) return null;

	var title = translateFeed(project.title);

	return (
		<div className="WorkCard">
			<div className="WorkCard__printlinks">
				{project.links.map(link => (
					<span className="WorkCard__printlink" key={link.url}>
						<Icon
							className="WorkCard__printlink--icon"
							name={helper.proper(link.type)}
						/>
						{link.url}
					</span>
				))}
			</div>
			<div className="WorkCard__container">
				<Button key={project.links[0].url} href={project.links[0].url}>
					<img
						src={project.image}
						alt={title}
						style={{ objectPosition: project.imageFocusArea }}
					/>
				</Button>
				<h3>{title}</h3>
			</div>
			<p className="WorkCard__tags">
				{translateFeed(project.tags).map(tag => (
					<span key={tag} className="WorkCard__tag">
						{tag}
					</span>
				))}
			</p>
			<p className="WorkCard__description">
				{translateFeed(project.description)}
			</p>
			<div className="WorkCard__links">
				{project.links.map(link => {
					return (
						<Button className="WorkCard__link" key={link.url} href={link.url}>
							<Icon
								className={"WorkCard__link--icon WorkCard__link--" + link.type}
								name={helper.proper(link.type)}
							/>
							<span className="WorkCard__link--text">
								{translateFeed(link.description)}:
							</span>
							<Icon.ArrowRightBold className="WorkCard__link--chevron" />
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default WorkCard;
