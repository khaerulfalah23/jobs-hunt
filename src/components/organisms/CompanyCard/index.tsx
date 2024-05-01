import { Badge } from "@/components/ui/badge";
import { CompanyType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface CompanyCardProps extends CompanyType {}

const CompanyCard: FC<CompanyCardProps> = ({
	industry,
	description,
	image,
	name,
	totalJobs,
	id
}) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push("/detail/company/" + id)}
			className="border border-border p-6 cursor-pointer"
		>
			<div className="flex flex-row justify-between items-start">
				<Image src={image} alt={image} width={66} height={66} />
				<Badge>{totalJobs} Jobs</Badge>
			</div>
			<div className="my-4">
				<div className="text-lg font-semibold mb-2">{name}</div>
				<div
					className="line-clamp-3 text-sm text-muted-foreground"
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
			</div>
			<div className="space-x-2">
				<Badge variant="outline">{industry}</Badge>
			</div>
		</div>
	);
};

export default CompanyCard;
