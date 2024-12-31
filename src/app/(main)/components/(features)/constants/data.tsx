import {
	Database,
	LayoutDashboard,
	Moon,
	PieChart,
	Server,
	Users,
} from "lucide-react";
import { ReactNode } from "react";

type FeatureCardType = {
	description: string;
	icon: ReactNode;
	title: string;
};
interface FeatureCardsType {
	tagline: string;
	description: string;
	features: FeatureCardType[];
}
const iconClassName = "w-5 h-auto text-lime-400 saturate-200";



export const featuresCards: FeatureCardsType = {
	tagline: "Amazing Analytics you will never ever use.",
	description:
		"Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.",
	features: [
		{
			title: "Charts, graphs, and everything at your fingertips",
			description:
				"Bar graphs, Pie Charts, Line graphs, Area graphs, you name it. We have it. And if we don't, we will add it for you.",
			icon: <PieChart className={iconClassName} />,
		},
		{
			title: "Create teams. Invite colleagues.",
			description:
				"Creation of teams is a breeze. Invite your colleagues to Render Metrics Labs so that they can bang their head against a pie chart too.",
			icon: <Users className={iconClassName} />,
		},
		{
			title: "Self-host your analytics. Own your mistakes.",
			description:
				"With RMS, you can self-host in case you don't wish to pay us or see us grow to a billion-dollar company.",
			icon: <Database className={iconClassName} />,
		},
		{
			title: "We don't track you. We don't sell your data.",
			description:
				"Lol. We don't even have a database. It is all written on papers here somewhere. wink wink.",
			icon: <Server className={iconClassName} />,
		},
		{
			title: "Dark mode is here!",
			description:
				"Dark mode is as necessary to a developer as a cup of coffee. We have both. No coffee though.",
			icon: <Moon className={iconClassName} />,
		},
		{
			title: "Customizable Dashboards. Tailored for You.",
			description:
				"Design dashboards that suit your needs. Drag, drop, resize, and configure every widget to match your workflow and style.",
			icon: <LayoutDashboard className={iconClassName} />,
		},
	],
};
