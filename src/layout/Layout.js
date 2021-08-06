import helper from "../hooks/helper";
import "./Layout.scss";

function Layout({ children, modifiers }) {
	return (
		<section className={`Layout${helper.modifiers("Layout", modifiers)}`}>
			{children}
		</section>
	);
}

function Cell({ children, modifiers }) {
	return (
		<div
			className={`Layout__cell${helper.modifiers("Layout__cell", modifiers)}`}
		>
			{children}
		</div>
	);
}
Layout.Cell = Cell;

function Row({ children }) {
	return <div className="Layout__row">{children}</div>;
}
Layout.Row = Row;

function Flex({
	children,
	center,
	justify,
	align,
	column,
	wrap,
	gap,
	style,
	...other
}) {
	return (
		<div
			style={{
				...style,
				display: "flex",
				justifyContent: center ? "center" : justify,
				alignItems: center ? "center" : align,
				flexDirection: column ? "column" : null,
				flexWrap: wrap ? "wrap" : null,
				gap
			}}
			{...other}
		>
			{children}
		</div>
	);
}
Layout.Flex = Flex;

function Grid({ children, modifiers }) {
	return (
		<div
			className={`Layout__grid${helper.modifiers("Layout__grid", modifiers)}`}
		>
			{children}
		</div>
	);
}
Layout.Grid = Grid;

function Dashboard({ children, modifiers }) {
	return (
		<div
			className={`Layout__dashboard${helper.modifiers(
				"Layout__dashboard",
				modifiers
			)}`}
		>
			{children}
		</div>
	);
}
Layout.Grid.Dashboard = Dashboard;

function Span({ children, modifiers }) {
	return (
		<div
			className={`Layout__span${helper.modifiers("Layout__span", modifiers)}`}
		>
			{children}
		</div>
	);
}
Layout.Grid.Span = Span;

export default Layout;
