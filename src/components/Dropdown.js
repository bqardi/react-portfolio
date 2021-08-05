import { createContext, useContext, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import helper from "../hooks/helper";
import "./Dropdown.scss";

var DropdownContext = createContext();

function Dropdown({children, open, onChange, className, ...other}){
	var listRef = useRef();
	useClickOutside(listRef, onChange);

	return (
		<DropdownContext.Provider value={{open, onChange}}>
			<div ref={listRef} className={`Dropdown${helper.className(className)}`} {...other}>
				{children}
			</div>
		</DropdownContext.Provider>
	);
}

function List({children, className, header, ...other}){
	var {open} = useContext(DropdownContext);
	
	return open
		? <div className={`Dropdown__list${helper.className(className)}`} {...other}>
			<div className="Dropdown__heading">{header}</div>
			{children}
		</div> : null;
}
Dropdown.List = List;

function ListItem({children, className, ...other}){
	return (
		<div className={`Dropdown__item${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Dropdown.List.Item = ListItem;

function ListSpace({children, className, ...other}){
	return (
		<div className={`Dropdown__space${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Dropdown.List.Space = ListSpace;

function ListGroup({children, className, ...other}){
	return (
		<div className={`Dropdown__group${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Dropdown.List.Group = ListGroup;

function ListHeader({children, className, ...other}){
	return (
		<div className={`Dropdown__header${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Dropdown.List.Header = ListHeader;

export default Dropdown;