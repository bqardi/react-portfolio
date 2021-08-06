import { createContext, useContext, useEffect, useState } from "react";
import "./ButtonGroup.scss";

var ButtonGroupContext = createContext();

function ButtonGroup({ children, onSelected, ...other }) {
	var [selected, setSelected] = useState("");

	if (!children) {
		console.warn("You MUST add at least two buttons to a ButtonGroup.");
		return null;
	}

	if (!children.length) {
		console.warn(
			"You MUST add more than one button to a ButtonGroup.\nIf you only need one button, use the Button component instead."
		);
		return children;
	}

	return (
		<ButtonGroupContext.Provider value={{ selected, setSelected, onSelected }}>
			<div className="ButtonGroup" role="group" {...other}>
				{children}
			</div>
		</ButtonGroupContext.Provider>
	);
}

function Button({ children, defaultSelected, id, onClick, ...other }) {
	var { selected, setSelected, onSelected } = useContext(ButtonGroupContext);

	function clickHandler(e) {
		onClick && onClick(e);
		setSelected(id);
		onSelected && onSelected(id);
	}

	useEffect(() => {
		if (defaultSelected) {
			setSelected(id);
		}
	}, [defaultSelected, setSelected, id]);

	if (!id) {
		console.warn(
			"You MUST provide an id for the ButtonGroup.Button!\n(one or more ButtonGroup.Button(s) was ignored)."
		);
		return null;
	}

	return (
		<button
			className={`ButtonGroup__button${
				selected === id ? " ButtonGroup__button--selected" : ""
			}`}
			onClick={clickHandler}
			{...other}
		>
			{children}
		</button>
	);
}
ButtonGroup.Button = Button;

export default ButtonGroup;
