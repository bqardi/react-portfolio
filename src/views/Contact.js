import { useStoreContext } from "../components/Store";
import Article from "../layout/Article";
import Layout from "../layout/Layout";
import Form from "../components/Form";
import "./Contact.scss";

function Contact(){
	var {Translate} = useStoreContext();
	
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