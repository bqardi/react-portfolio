import axios from "axios";
import Layout from "../layout/Layout";
import { useStoreContext } from "./Store";
import useForm from "../hooks/useForm";
import useContactValidation from "../hooks/useContactValidation";
import Button from "./Button";
import "./Form.scss";

function Form() {
	var { Translate, translate, setToast } = useStoreContext();
	var { changeHandler, submitHandler, resetForm, values, errors } = useForm(
		{
			name: "",
			email: "",
			message: ""
		},
		submit,
		useContactValidation
	);

	function submit(values) {
		axios.post("https://portfolio.bqardi.dk/mail", values).then(response => {
			if (response.data.message === "success") {
				setToast({ type: "success", message: translate("contact-email-sent") });
				resetForm();
			} else if (response.data.message === "error") {
				setToast({ type: "alert", message: translate("contact-email-failed") });
			}
		});
	}

	return (
		<form action="" className="Form" onSubmit={submitHandler} noValidate>
			<Layout.Flex column gap="8px">
				<Layout.Flex column gap="8px" className="Form__field">
					<label htmlFor="name">
						<Translate id="contact-name" />
					</label>
					<input
						id="name"
						name="name"
						type="text"
						value={values.name}
						onChange={changeHandler}
						className={
							errors.name ? "Form__input Form__input--error" : "Form__input"
						}
						required
					/>
					{errors.name && (
						<p className="Form__error">{<Translate id={errors.name} />}</p>
					)}
				</Layout.Flex>
				<Layout.Flex column gap="8px" className="Form__field">
					<label htmlFor="email">
						<Translate id="contact-email" />
					</label>
					<input
						id="email"
						name="email"
						type="email"
						value={values.email}
						onChange={changeHandler}
						className={
							errors.email ? "Form__input Form__input--error" : "Form__input"
						}
						required
					/>
					{errors.email && (
						<p className="Form__error">{<Translate id={errors.email} />}</p>
					)}
				</Layout.Flex>
				<label htmlFor="message">
					<Translate id="contact-message" />
				</label>
				<textarea
					name="message"
					id="message"
					rows="6"
					value={values.message}
					onChange={changeHandler}
				/>
				<Button style={{ marginTop: "1rem" }}>
					<Translate id="contact-submit" />
				</Button>
			</Layout.Flex>
		</form>
	);
}

export default Form;
