"use client";
import { IntroCard } from "@/app/(main)/components/(features)/components/IntroCardIcon";
import { motion } from "framer-motion";
import { featuresCards } from "./constants/data";
import { FEATURES } from "./constants/labels";

export default function Features() {
	return (
		<section className="features w-full h-fit py-24 px-4 relative" id="about">
			<div className="container mx-auto">
				<div className="mb-24 overflow-hidden">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						className="w-full text-center overflow-clip text-white text-4xl  md:text-5xl max-w-2xl mx-auto">
						{FEATURES.HEADER}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						className="pt-8 text-lg w-full text-center text-white/70">
						{FEATURES.SUB_HEADER}
					</motion.p>
				</div>

				{/* features cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-20 my-20 md:my-40 px-4">
					<div className="absolute w-96 h-96 -left-[20rem] -top-48 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-20"></div>
					<div className="absolute w-64 h-64 right-0  -bottom-64 lg:-bottom-24 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl lg:hidden overflow-x-clip rounded-full opacity-20"></div>
					{featuresCards.features.map((a, i: number) => {
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
