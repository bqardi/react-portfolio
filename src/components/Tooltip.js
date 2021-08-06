import { createContext, useContext, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Portal from "./Portal";
import "./Tooltip.scss";

var TooltipContext = createContext();

function Tooltip({
	children,
	clickToggle,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onHover,
	contentIsBlock,
	fold = 50,
	...other
}) {
	var [hover, setHover] = useState(false);
	var [clicked, setClicked] = useState(false);
	var posRef = useRef();
	useClickOutside(posRef, () => setClicked(false));

	var Tag = contentIsBlock ? "div" : "span";

	function mouseEnter(e) {
		setHover(true);
		onMouseEnter && onMouseEnter(e);
		onHover && onHover(true);
	}

	function mouseLeave(e) {
		setHover(false);
		onMouseLeave && onMouseLeave(e);
		onHover && onHover(false);
	}

	function clickHandler(e) {
		clickToggle && setClicked(prev => !prev);
		onClick && onClick(e);
		setHover(false);
	}

	return (
		<TooltipContext.Provider
			value={{
				hover,
				setHover,
				clicked,
				setClicked,
				fold,
				rect: posRef.current?.getBoundingClientRect()
			}}
		>
			<Tag
				ref={posRef}
				onMouseEnter={mouseEnter}
				onMouseLeave={mouseLeave}
				onFocus={mouseEnter}
				onBlur={mouseLeave}
				onClick={clickHandler}
				{...other}
			>
				{children}
			</Tag>
		</TooltipContext.Provider>
	);
}

function Item({
	children,
	className,
	classOnHover = "js-hover",
	offset = 0,
	margin = 20,
	transition = 150,
	...other
}) {
	var { hover, clicked, rect, fold } = useContext(TooltipContext);
	var tooltipRef = useRef();

	if (!children) return null;

	function above() {
		var pos = rect?.bottom + offset;
		if (!pos) {
			return 0;
		}
		if (rect?.top > (window.innerHeight * fold) / 100) {
			pos =
				rect?.top - tooltipRef.current?.getBoundingClientRect().height - offset;
		}
		return `${pos}px`;
	}

	function left() {
		var tooltipWidth = tooltipRef.current?.getBoundingClientRect().width;
		var pos = rect?.left + rect?.width / 2 - tooltipWidth / 2;
		if (!pos) {
			return 0;
		}
		if (pos < margin) {
			pos = margin;
		}
		if (pos + tooltipWidth + margin > window.innerWidth) {
			pos = window.innerWidth - tooltipWidth - margin;
		}
		return `${pos}px`;
	}

	return (
		<Portal>
			<span
				ref={tooltipRef}
				className={
					clicked || hover
						? className
							? className + " " + classOnHover
							: classOnHover
						: className || ""
				}
				{...other}
				style={{
					position: "fixed",
					zIndex: "1",
					top: above(),
					left: left(),
					opacity: clicked || hover ? 1 : 0,
					visibility: clicked || hover ? "visible" : "hidden",
					transition: `opacity ${transition / 1000}s, visibility ${
						transition / 1000
					}s`
				}}
			>
				{children}
			</span>
		</Portal>
	);
}
Tooltip.Item = Item;

export default Tooltip;
