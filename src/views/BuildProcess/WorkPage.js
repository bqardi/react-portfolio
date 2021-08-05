import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";

function WorkPage(){
	var {Translate, translate} = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-work" />
			</h3>
			{translate("title-01-array", "build-process-work")?.map(item => <p key={item} className="BuildProcess__text">{item}</p>)}
		</Layout.Cell>
	);
}

export default WorkPage;