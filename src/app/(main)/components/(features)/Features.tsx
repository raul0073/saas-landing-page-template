"use client";
import IntroCardIcon from "@/components/IntroCardIcon";
import { motion } from "framer-motion";
import {
	Database,
	LayoutDashboard,
	Moon,
	PieChart,
	Server,
	Users,
} from "lucide-react";
import { ReactNode } from "react";
const iconClassName = "w-5 h-auto text-lime-400 saturate-200";
export const amazingAnalytics = {
	tagline: "Amazing Analytics you will never ever use.",
	description:
		"Just like any other analytics tool, you will never use all the features. But we have them all just in case you needed some of them.",
	features: [
		{
			title: "Charts, graphs, and everything at your fingertips",
			description:
				"Bar graphs, Pie Charts, Line graphs, Area graphs, you name it. We have it. And if we don't, we will add it for you.",
			icon: <PieChart className={iconClassName} />, // Example icon
		},
		{
			title: "Create teams. Invite colleagues.",
			description:
				"Creation of teams is a breeze. Invite your colleagues to Render Metrics Labs so that they can bang their head against a pie chart too.",
			icon: <Users className={iconClassName} />, // Example icon
		},
		{
			title: "Self-host your analytics. Own your mistakes.",
			description:
				"With RMS, you can self-host in case you don't wish to pay us or see us grow to a billion-dollar company.",
			icon: <Database className={iconClassName} />, // Example icon
		},
		{
			title: "We don't track you. We don't sell your data.",
			description:
				"Lol. We don't even have a database. It is all written on papers here somewhere. wink wink.",
			icon: <Server className={iconClassName} />, // Example icon
		},
		{
			title: "Dark mode is here!",
			description:
				"Dark mode is as necessary to a developer as a cup of coffee. We have both. No coffee though.",
			icon: <Moon className={iconClassName} />, // Example icon
		},
		{
			title: "Customizable Dashboards. Tailored for You.",
			description:
				"Design dashboards that suit your needs. Drag, drop, resize, and configure every widget to match your workflow and style.",
			icon: <LayoutDashboard className={iconClassName} />, // Example icon
		},
	],
};

export default function Features() {
	return (
		<section
			className="features w-full h-fit py-24 px-4 relative"
			id="about">
			<div className="container mx-auto">
				<div className="mb-24 overflow-hidden">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						className="w-full text-center overflow-clip text-white text-4xl  md:text-5xl max-w-2xl mx-auto">
						Your analytics need in one place.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						className="pt-8 text-lg w-full text-center text-white/70">
						More features, Less bills.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-20 my-20 md:my-40 px-4">
					<div className="absolute w-96 h-96 -left-[20rem] -top-48 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-20"></div>
					{/* <div className="absolute w-64 h-64 right-0  -bottom-64 lg:-bottom-24 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl lg:hidden overflow-x-clip rounded-full opacity-20"></div> */}
					{amazingAnalytics.features.map((a, i) => {
						return (
							<IntroCard
								key={i}
								title={a.title}
								icon={a.icon}
								description={a.description}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

type IntroCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
};

export function IntroCard({ icon, title, description }: IntroCardProps) {
	return (
		<div className="introCard flex flex-col px-4 relative">
			<IntroCardIcon icon={icon} />

			<div className="py-3 space-y-4 mt-8">
				<h3 className="text-white text-2xl">{title}</h3>
				<p className="text-white/85 text-sm  mt-8 leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}
