import { useStoreContext } from "../../components/Store";
import Layout from "../../layout/Layout";
import Code from "../../components/Code";

function DarkmodeColorTheme() {
	var { Translate, translate } = useStoreContext();

	return (
		<Layout.Cell modifiers={["padding", "child-margin"]}>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-01" extended="build-process-darkmode-theme" />
			</h3>
			{translate("title-01-array-01", "build-process-darkmode-theme")?.map(
				item => (
					<p key={item} className="BuildProcess__text">
						{item}
					</p>
				)
			)}
			<Code title="CSS - variables">
				<Code.Comment>light</Code.Comment>
				<Code.Css.Property property="--dark">
					<Code.Css.Hsl l="92%" />
				</Code.Css.Property>
				<Code.Css.Property property="--light">
					<Code.Css.Hsl l="12%" />
				</Code.Css.Property>
				<br />
				<Code.Css
					selector={
						<>
							<Code.Reserved noSpace>&amp;</Code.Reserved>
							<Code.Function>.dark</Code.Function>
						</>
					}
				>
					<Code.Css.Property property="--dark">
						<Code.Css.Hsl l="5%" />
					</Code.Css.Property>
					<Code.Css.Property property="--light">
						<Code.Css.Hsl l="88%" />
					</Code.Css.Property>
				</Code.Css>
			</Code>
			{translate("title-01-array-02", "build-process-darkmode-theme")?.map(
				item => (
					<p key={item} className="BuildProcess__text">
						{item}
					</p>
				)
			)}
			<Code title="React - JavaScript">
				<Code.Function.Call
					name="useEffect"
					parameters={[
						<Code.Function.Block arrow>
							<Code.CommaSeparated
								separator="."
								items={[
									<Code.Property>document</Code.Property>,
									<Code.Property>body</Code.Property>,
									<Code.Property>className</Code.Property>
								]}
							/>
							<Code.Operator space="both">=</Code.Operator>
							<Code.Property>darkmode</Code.Property>
							<Code.Operator space="both">?</Code.Operator>
							<Code.String>dark</Code.String>
							<Code.Operator space="both">:</Code.Operator>
							<Code.String></Code.String>
							<Code.Operator>;</Code.Operator>
						</Code.Function.Block>,
						<Code.Operator>
							[<Code.Property>darkmode</Code.Property>]
						</Code.Operator>
					]}
				/>
				<Code.Operator>;</Code.Operator>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-01-p-01" extended="build-process-darkmode-theme" />
			</p>
			<h3 className="BuildProcess__titleAccordion">
				<Translate id="title-02" extended="build-process-darkmode-theme" />
			</h3>
			{translate("title-02-array-01", "build-process-darkmode-theme")?.map(
				item => (
					<p key={item} className="BuildProcess__text">
						{item}
					</p>
				)
			)}
			<Code title="CSS - variables">
				<Code.Comment>Default values</Code.Comment>
				<Code.Css.Property property="--hue">
					<Code.Number>280</Code.Number>
				</Code.Css.Property>
				<Code.Css.Property property="--saturation">
					<Code.Number>86%</Code.Number>
				</Code.Css.Property>
				<br />
				<Code.Css.Property property="--theme">
					<Code.Css.Hsl
						h={<Code.Css.Var values={[<Code.Property>--hue</Code.Property>]} />}
						s={
							<Code.Css.Var
								values={[<Code.Property>--saturation</Code.Property>]}
							/>
						}
						l="40%"
					/>
				</Code.Css.Property>
				<Code.Css.Property property="--theme-dark">
					<Code.Css.Hsl
						h={<Code.Css.Var values={[<Code.Property>--hue</Code.Property>]} />}
						s={
							<Code.Css.Var
								values={[<Code.Property>--saturation</Code.Property>]}
							/>
						}
						l="65%"
					/>
				</Code.Css.Property>
				<Code.Css.Property property="--theme-light">
					<Code.Css.Hsl
						h={<Code.Css.Var values={[<Code.Property>--hue</Code.Property>]} />}
						s={
							<Code.Css.Var
								values={[<Code.Property>--saturation</Code.Property>]}
							/>
						}
						l="28%"
					/>
				</Code.Css.Property>
				<br />
				<Code.Css
					selector={
						<>
							<Code.Reserved noSpace>&amp;</Code.Reserved>
							<Code.Function>.dark</Code.Function>
						</>
					}
				>
					<Code.Css.Property property="--theme">
						<Code.Css.Hsl
							h={
								<Code.Css.Var values={[<Code.Property>--hue</Code.Property>]} />
							}
							s={
								<Code.Css.Var
									values={[<Code.Property>--saturation</Code.Property>]}
								/>
							}
							l="60%"
						/>
					</Code.Css.Property>
					<Code.Css.Property property="--theme-dark">
						<Code.Css.Hsl
							h={
								<Code.Css.Var values={[<Code.Property>--hue</Code.Property>]} />
							}
							s={
								<Code.Css.Var
									values={[<Code.Property>--saturation</Code.Property>]}
								/>
							}
							l="35%"
						/>
					</Code.Css.Property>
					<Code.Css.Property property="--theme-light">
						<Code.Css.Hsl
							h={
								<Code.Css.Var values={[<Code.Property>--hue</Code.Property>]} />
							}
							s={
								<Code.Css.Var
									values={[<Code.Property>--saturation</Code.Property>]}
								/>
							}
							l="72%"
						/>
					</Code.Css.Property>
				</Code.Css>
			</Code>
			<p className="BuildProcess__text">
				<Translate id="title-02-p-01" extended="build-process-darkmode-theme" />
			</p>
			<Code title="React - JavaScript">
				<Code.Function.Call
					name="useEffect"
					parameters={[
						<Code.Function.Block arrow>
							<Code.Line>
								<Code.CommaSeparated
									separator="."
									items={[
										<Code.Property>document</Code.Property>,
										<Code.Property>body</Code.Property>,
										<Code.Property>style</Code.Property>,
										<Code.Function.Call
											name="setProperty"
											parameters={[
												<Code.String>--hue</Code.String>,
												<Code.CommaSeparated
													separator="."
													items={[
														<Code.Property>theme</Code.Property>,
														<Code.Property>hue</Code.Property>
													]}
												/>
											]}
										/>
									]}
								/>
								<Code.Operator>;</Code.Operator>
							</Code.Line>
							<Code.Line>
								<Code.CommaSeparated
									separator="."
									items={[
										<Code.Property>document</Code.Property>,
										<Code.Property>body</Code.Property>,
										<Code.Property>style</Code.Property>,
										<Code.Function.Call
											name="setProperty"
											parameters={[
												<Code.String>--saturation</Code.String>,
												<Code.CommaSeparated
													separator="."
													items={[
														<Code.Property>theme</Code.Property>,
														<Code.Property>saturation</Code.Property>
													]}
												/>
											]}
										/>
									]}
								/>
								<Code.Operator>;</Code.Operator>
							</Code.Line>
						</Code.Function.Block>,
						<Code.Operator>
							[<Code.Property>theme</Code.Property>]
						</Code.Operator>
					]}
				/>
				<Code.Operator>;</Code.Operator>
			</Code>
		</Layout.Cell>
	);
}

export default DarkmodeColorTheme;
