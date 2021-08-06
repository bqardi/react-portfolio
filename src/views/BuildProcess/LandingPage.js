import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";

function LandingPage() {
	var { Translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-landing-page" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-01" extended="build-process-landing-page" />
			</p>
		</Layout.Cell>
	);
}

export default LandingPage;
