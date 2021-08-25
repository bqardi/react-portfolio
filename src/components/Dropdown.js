import { createContext, useContext, useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import helper from "../hooks/helper";
import "./Dropdown.scss";

var DropdownContext = createContext();

function Dropdown({ children, open, onOpen, className, ...other }) {
	var [activeIndex, setActiveIndex] = useState(-1);
	var [lastIndex, setLastIndex] = useState(0);
	var listRef = useRef();
	useClickOutside(listRef, escapeHandler);

	function keyDownHandler(e){
		if (e.key === "ArrowUp") {
			e.preventDefault();
			setActiveIndex(prev => prev <= 0 ? lastIndex : prev - 1);
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setActiveIndex(prev => prev === lastIndex ? 0 : prev + 1);
		}
		if (e.key === "Tab") {
			if (e.shiftKey) {
				setActiveIndex(prev => prev <= 0 ? -1 : prev - 1);
			} else {
				setActiveIndex(prev => prev === lastIndex ? -1 : prev + 1);
			}
		}
	}
	function keyUpHandler(e){
		if (e.key === "Escape") {
			escapeHandler(false);
		}
	}
	function escapeHandler(isOpen){
		setActiveIndex(-1);
		onOpen && onOpen(isOpen);
	}

	useEffect(() => {
		if (activeIndex === -1) {
			escapeHandler(false);
		}
	}, [activeIndex]);

	return (
		<DropdownContext.Provider value={{
			open,
			activeIndex,
			lastIndex,
			setLastIndex
		}}>
			<div
				ref={listRef}
				className={`Dropdown${helper.className(className)}`}
				onKeyUp={keyUpHandler}
				onKeyDown={keyDownHandler}
				tabIndex="-1"
				{...other}
			>
				{children}
			</div>
		</DropdownContext.Provider>
	);
}

function List({ children, className, header, ...other }) {
	var { open } = useContext(DropdownContext);

	return open ? (
		<div className={`Dropdown__list${helper.className(className)}`} {...other}>
			<div className="Dropdown__heading">{header}</div>
			{children}
		</div>
	) : null;
}
Dropdown.List = List;

function ListItem({ children, className, activeClass="Dropdown__item--active", index, ...other }) {
	var { activeIndex, lastIndex, setLastIndex } = useContext(DropdownContext);

	var itemRef = useRef();

	useEffect(() => {
		if (index > lastIndex) {
			setLastIndex(index);
		}
	}, [index, lastIndex]);

	useEffect(() => {
		if (itemRef.current) {
			if (index === activeIndex) {
				itemRef.current.focus();
			}
		}
	}, [itemRef, index, activeIndex]);

	return (
		<div
			ref={itemRef}
			className={`Dropdown__item${helper.className(className)}`}
			tabIndex="-1"
			{...other}
		>
			{children}
		</div>
	);
}
Dropdown.List.Item = ListItem;

function ListSpace({ children, className, ...other }) {
	return (
		<div className={`Dropdown__space${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Dropdown.List.Space = ListSpace;

function ListGroup({ children, className, ...other }) {
	return (
		<div className={`Dropdown__group${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Dropdown.List.Group = ListGroup;

function ListHeader({ children, className, ...other }) {
	return (
		<div
			className={`Dropdown__header${helper.className(className)}`}
			{...other}
		>
			{children}
		</div>
	);
}
Dropdown.List.Header = ListHeader;

export default Dropdown;
