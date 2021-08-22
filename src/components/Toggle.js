import { createContext, useContext, useState } from "react";

var ToggleContext = createContext();

function Toggle({
	id,
	isOn = false,
	callback,
	children,
	className,
	classOn = "on",
	rounded,
	handleSize = 24,
	trackHeight = 12,
	trackWidth = 36,
	...other
}) {
	var [on, setOn] = useState(isOn);
	var trackOffset = trackHeight / 2 - handleSize / 2;

	function changeHandler() {
		setOn(!on);
		callback && callback(!on);
	}

	return (
		<ToggleContext.Provider
			value={{ on, rounded, handleSize, trackHeight, trackWidth, trackOffset }}
		>
			<label
				tabIndex="0"
				className={
					className
						? on
							? className + " " + classOn
							: className
						: on
						? classOn
						: ""
				}
				{...other}
			>
				<input
					type="checkbox"
					name={id}
					id={id}
					onChange={changeHandler}
					style={{ display: "none" }}
				/>
				{children}
			</label>
		</ToggleContext.Provider>
	);
}

function Handle({ children, transitionDuration = 0, ...other }) {
	var { on, rounded, handleSize, trackWidth, trackOffset } = useContext(
		ToggleContext
	);
	return (
		<span
			style={{
				borderRadius: rounded ? "50%" : null,
				transition: transitionDuration
					? `all ${transitionDuration / 1000}s`
					: null,
				position: "absolute",
				top: trackOffset + "px",
				left: trackOffset + "px",
				width: handleSize + "px",
				height: handleSize + "px",
				boxSizing: "border-box",
				transform: on
					? `translate(${trackWidth - handleSize - trackOffset * 2}px)`
					: "translate(0)"
			}}
			{...other}
		>
			{children}
		</span>
	);
}
Toggle.Handle = Handle;

function Track({ children, ...other }) {
	var {
		rounded,
		handleSize,
		trackHeight,
		trackWidth,
		trackOffset
	} = useContext(ToggleContext);
	return (
		<span
			style={{
				position: "relative",
				display: "inline-block",
				width: trackWidth + "px",
				height: trackHeight + "px",
				boxSizing: "border-box",
				borderRadius: rounded
					? (handleSize + trackOffset * 2) / 2 + "px"
					: null,
				margin: trackOffset > 0 ? 0 : trackOffset * -1
			}}
			{...other}
		>
			{children}
		</span>
	);
}
Toggle.Track = Track;

export default Toggle;
