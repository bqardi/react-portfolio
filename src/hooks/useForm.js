import { useEffect, useState } from "react";

function useForm(initial, callback, validate){
	var [errors, setErrors] = useState({});
	var [values, setValues] = useState(initial);
	var [isSubmitting, setIsSubmitting] = useState(false);

	function changeHandler(e){
		var {name, value} = e.target;
		setValues(prev => ({
			...prev,
			[name]: value
		}));
		setErrors(prev => {
			var obj = {...prev};
			delete obj[name];
			return obj;
		});
	}

	function submitHandler(e){
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	}

	useEffect(() => {
		if (isSubmitting && Object.keys(errors).length === 0) {
			callback(values);
		}
		setIsSubmitting(false);
		// eslint-disable-next-line
	}, [errors]);

	return {
		values,
		errors,
		changeHandler,
		submitHandler
	};
}

export default useForm;