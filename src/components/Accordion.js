import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Accordion.scss";

const TRANSITION_DURATION = 300;

function Accordion({ id, title, open = false, children, className, ...other }) {
	var [contentHeight, setContentHeight] = useState(0);
	var [fullyClosed, setFullyClosed] = useState(false);
	var [isOpen, setIsOpen] = useState(false);

	var contentRef = useRef();
	var accordionRef = useRef();

	function resetContentHeight() {
		setContentHeight(0);
		setContentHeight(contentRef.current.offsetHeight);
	}

	function keyHandler(e) {
		if (e.key === " " || e.key === "Enter") {
			toggle();
			return;
		}
	}

	function toggle() {
		setIsOpen(prev => !prev);
	}

	useEffect(() => {
		var debouncedHandleResize = debounce(resetContentHeight, 100);
		window.addEventListener("resize", debouncedHandleResize);
		return () => window.removeEventListener("resize", debouncedHandleResize);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.offsetHeight);
		}
	}, [contentRef]);

	useEffect(() => {
		open && setIsOpen(open);
	}, [open]);

	useLayoutEffect(() => {
		if (!isOpen) {
			setFullyClosed(false);
			var timeout = setTimeout(() => {
				setFullyClosed(true);
			}, TRANSITION_DURATION);
		}
		return () => clearTimeout(timeout);
	}, [isOpen, TRANSITION_DURATION]);

	return (
		<div
			className={`Accordion${isOpen ? " Accordion--open" : ""}${
				className ? " " + className : ""
			}`}
			{...other}
		>
			<div
				className="Accordion__summary"
				aria-expanded={isOpen}
				aria-controls={`content-${id}`}
				id={`accordion-${id}`}
				ref={accordionRef}
				tabIndex="0"
				onClick={toggle}
				onKeyDown={keyHandler}
			>
				{title}
				<div className="Accordion__rotate">
					<svg viewBox="0 0 24 24">
						<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
					</svg>
				</div>
			</div>
			<div
				id={`content-${id}`}
				className="Accordion__content"
				style={
					contentHeight
						? isOpen
							? {
									visibility: "visible",
									height: contentHeight + "px",
									transition:
										"height " +
										TRANSITION_DURATION / 1000 +
										"s, padding " +
										TRANSITION_DURATION / 1000 +
										"s"
							  }
							: {
									visibility: fullyClosed ? "hidden" : "visible",
									height: 0,
									paddingTop: 0,
									paddingBottom: 0,
									transition:
										"height " +
										TRANSITION_DURATION / 1000 +
										"s, padding " +
										TRANSITION_DURATION / 1000 +
										"s"
							  }
						: null
				}
				role="region"
				aria-labelledby={`accordion-${id}`}
			>
				<div ref={contentRef}>{children}</div>
			</div>
		</div>
	);
}

function debounce(fn, ms) {
	let timer;
	return _ => {
		clearTimeout(timer);
		timer = setTimeout(_ => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

export default Accordion;
