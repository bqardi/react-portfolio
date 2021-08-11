import { useStoreContext } from "../components/Store";
import Article from "../layout/Article";
import Layout from "../layout/Layout";
import Form from "../components/Form";
import Address from "../components/Address";
import "./Contact.scss";
import usePageTitle from "../hooks/usePageTitle";
import OnlineProfiles from "../components/OnlineProfiles";

function Contact() {
	var { Translate, translate } = useStoreContext();
	usePageTitle(translate("title-contact"));

	return (
		<Article type="contact">
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<p><Translate id="contact-text" /></p>
				<Form />
			</Layout.Cell>
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<Address />
			</Layout.Cell>
			<Layout.Cell modifiers={["padding", "maxwidth"]}>
				<h2><Translate id="contact-online-profile" /></h2>
				<OnlineProfiles />
			</Layout.Cell>
		</Article>
	);
}

export default Contact;
