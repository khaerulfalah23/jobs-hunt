import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface JobItemProps extends JobType {}

const JobItem: FC<JobItemProps> = ({
	image,
	jobType,
	location,
	name,
	type,
	skills,
}) => {
	return (
		<div className="border border-border p-8 flex flex-row items-start gap-6 cursor-pointer">
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
					{skills.slice(0, 2).map((item: string, i: number) => (
						<Badge
							key={item + i}
							variant="outline"
							className="rounded border-primary bg-primary/5 text-primary"
						>
							{item}
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
};

export default JobItem;
