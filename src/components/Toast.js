import Icon from "./Icon";
import Button from "./Button";
import "./Toast.scss";
import { useStoreContext } from "./Store";
import { useEffect, useRef } from "react";

function Toast({toast}){
	var {setToast} = useStoreContext();

	var timerRef = useRef();

	var type;

	switch (toast.type) {
		case "success":
			type = "Check";
			break;
		case "alert":
			type = "Alert";
			break;
	
		default:
			break;
	}

	function resetToast(){
		clearTimeout(timerRef.current);
		setToast({});
	}

	useEffect(() => {
		if (toast.type) {
			timerRef.current = setTimeout(() => {
				setToast({});
			}, 5000);
		}
		return () => clearTimeout(timerRef.current);
	}, [toast]);

	if (!toast.type) return null;
	
	return (
		<div className={`Toast Toast--${toast.type}`}>
			<Icon name={type} className="Toast__icon" />
			<p className="Toast__message">
				{toast.message}
			</p>
			<Button onClick={resetToast} variation="icon" className="Toast__close">
				<Icon.Close className="Toast__icon" />
			</Button>
		</div>
	);
}

export default Toast;