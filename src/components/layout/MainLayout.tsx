import { MenuContext } from "@/context/MenuContext";
import React, { useContext } from "react";

export const MainLayout = () => {
	const contextValue = useContext(MenuContext);
	return (
		<div className="bg-[#cccccc] h-[100vh] text-center">
			<div className="text-[#0047AB] text-[40px] font-[700] p-4">
				{contextValue?.currentShop + " Menu"}
			</div>
			<div className="flex justify-evenly items-center">
				<div>
					<button className="bg-[#0047AB] text-[#FFFFFF] px-12 py-2">
						Filter
					</button>
				</div>
				<div className="flex">
					<div className="text-[#0047AB] font-[600]">Sort By</div>
					<select>
						<option value="name-asc">Name (Asc)</option>
						<option value="name-dsc">Name (Dsc)</option>
						<option value="price-asc">Price (Asc)</option>
						<option value="price-dsc">Price (Dsc)</option>
					</select>
				</div>
			</div>
		</div>
	);
};
