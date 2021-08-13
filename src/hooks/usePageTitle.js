import { useEffect } from "react";

function usePageTitle(title) {
	useEffect(() => {
		document.title = "Sunes portfolio" + (title ? " | " + title : "");
	}, [title]);
}

export default usePageTitle;
