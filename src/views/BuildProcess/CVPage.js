import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";

function CVPage() {
	var { Translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-cv" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-01" extended="build-process-cv" />
			</p>
			<ul className="BuildProcess__list">
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-01-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-01" extended="build-process-cv" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-02-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-02" extended="build-process-cv" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-03-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-03" extended="build-process-cv" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-04-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-04" extended="build-process-cv" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-05-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-05" extended="build-process-cv" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-06-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-06" extended="build-process-cv" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate id="title-01-li-07-span" extended="build-process-cv" />
					</span>
					<Translate id="title-01-li-07" extended="build-process-cv" />
				</li>
			</ul>
		</Layout.Cell>
	);
}

export default CVPage;
