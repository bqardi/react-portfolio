import "./Card.scss";
import { lazy, Suspense } from "react";
import Loading from "./Loading";
import helper from "../hooks/helper";
const Img = lazy(() => import("./Img"));

function Card({children, className, ...other}){
	return (
		<article className={`Card${helper.className(className)}`} {...other}>
			{children}
		</article>
	);
}

// function Image({src, alt, className, borderRadius, ...other}){
// 	return (
// 		<img className={`Card__image${helper.className(className)}${borderRadius ? " Card__image--borderRadius-" + borderRadius : ""}`} src={src} alt={alt} {...other} />
// 	);
// }
// Card.Image = Image;

function Image({src, alt, className, borderRadius, ...other}){
	return (
		<Suspense fallback={
			<div className="Card__loading">
				<Loading size={64} />
			</div>
		}>
			<Img src={src} alt={alt} className={className} borderRadius={borderRadius} {...other} />
		</Suspense>
	);
}
Card.Image = Image;

function Body({children, className, modifiers, ...other}){
	return (
		<div className={`Card__body${helper.modifiers("Card__body", modifiers)}${helper.className(className)}`} {...other}>
			{children}
		</div>
	);
}
Card.Body = Body;

function Absolute({children, className, style, top, left, right, bottom, ...other}){
	return (
		<div
			className={`Card__absolute${helper.className(className)}`}
			style={{
				...style,
				top, left, right, bottom
			}}
			{...other}
		>
			{children}
		</div>
	);
}
Card.Absolute = Absolute;

export default Card;