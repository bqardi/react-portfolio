import Layout from "../../layout/Layout";
import { useStoreContext } from "../../components/Store";
import Code from "../../components/Code";

function ContactPage() {
	var { Translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-contact" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-01" extended="build-process-contact" />
			</p>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-02" extended="build-process-contact" />
			</p>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-03" extended="build-process-contact" />
			</p>
			<ul className="BuildProcess__list">
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate
							id="title-01-li-01-span"
							extended="build-process-contact"
						/>
					</span>
					<Translate id="title-01-li-01" extended="build-process-contact" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate
							id="title-01-li-02-span"
							extended="build-process-contact"
						/>
					</span>
					<Translate id="title-01-li-02" extended="build-process-contact" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate
							id="title-01-li-03-span"
							extended="build-process-contact"
						/>
					</span>
					<Translate id="title-01-li-03" extended="build-process-contact" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						<Translate
							id="title-01-li-04-span"
							extended="build-process-contact"
						/>
					</span>
					<Translate id="title-01-li-04" extended="build-process-contact" />
				</li>
			</ul>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-02" extended="build-process-contact" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-01" extended="build-process-contact" />
			</p>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-03" extended="build-process-contact" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-03-p-01" extended="build-process-contact" />
			</p>
			<p className="BuildProcess__text">
				<Translate id="title-03-p-02" extended="build-process-contact" />
			</p>
			<ul className="BuildProcess__list">
				<li>
					<span className="BuildProcess__listHighlight">useForm</span>
					<Translate id="title-03-li-01" extended="build-process-contact" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">useFormValidation</span>
					<Translate id="title-03-li-02" extended="build-process-contact" />
				</li>
				<li>
					<span className="BuildProcess__listHighlight">
						useContactValidation
					</span>
					<Translate id="title-03-li-03" extended="build-process-contact" />
				</li>
			</ul>
			<p className="BuildProcess__text">
				<Translate id="title-03-p-03" extended="build-process-contact" />
			</p>
			<Code title="React - JavaScript">
				<Code.Function.Block
					name="useContactValidation"
					destructured
					parameters={["values"]}
				>
					<Code.Variable
						name={
							<Code.CommaSeparated
								items={["isRequired", "isEmail"]}
								destructured
							/>
						}
					>
						<Code.Function.Call name="useFormValidation" />
					</Code.Variable>
					<Code.Variable name="errors">
						<Code.Block empty />
					</Code.Variable>
					<Code.Variable
						name={
							<Code.CommaSeparated items={["name", "email"]} destructured />
						}
					>
						<Code.Property>values</Code.Property>
					</Code.Variable>
					<br />
					<Code.If
						condition={
							<>
								<Code.Operator>!</Code.Operator>
								<Code.Function.Call name="isEmail" parameters={["email"]} />
							</>
						}
					>
						<Code.CommaSeparated items={["errors", "email"]} separator="." />
						<Code.Operator space="both">=</Code.Operator>
						<Code.String>contact-email-wrong</Code.String>
						<Code.Operator>;</Code.Operator>
					</Code.If>
					<Code.If
						condition={
							<>
								<Code.Operator>!</Code.Operator>
								<Code.Function.Call name="isRequired" parameters={["name"]} />
							</>
						}
					>
						<Code.CommaSeparated items={["errors", "name"]} separator="." />
						<Code.Operator space="both">=</Code.Operator>
						<Code.String>contact-name-required</Code.String>
						<Code.Operator>;</Code.Operator>
					</Code.If>
					<Code.If
						condition={
							<>
								<Code.Operator>!</Code.Operator>
								<Code.Function.Call name="isRequired" parameters={["email"]} />
							</>
						}
					>
						<Code.CommaSeparated items={["errors", "email"]} separator="." />
						<Code.Operator space="both">=</Code.Operator>
						<Code.String>contact-email-required</Code.String>
						<Code.Operator>;</Code.Operator>
					</Code.If>
					<br />
					<Code.Return>
						<Code.Property>errors</Code.Property>
					</Code.Return>
				</Code.Function.Block>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-03-p-04" extended="build-process-contact" />
			</p>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-04" extended="build-process-contact" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-04-p-01" extended="build-process-contact" />
			</p>
			<p className="BuildProcess__text">
				<Translate id="title-04-p-02" extended="build-process-contact" />
			</p>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-05" extended="build-process-contact" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-05-p-01" extended="build-process-contact" />
			</p>
		</Layout.Cell>
	);
}

export default ContactPage;
