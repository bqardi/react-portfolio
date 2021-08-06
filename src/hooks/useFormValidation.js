function useFormValidation() {
	function isRequired(value) {
		return !!value;
	}
	function isEmail(value) {
		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			value
		);
	}
	function min(value, number) {
		return value.length >= number;
	}
	function max(value, number) {
		return value.length <= number;
	}

	return {
		isRequired,
		isEmail,
		min,
		max
	};
}

export default useFormValidation;
