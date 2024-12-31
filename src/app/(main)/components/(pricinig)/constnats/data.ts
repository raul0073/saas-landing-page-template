export type PlanType = {
    name: string;
    forWho: string;
    price: number;
    features: string[]; 
}

export const plans = [
	{
		name: "Basic",
		forWho: "Individuals or freelancers",
		price: 9,
		features: ["Up to 2 users", "5 projects", "1 website", "Email support"],
	},
	{
		name: "Pro",
		forWho: "Small to medium teams",
		price: 29,
		features: [
			"Up to 20 users",
			"50 projects",
			"5 websites",
			"Priority email support",
		],
	},
	{
		name: "Master",
		forWho: "Large enterprises",
		price: 59,
		features: [
			"Unlimited users",
			"Unlimited projects",
			"Unlimited websites",
			"Dedicated email support",
		],
	},
];
