import React, { useContext } from "react";
import storeData from "../../data/stores.json";
import { MenuContext } from "@/context/MenuContext";

export const SideBar = () => {
	const contextValue = useContext(MenuContext);

	const handleShopClick = (data: string) => {
		if (contextValue) {
			contextValue.setCurrentShop(data);
		}
	};

	return (
		<div className="bg-[#0047AB] text-center h-[100vh]">
			<h4 className="text-[#FFFFFF] text-[32px] p-4">Milk Tea Store</h4>
			{storeData.stores.map((data) => (
				<div
					className={`text-[24px] cursor-pointer ${
						contextValue?.currentShop === data.name ? "bg-[#6F8FAF]" : ""
					}`}
					onClick={() => handleShopClick(data.name)}
					key={data.id}
				>
					{data.name}
				</div>
			))}
		</div>
	);
};
