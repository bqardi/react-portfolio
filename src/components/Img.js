function Img({src, alt, className, borderRadius, ...other}){
	return (
		<img
			className={`Card__image${className ? " " + className : ""}${borderRadius ? " Card__image--borderRadius-" + borderRadius : ""}`}
			src={src}
			alt={alt}
			{...other}
		/>
	);
}

export default Img;