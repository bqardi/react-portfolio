import "./Card.scss";

function Card({title}){
	return (
		<article className="Card">
			<h1>{title}</h1>
			<p>Some text</p>
		</article>
	);
}

export default Card;