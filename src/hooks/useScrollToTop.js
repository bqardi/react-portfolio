import { useEffect, useState } from "react";

function useScrollToTop(){
	const [onTop, setOnTop] = useState(false);

	useEffect(() => {
		window.scrollTo({top: 0});
		setOnTop(true);
	}, []);

	return onTop;
}

export default useScrollToTop;