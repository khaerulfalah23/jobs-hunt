import { Input } from "@/components/ui/input";
import React, { FC } from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
	return (
		<>
			<div className="mt-6 p-4 bg-background shadow-md inline-flex items-center gap-4 relative w-max z-10">
				<div className="inline-flex gap-3 items-center">
					<AiOutlineSearch className="w-6 h-6" />
					<Input
						className="py-8 w-[300px] border-none"
						placeholder="Job Title or keyword"
					/>
				</div>
				<div className="inline-flex gap-3 items-center">
					<HiOutlineLocationMarker className="w-6 h-6" />
					<Select>
						<SelectTrigger className="w-[300px] border-none text-gray-500 outline-none py-8">
							<SelectValue placeholder="Select a location" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					<Button className="py-8 px-10 text-lg">
						Search my job
					</Button>
				</div>
			</div>
			<div>
				<div className="text-muted-foreground mt-3">
					Popular : UI Designer, UX Researcher, Android, Admin
				</div>
			</div>
		</>
	);
};

export default FormSearch;
