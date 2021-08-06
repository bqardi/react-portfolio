import { useCallback, useEffect } from "react";

function useClickOutside(ref, callback) {
	var closeCallback = useCallback(callback, [callback]);

	useEffect(() => {
		document.addEventListener("click", close);
		function close(e) {
			if (ref.current && !ref.current.contains(e.target)) {
				closeCallback(false);
			}
		}
		return () => document.removeEventListener("click", close);
	}, [closeCallback, ref]);

	return null;
}

export default useClickOutside;
