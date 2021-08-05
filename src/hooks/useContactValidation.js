import useFormValidation from "./useFormValidation";

function useValidate(values){
	var {isRequired, isEmail} = useFormValidation();
	
	var errors = {};
	var {name, email} = values;

	if (!isEmail(email)) {
		errors.email = "contact-email-wrong";
	}
	if (!isRequired(name)) {
		errors.name = "contact-name-required";
	}
	if (!isRequired(email)) {
		errors.email = "contact-email-required";
	}
	
	return errors;
}

export default useValidate;