import { createContext, useState, Dispatch, SetStateAction } from "react";

interface MenuContextProps {
	currentShop: any;
	setCurrentShop: Dispatch<SetStateAction<any>>;
}

export const MenuContext = createContext<MenuContextProps | null>(null);

export const MenuContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [currentShop, setCurrentShop] = useState<any>(null);

	const contextValue: MenuContextProps = {
		currentShop,
		setCurrentShop,
	};

	return (
		<MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
	);
};
