import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";
import Code from "../../components/Code";

function DarkmodeColorTheme() {
	var { Translate, translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">Server</h3>
			{translate("title-01-array-01", "build-process-backend")?.map(
				item => (
					<p key={item} className="BuildProcess__text">
						{item}
					</p>
				)
			)}
		</Layout.Cell>
	);
}

export default DarkmodeColorTheme;
