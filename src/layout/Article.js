import { useStoreContext } from "../components/Store";
import Layout from "./Layout";
import "./Article.scss";

function Article({ children, type, resume }) {
	var { Translate } = useStoreContext();

	return (
		<>
			<Layout.Cell
				modifiers={["section", "header", "flex", "flexbase", "flexwrap"]}
			>
				<h1 className="Article__title">
					<Translate id={`title-${type}`} />
				</h1>
				<p className="Article__description">
					<Translate id={`description-${type}`} />
				</p>
			</Layout.Cell>
			{resume ? (
				<Layout.Cell modifiers={["maxwidth"]}>
					<Layout.Cell modifiers={["padding"]}>
						<Translate id={`resume-${type}`} />
					</Layout.Cell>
				</Layout.Cell>
			) : null}
			{children}
		</>
	);
}

export default Article;
