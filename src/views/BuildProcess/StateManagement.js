import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";
import Code from "../../components/Code";
import Button from "../../components/Button";

function StateManagement() {
	var { Translate, darkmode, setDarkmode } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-state-management" />
			</h3>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-01"
					extended="build-process-state-management"
				/>
			</p>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-02"
					extended="build-process-state-management"
				/>
			</p>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-03"
					extended="build-process-state-management"
				/>
			</p>
			<Code title="React - JavaScript">
				<Code.Statement>import</Code.Statement>
				<Code.CommaSeparated
					items={[" createContext", "useContext "]}
					destructured
				/>
				<Code.Statement space="both">from</Code.Statement>
				<Code.String>react</Code.String>
				<Code.Operator>;</Code.Operator>
				<br />
				<Code.Variable name="StoreContext">
					<Code.Function.Call name="createContext" />
				</Code.Variable>
				<br />
				<Code.Function.Block name="useStoreContext" statement="export">
					<Code.Return>
						<Code.Function.Call
							name="useContext"
							parameters={["StoreContext"]}
						/>
					</Code.Return>
				</Code.Function.Block>
				<br />
				<br />
				<Code.Function.Block
					name="Store"
					parameters={["children", "value"]}
					destructured
				>
					<Code.Return>
						(
						<Code.Indent>
							<Code.Component
								tag="StoreContext.Provider"
								props={[
									{
										property: "value",
										value: (
											<Code.Destructured>
												<Code.Property>value</Code.Property>
											</Code.Destructured>
										)
									}
								]}
							>
								<Code.Destructured>
									<Code.Property>children</Code.Property>
								</Code.Destructured>
							</Code.Component>
						</Code.Indent>
						)
					</Code.Return>
				</Code.Function.Block>
				<br />
				<br />
				<Code.Statement>export default</Code.Statement>
				<Code.Function>Store</Code.Function>
				<Code.Operator>;</Code.Operator>
			</Code>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-04"
					extended="build-process-state-management"
				/>
			</p>
			<Code title="React - JavaScript">
				<Code.Function.Block name="App">
					<Code.Variable name={["data", "setData"]} destructuredArray>
						<Code.Function.Call name="useState" parameters={["{}"]} />
					</Code.Variable>
					<Code.Variable name={["darkmode", "setDarkmode"]} destructuredArray>
						<Code.Function.Call name="useState" parameters={["false"]} />
					</Code.Variable>
					<Code.Variable name={["language", "Translate", "translate"]}>
						<Code.Function.Call name="useLanguage" />
					</Code.Variable>
					<br />
					<Code.Return>
						(
						<Code.Indent>
							<Code.Component
								tag="Store"
								props={[
									{
										property: "value",
										value: (
											<Code.Destructured>
												<Code.CommaSeparated
													items={[
														"data",
														"setData",
														"darkmode",
														"setDarkmode",
														"language",
														"Translate",
														"translate"
													]}
													destructured
													pretty
												/>
											</Code.Destructured>
										)
									}
								]}
							>
								<Code.Comment type="react">
									<Translate
										id="title-01-code-01"
										extended="build-process-state-management"
									/>
								</Code.Comment>
							</Code.Component>
						</Code.Indent>
						)
					</Code.Return>
				</Code.Function.Block>
			</Code>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-05"
					extended="build-process-state-management"
				/>
			</p>
			<Code title="React - JavaScript">
				<Code.Function.Block name="Darkmode">
					<Code.Variable name={["darkmode", "setDarkmode"]}>
						<Code.Function.Call name="useStoreContext" />
					</Code.Variable>
					<br />
					<Code.Return>
						(
						<Code.Indent>
							<Code.Component
								tag="button"
								props={[
									{
										property: "onClick",
										value: (
											<Code.Block inline>
												() <Code.Entity>=</Code.Entity>
												<Code.GreaterThan />
												&nbsp;
												<Code.Function.Call
													name="setDarkmode"
													parameters={[
														<>
															<Code.Property>prev</Code.Property>
															<Code.Entity space="before">=</Code.Entity>
															<Code.GreaterThan />
															&nbsp;
															<Code.Operator>!</Code.Operator>
															<Code.Property>prev</Code.Property>
														</>
													]}
												/>
											</Code.Block>
										)
									}
								]}
							>
								<Code.Block inline>
									<Code.Property>darkmode</Code.Property>
									<Code.Operator space="both">?</Code.Operator>
									<Code.String>
										<Translate
											id="title-01-button-light"
											extended="build-process-state-management"
										/>
									</Code.String>
									<Code.Operator space="both">:</Code.Operator>
									<Code.String>
										<Translate
											id="title-01-button-dark"
											extended="build-process-state-management"
										/>
									</Code.String>
								</Code.Block>
							</Code.Component>
						</Code.Indent>
						)
					</Code.Return>
				</Code.Function.Block>
			</Code>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-06"
					extended="build-process-state-management"
				/>
			</p>
			<Button
				className="BuildProcess__button"
				onClick={() => setDarkmode(prev => !prev)}
			>
				{darkmode ? (
					<Translate
						id="title-01-button-light"
						extended="build-process-state-management"
					/>
				) : (
					<Translate
						id="title-01-button-dark"
						extended="build-process-state-management"
					/>
				)}
			</Button>
			<p className="BuildProcess__text">
				<Translate
					id="title-01-p-07"
					extended="build-process-state-management"
				/>
			</p>
		</Layout.Cell>
	);
}

export default StateManagement;
