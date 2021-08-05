import { createContext, useContext } from "react";
var StoreContext = createContext();

export function useStoreContext(){
	return useContext(StoreContext);
}

function Store({children, value}){
	return (
		<StoreContext.Provider value={value}>
			{children}
		</StoreContext.Provider>
	);
}

export default Store;