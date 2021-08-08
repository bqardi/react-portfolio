import { useStoreContext } from "../components/Store";
import Article from "../layout/Article";
import Layout from "../layout/Layout";
import Form from "../components/Form";
import "./Contact.scss";
import usePageTitle from "../hooks/usePageTitle";

function Contact() {
	var { Translate, translate } = useStoreContext();
	usePageTitle(translate("title-contact"));

	return (
		<Article type="contact">
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<p>
					<Translate id="contact-text" />
				</p>
				<Form />
			</Layout.Cell>
		</Article>
	);
}

export default Contact;
