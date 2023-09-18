import { MainLayout } from "@/components/layout/MainLayout";
import { SideBar } from "@/components/layout/SideBar";
import React from "react";

export const HomePage = () => {
	return (
		<div className="" style={{ display: "flex" }}>
			<div className="w-[20%]">
				<SideBar />
			</div>
			<div className="w-[80%]">
				<MainLayout />
			</div>
		</div>
	);
};
