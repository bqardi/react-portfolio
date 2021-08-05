import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Accordion.scss";

var AccordionContext = createContext({});

function Accordion({children, options = {}, className, ...other}){
	var {
		transitionDuration = 300,
		allowAllClosed = true,
		allowMultipleOpen = true,
		debounceTimer = 100
	} = options;

	var [isActive, setIsActive] = useState(false);
	var [activeIndex, setActiveIndex] = useState(0);
	var [activationIndex, setActivationIndex] = useState(-1);
	var [allChildren, setAllChildren] = useState([]);
	var [items, setItems] = useState([]);
	var [openCount, setOpenCount] = useState(0);
	var [openIndex, setOpenIndex] = useState(0);

	useEffect(() => {
		var index = 0;
		var arr = children.length ? children : [children];
		setAllChildren(arr.map(child => {
			if (child.type.name === "Item") {
				var obj = {child, index};
				index++;
				return obj;
			}
			return child;
		}));
		// eslint-disable-next-line
	}, [children]);

	useEffect(() => {
		setItems(allChildren.filter(item => item.child?.type.name === "Item"));
	}, [allChildren]);

	function opened(value, index){
		if (!allowMultipleOpen && value) {
			setOpenIndex(index);
		}
		if (allowAllClosed) return;
		setOpenCount(prev => value ? prev + 1 : prev - 1);
	}

	return (
		<section className={`Accordion${isActive ? " Accordion--active" : ""}${className ? " " + className : ""}`} {...other}>
			{allChildren.map((item, index) =>
				item.child?.type.name === "Item"
					? <AccordionContext.Provider key={index} value={
							{
								index: item.index,
								items,
								transitionDuration,
								debounceTimer,
								setIsActive,
								activeIndex,
								setActiveIndex,
								activationIndex,
								setActivationIndex,
								openCount,
								opened,
								openIndex
							}
						}>
						{item.child}
					</AccordionContext.Provider>
					: item
			)}
		</section>
	);
}

function Item({title, open = false, icon, children, className, ...other}){
	var {
		index,
		items,
		transitionDuration,
		debounceTimer,
		setIsActive,
		activeIndex,
		setActiveIndex,
		activationIndex,
		setActivationIndex,
		openCount,
		opened,
		openIndex
	} = useContext(AccordionContext);

	var [contentHeight, setContentHeight] = useState(0);
	var [fullyClosed, setFullyClosed] = useState(false);
	var [isOpen, setIsOpen] = useState(false);
	
	var contentRef = useRef();
	var accordionRef = useRef();

	useEffect(() => {
    const debouncedHandleResize = debounce(resetContentHeight, debounceTimer);
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize);
		// eslint-disable-next-line
  }, []);

	useEffect(() => {
		if (openIndex !== index) {
			setIsOpen(false);
		}
	}, [openIndex, index]);

	useEffect(() => {
		opened(isOpen, index);
	}, [isOpen, opened, index]);
	
	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.offsetHeight);
		}
	}, [contentRef]);

	useEffect(() => {
		open && setIsOpen(open);
	}, [open]);

	useEffect(() => {
		if (accordionRef.current && activationIndex === index) {
			accordionRef.current.focus();
		}
	}, [activationIndex, index, accordionRef]);

	useLayoutEffect(() => {
		if (!isOpen) {
			setFullyClosed(false);
			var timeout = setTimeout(() => {
				setFullyClosed(true);
			}, transitionDuration);
		}
		return () => clearTimeout(timeout);
	}, [isOpen, transitionDuration]);

	function resetContentHeight(){
		setContentHeight(0);
		setContentHeight(contentRef.current.offsetHeight);
	}

	function keyHandler(e){
		if (e.key === " " || e.key === "Enter") {
			toggle();
			return;
		}
		setActivationIndex(-1);
		if (e.key === "ArrowUp") {
			e.preventDefault();
			if (activeIndex === 0) {
				setActivationIndex(items.length - 1);
			} else {
				setActivationIndex(activeIndex - 1);
			}
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			if (activeIndex === items.length - 1) {
				setActivationIndex(0);
			} else {
				setActivationIndex(activeIndex + 1);
			}
		}
		if (e.key === "Home") {
			setActivationIndex(0);
		}
		if (e.key === "End") {
			setActivationIndex(items.length - 1);
		}
	}

	var focusHandler = useCallback(() => {
		setIsActive(true);
		setActiveIndex(index);
	}, [index, setIsActive, setActiveIndex]);

	function toggle(){
		if (isOpen && openCount === 1) return;
		setIsOpen(prev => !prev);
	}

	return (
		<article className={`Accordion__item${isOpen ? " Accordion__item--open" : ""}${className ? " " + className : ""}`} {...other}>
			<header
				className="Accordion__summary"
				aria-expanded={isOpen}
				aria-controls={`content${index}`}
				id={`accordion${index}`}
				ref={accordionRef}
				tabIndex="0"
				onClick={toggle}
				onFocus={focusHandler}
				onBlur={() => setIsActive(false)}
				onKeyDown={keyHandler}
			>
				{title}
				<div className="Accordion__rotate">
					<svg viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
				</div>
			</header>
			<div
				id={`content${index}`}
				className="Accordion__content"
				style={contentHeight ?
					isOpen ? {
						visibility: "visible",
						height: contentHeight + "px",
						transition: "height " + transitionDuration / 1000 + "s, padding " + transitionDuration / 1000 + "s"
					}
					: {
						visibility: fullyClosed ? "hidden" : "visible",
						height: 0,
						paddingTop: 0,
						paddingBottom: 0,
						transition: "height " + transitionDuration / 1000 + "s, padding " + transitionDuration / 1000 + "s"
					} : null}
				role="region"
				aria-labelledby={`accordion${index}`}
			>
				<div ref={contentRef}>
					{children}
				</div>
			</div>
		</article>
	);
}
Accordion.Item = Item;

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default Accordion;