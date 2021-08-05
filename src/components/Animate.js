import { useReducer, useRef } from "react";
import "./Animate.scss";

const INITIAL_STATE = {
	initial: true,
	started: false,
	running: false,
	inBegin: false,
	inEnd: false,
	outBegin: false,
	outEnd: false,
}

const RESET = "reset";
const IN_BEGIN = "in_begin";
const IN_END = "in_end";
const OUT_BEGIN = "out_begin";
const OUT_END = "out_end";

function reducer(state, action) {
	switch (action.type) {
		case RESET:
			return INITIAL_STATE;
		case IN_BEGIN:
			return {
				...INITIAL_STATE,
				inBegin: true,
				started: true,
				initial: false,
				running: true
			};
		case IN_END:
			return {
				...INITIAL_STATE,
				inEnd: true,
				started: true,
				initial: false
			};
		case OUT_BEGIN:
			return {
				...INITIAL_STATE,
				outBegin: true,
				initial: false,
				running: true
			};
		case OUT_END:
			return {
				...INITIAL_STATE,
				outEnd: true,
			};
	
		default:
			return state;
	}
}

export function useAnimate(durationIn, durationOut=durationIn){
	var [{
		initial,
		started,
		running,
		inBegin,
		inEnd,
		outBegin,
		outEnd
	}, dispatch] = useReducer(reducer, INITIAL_STATE);

	var startedTimoutRef = useRef();
	var endTimoutRef = useRef();

	function begin(){
		if (started)  return;

		clearTimeout(startedTimoutRef.current);
		clearTimeout(endTimoutRef.current);
		dispatch({type: IN_BEGIN});
		startedTimoutRef.current = setTimeout(() => {
			dispatch({type: IN_END});
		}, durationIn);
	}

	function end(){
		if (!started) return;

		clearTimeout(startedTimoutRef.current);
		clearTimeout(endTimoutRef.current);
		dispatch({type: OUT_BEGIN});
		endTimoutRef.current = setTimeout(() => {
			dispatch({type: OUT_END});
		}, durationOut);
	}

	function toggle(){
		begin();
		end();
	}

	return [
		{initial, started, running, durationIn, durationOut},
		{begin, end, toggle},
		{initial, started, running, inBegin, inEnd, outBegin, outEnd}
	];
}

export function Animate({
		children,
		tag="div",
		style,
		className="Animate",
		modifierIn="in",
		modifierOut="out",
		controller,
		...other
	}){

	if (controller === undefined) {
		throw new Error("A controller must be provided to animate component (<Animate controller={controller}>)!")
	}

	var CustomTag = tag;
	
	return (
		<CustomTag
			className={`${className}${!controller.initial ? controller.started ? " " + className + "--" + modifierIn : " " + className + "--" + modifierOut : ""}`}
			style={{
				...style,
				animationFillMode: !controller.initial && controller.started ? "forwards" : null,
				animationDuration: controller.started ? controller.durationIn / 1000 + "s" : controller.durationOut / 1000 + "s"
			}}
			{...other}
		>
			{children}
		</CustomTag>
	);
}

export default Animate;