import Layout from "../../layout/Layout";
import Code from "../../components/Code";
import Button from "../../components/Button";
import Infotip from "../../components/Infotip";
import { useStoreContext } from "../../components/Store";

function TranslationFeature() {
	var { Translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-translation" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-01" extended="build-process-translation" />
			</p>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-02" extended="build-process-translation" />
			</p>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-02" extended="build-process-translation" />
			</h3>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-01" extended="build-process-translation" />
			</p>
			<Code
				title="React - JavaScript"
				caption={
					<Infotip
						text="title-02-tooltip"
						popup="title-02-tooltip-text"
						extended="build-process-translation"
						dotted
						caption
					/>
				}
			>
				<Code.Variable type="const" name="translations">
					<Code.Block>
						<Code.KeyValue property="experience" json>
							<Code.Block>
								<Code.KeyValue property="dan" json>
									<Code.String>Erfaring</Code.String>
								</Code.KeyValue>
								<Code.KeyValue property="eng" json separator="">
									<Code.String>Experience</Code.String>
								</Code.KeyValue>
							</Code.Block>
						</Code.KeyValue>
						<Code.KeyValue property="button-hire-me" json separator="">
							<Code.Block>
								<Code.KeyValue property="dan" json>
									<Code.String>Ansæt mig</Code.String>
								</Code.KeyValue>
								<Code.KeyValue property="eng" json separator="">
									<Code.String>Hire me</Code.String>
								</Code.KeyValue>
							</Code.Block>
						</Code.KeyValue>
					</Code.Block>
				</Code.Variable>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-02" extended="build-process-translation" />
			</p>
			<Code title="React - JavaScript">
				<Code.Function.Block name="MyComponent">
					<Code.Variable name={["Translate"]}>
						<Code.Function.Call name="useLanguage" />
					</Code.Variable>
					<br />
					<Code.Return>
						(
						<Code.Indent>
							<Code.Component tag="button">
								<Code.Component
									tag="Translate"
									props={[
										{
											property: "id",
											value: <Code.String>button-hire-me</Code.String>
										}
									]}
								/>
							</Code.Component>
						</Code.Indent>
						)
					</Code.Return>
				</Code.Function.Block>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-03" extended="build-process-translation" />
			</p>
			<Button.HireMe />
			<p className="BuildProcess__text">
				<Translate id="title-02-p-04" extended="build-process-translation" />
			</p>
			<Code title="React - JavaScript">
				<Code.Variable type="const" name="translations">
					<Code.Block>
						<Code.KeyValue property="button-hire-me-variable" json separator="">
							<Code.Block>
								<Code.KeyValue property="dan" json>
									<Code.String>Ansæt [my-custom-variable]</Code.String>
								</Code.KeyValue>
								<Code.KeyValue property="eng" json separator="">
									<Code.String>Hire [my-custom-variable]</Code.String>
								</Code.KeyValue>
							</Code.Block>
						</Code.KeyValue>
					</Code.Block>
				</Code.Variable>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-05" extended="build-process-translation" />
			</p>
			<Code title="React - JavaScript">
				<Code.Variable type="const" name="translations">
					<Code.Block>
						<Code.KeyValue property="button-hire-me-variable" json separator="">
							<Code.Block>
								<Code.KeyValue property="dan" json>
									<Code.String>Ansæt [myCustomVariable]</Code.String>
								</Code.KeyValue>
								<Code.KeyValue property="eng" json separator="">
									<Code.String>Hire [myCustomVariable]</Code.String>
								</Code.KeyValue>
							</Code.Block>
						</Code.KeyValue>
					</Code.Block>
				</Code.Variable>
			</Code>
			<Code title="React - JavaScript">
				<Code.Function.Block name="MyComponent">
					<Code.Variable name={["Translate"]}>
						<Code.Function.Call name="useLanguage" />
					</Code.Variable>
					<br />
					<Code.Return>
						(
						<Code.Indent>
							<Code.Component tag="button">
								<Code.Component
									tag="Translate"
									noSpace
									props={[
										{
											property: "id",
											value: <Code.String>button-hire-me-variable</Code.String>
										},
										{
											property: "myCustomVariable",
											value: (
												<Code.Block>
													<Code.Component
														tag="span"
														props={[
															{
																property: "style",
																value: (
																	<Code.Block>
																		<Code.KeyValue property="backgroundColor">
																			<Code.String>orange</Code.String>
																		</Code.KeyValue>
																		<Code.KeyValue
																			property="padding"
																			separator=""
																		>
																			<Code.String>0 0.25rem</Code.String>
																		</Code.KeyValue>
																	</Code.Block>
																)
															}
														]}
													>
														Sune
													</Code.Component>
												</Code.Block>
											)
										}
									]}
								/>
							</Code.Component>
						</Code.Indent>
						)
					</Code.Return>
				</Code.Function.Block>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-06" extended="build-process-translation" />
			</p>
			<Button.HireMe
				translation="button-hire-me-variable"
				myCustomVariable={
					<span
						style={{
							backgroundColor: "orange",
							padding: "0 0.25rem"
						}}
					>
						Sune
					</span>
				}
			/>
			<p className="BuildProcess__text"></p>
		</Layout.Cell>
	);
}

export default TranslationFeature;
