import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";
import Button from "../../components/Button";
import Form from "../../components/Form";

function DarkmodeColorTheme() {
	var { translate, parseAttributes } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">Server</h3>
			{translate("title-01-array-01", "build-process-backend")?.map(
				item => {
					return <p key={item} className="BuildProcess__text">{parseAttributes(item, {email: <Button href="mailto:bqardi@msn.com">bqardi@msn.com</Button>})}</p>
				}
			)}
			<Form />
		</Layout.Cell>
	);
}

export default DarkmodeColorTheme;
