import { Fragment } from "react";
import helper from "../hooks/helper";
import "./Code.scss";

function Code({ children, className, singleline, title, caption, ...other }) {
	if (singleline) {
		return (
			<code
				className={`Code${helper.className(
					"Code--singleline"
				)}${helper.className(className)}`}
				{...other}
			>
				{children}
			</code>
		);
	}
	if (title) {
		return (
			<code className={`Code${helper.className("Code--block")}`} {...other}>
				<h2 className="Code__title">{title}</h2>
				<section className={`Code__content${helper.className(className)}`}>
					<div className="Code__scroll">{children}</div>
				</section>
				<div className="Code__caption">{caption}</div>
			</code>
		);
	}
	return (
		<code className={`Code${helper.className(className)}`} {...other}>
			{children}
		</code>
	);
}

var BracketLeft = () => <span className="Code__operator">&#91;</span>;
Code.BracketLeft = BracketLeft;

var BracketRight = () => <span className="Code__operator">&#93;</span>;
Code.BracketRight = BracketRight;

var Equals = () => <span className="Code__operator">&equals;</span>;
Code.Equals = Equals;

var Slash = () => <span className="Code__entity">&#47;</span>;
Code.Slash = Slash;

var LessThan = () => <span className="Code__entity">&lt;</span>;
Code.LessThan = LessThan;

var GreaterThan = () => <span className="Code__entity">&gt;</span>;
Code.GreaterThan = GreaterThan;

var Quote = () => <span className="Code__string">&quot;</span>;
Code.Quote = Quote;

function CurlyLeft({ reserved }) {
	return (
		<span className={`${reserved ? "Code__reserved" : "Code__operator"}`}>
			&#123;
		</span>
	);
}
Code.CurlyLeft = CurlyLeft;

function CurlyRight({ reserved }) {
	return (
		<span className={`${reserved ? "Code__reserved" : "Code__operator"}`}>
			&#125;
		</span>
	);
}
Code.CurlyRight = CurlyRight;

function Class({ children }) {
	return <span className="Code__class">{children}</span>;
}
Code.Class = Class;

function Function({ children }) {
	return <span className="Code__function">{children}</span>;
}
Code.Function = Function;

function FunctionBlock({
	statement,
	name,
	children,
	destructured,
	parameters,
	arrow
}) {
	return (
		<>
			{statement ? <Code.Statement>{statement}</Code.Statement> : null}
			{arrow ? null : <Reserved>function</Reserved>}
			<FunctionCall
				name={name}
				parameters={parameters}
				destructured={destructured}
			/>
			{arrow ? (
				<Entity space="both">
					=<GreaterThan />
				</Entity>
			) : null}
			<Block>{children}</Block>
		</>
	);
}
Code.Function.Block = FunctionBlock;

function FunctionCall({ name, parameters, destructured }) {
	return (
		<>
			<Function>{name}</Function>
			<Operator>
				(<CommaSeparated items={parameters} destructured={destructured} />)
			</Operator>
		</>
	);
}
Code.Function.Call = FunctionCall;

function If({ children, condition }) {
	return (
		<Line>
			<Statement>if</Statement>
			<Operator space="after">({condition})</Operator>
			<Block>{children}</Block>
		</Line>
	);
}
Code.If = If;

function Variable({ children, type = "var", name, destructuredArray }) {
	return (
		<Line>
			<Reserved>{type}</Reserved>
			{Array.isArray(name) ? (
				<Code.CommaSeparated
					items={name}
					destructured
					squareBrackets={destructuredArray}
				/>
			) : (
				<Property>{name}</Property>
			)}
			<Operator space="both">=</Operator>
			{children}
			<Operator>;</Operator>
		</Line>
	);
}
Code.Variable = Variable;

function KeyValue({ children, property, separator = ",", json }) {
	return (
		<Line>
			{json ? <String>{property}</String> : <Property>{property}</Property>}
			<Operator space="after">:</Operator>
			{children}
			<Operator>{separator}</Operator>
		</Line>
	);
}
Code.KeyValue = KeyValue;

function Attribute({ children, property }) {
	return (
		<>
			&nbsp;
			<Property>{property}</Property>
			<Operator>=</Operator>
			{children}
		</>
	);
}
Code.Attribute = Attribute;

function Component({ children, tag = "DefineTag", props, noSpace, inline }) {
	return (
		<Line>
			<LessThan />
			{isComponent(tag) ? (
				<Class>{tag}</Class>
			) : (
				<Reserved noSpace>{tag}</Reserved>
			)}
			{componentProps(props)}
			{children ? null : noSpace ? (
				<Slash />
			) : (
				<>
					&nbsp;
					<Slash />
				</>
			)}
			<GreaterThan />
			{inline ? (
				children
			) : (
				<Line>
					<Indent>{children}</Indent>
				</Line>
			)}
			{children ? (
				<>
					<LessThan />
					<Slash />
					{isComponent(tag) ? (
						<Class>{tag}</Class>
					) : (
						<Reserved noSpace>{tag}</Reserved>
					)}
					<GreaterThan />
				</>
			) : null}
		</Line>
	);
}
Code.Component = Component;

function Return({ children }) {
	return (
		<Line>
			<Statement>return</Statement>
			{children}
			<Operator>;</Operator>
		</Line>
	);
}
Code.Return = Return;

function Line({ children }) {
	return <span className="Code__line">{children}</span>;
}
Code.Line = Line;

function Block({ children, inline }) {
	return (
		<>
			<CurlyLeft />
			{inline ? children : <Indent>{children}</Indent>}
			<CurlyRight />
		</>
	);
}
Code.Block = Block;

function CommaSeparated({
	items,
	destructured,
	squareBrackets,
	separator = ", ",
	pretty
}) {
	if (!items) return null;

	var list = items.map((item, index, array) => {
		let itm = item;
		if (index < array.length - 1) {
			if (typeof itm === "object") {
				return (
					<Fragment key={item + "-" + index}>
						{itm}
						<Operator>{separator}</Operator>
					</Fragment>
				);
			}
			itm = (
				<>
					{restProp(itm)}
					<Operator>{separator}</Operator>
				</>
			);
		}
		if (pretty) {
			return (
				<Line key={item + "-" + index}>
					<Property>{itm}</Property>
				</Line>
			);
		}
		return <Property key={item + "-" + index}>{itm}</Property>;
	});
	if (pretty) {
		list = <Indent>{list}</Indent>;
	}
	if (destructured)
		return squareBrackets ? (
			<>
				<BracketLeft />
				{list}
				<BracketRight />
			</>
		) : (
			<>
				<CurlyLeft />
				{list}
				<CurlyRight />
			</>
		);
	return list;
}
Code.CommaSeparated = CommaSeparated;

function Destructured({ children }) {
	return (
		<>
			<CurlyLeft />
			{children}
			<CurlyRight />
		</>
	);
}
Code.Destructured = Destructured;

function String({ children }) {
	return (
		<span className="Code__string">
			<Quote />
			{children}
			<Quote />
		</span>
	);
}
Code.String = String;

function Number({ children }) {
	return <span className="Code__number">{children}</span>;
}
Code.Number = Number;

function Entity({ children, space }) {
	return (
		<>
			{space === "before" || space === "both" ? <>&nbsp;</> : null}
			<span className="Code__entity">{children}</span>
			{space === "after" || space === "both" ? <>&nbsp;</> : null}
		</>
	);
}
Code.Entity = Entity;

function Operator({ children, space }) {
	return (
		<>
			{space === "before" || space === "both" ? <>&nbsp;</> : null}
			<span className="Code__operator">{children}</span>
			{space === "after" || space === "both" ? <>&nbsp;</> : null}
		</>
	);
}
Code.Operator = Operator;

function Reserved({ children, noSpace }) {
	return (
		<>
			<span className="Code__reserved">{children}</span>
			{noSpace ? null : <>&nbsp;</>}
		</>
	);
}
Code.Reserved = Reserved;

function Statement({ children, space = "after" }) {
	return (
		<>
			{space === "after" ? null : <>&nbsp;</>}
			<span className="Code__statement">{children}</span>
			{space === "before" ? null : <>&nbsp;</>}
		</>
	);
}
Code.Statement = Statement;

function Property({ children }) {
	return <span className="Code__property">{children}</span>;
}
Code.Property = Property;

function Indent({ level = 1, children }) {
	return (
		<span className={`Code__indent Code__indent--level-${level}`}>
			{children}
		</span>
	);
}
Code.Indent = Indent;

function Comment({ children, type = "js" }) {
	return (
		<span className="Code__comment">
			{type === "js" ? <>&#47;&#47;&nbsp;</> : null}
			{type === "react" ? (
				<>
					<CurlyLeft reserved />
					&#47;*&nbsp;
				</>
			) : null}
			{children}
			{type === "react" ? (
				<>
					&nbsp;*&#47;
					<CurlyRight reserved />
				</>
			) : null}
		</span>
	);
}
Code.Comment = Comment;

function Css({ children, selector }) {
	return (
		<>
			{selector}
			<Block>{children}</Block>
		</>
	);
}
Code.Css = Css;

function CssProperty({ children, property }) {
	return (
		<KeyValue property={property} separator=";">
			{children}
		</KeyValue>
	);
}
Code.Css.Property = CssProperty;

function CssHsl({ h = "0", s = "0%", l = "0%" }) {
	return (
		<Code.Function.Call
			name="hsl"
			parameters={[
				<Code.Number>{h}</Code.Number>,
				<Code.Number>{s}</Code.Number>,
				<Code.Number>{l}</Code.Number>
			]}
		/>
	);
}
Code.Css.Hsl = CssHsl;

function CssVar({ values }) {
	return <Code.Function.Call name="var" parameters={values} />;
}
Code.Css.Var = CssVar;

export default Code;

// helper functions
function restProp(prop) {
	var rest = prop.substring(0, 3);

	if (rest === "...") {
		return (
			<>
				<Operator>...</Operator>
				{prop.split("...")[1]}
			</>
		);
	}

	return prop;
}

function componentProps(props) {
	return props?.map(prop => (
		<Fragment key={prop.property}>
			<Attribute property={prop.property}>{prop.value}</Attribute>
		</Fragment>
	));
}

function isComponent(tag) {
	return tag.charAt(0) === tag.charAt(0).toUpperCase();
}
