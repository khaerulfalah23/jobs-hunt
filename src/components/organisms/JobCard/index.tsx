import React, { FC } from "react";

import { JobType } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

interface JobCardProps extends JobType {}

const JobCard: FC<JobCardProps> = ({
	applicants,
	skills,
	image,
	jobType,
	location,
	name,
	needs,
	type,
	id,
}) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push("/detail/job/" + id)}
			className="w-full border p-6 border-border flex flex-row justify-between items-center"
		>
			<div className="flex flex-row items-start gap-6">
				<div>
					<Image src={image} alt={image} width={64} height={64} />
				</div>
				<div>
					<div className="text-lg font-semibold">{name}</div>
					<div className="text-sm text-muted-foreground mb-2">
						{type} . {location}
					</div>
					<div className="h-5 inline-flex gap-2 items-center">
						<Badge variant="secondary">{jobType}</Badge>
						<Separator orientation="vertical" />
						{skills.map((item: string, i: number) => (
							<Badge key={i}>{item}</Badge>
						))}
					</div>
				</div>
			</div>
			<div className="w-[200px]">
				<Button className="w-full" size="lg">
					Apply
				</Button>
				<Progress value={(applicants / needs) * 100} className="mt-2" />
				<div className="text-gray-500 text-sm text-center mt-2">
					<span className="text-black font-semibold">
						{applicants} applied
					</span>{" "}
					of {needs} capacity
				</div>
			</div>
		</div>
	);
};

export default JobCard;
