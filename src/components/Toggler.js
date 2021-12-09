import Toggle from "./Toggle";
import "./Toggler.scss";

function Toggler({ id, label, isOn, callback, ...other }) {
	return (
		<Toggle
			id={id}
			isOn={isOn}
			rounded
			className="Toggler"
			classOn="Toggler--on"
			callback={callback}
			{...other}
		>
			<span className="Toggler__label">{label}</span>
			<Toggle.Track className="Toggler__track">
				<Toggle.Handle className="Toggler__handle" />
			</Toggle.Track>
		</Toggle>
	);
}

export default Toggler;
