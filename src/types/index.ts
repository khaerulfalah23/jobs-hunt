export type categoryJobType = {
	id: string;
	name: string;
	totalJobs: number;
};

export type JobType = {
	id: string;
	image: string;
	jobType: string;
	name: string;
	type: string;
	location: string;
	desc: string;
	category: categoryJobType;
	needs: number;
	applicants: number;
	skills: string[];
};