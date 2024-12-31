"use client";
import { SERVICES } from "@/app/(main)/components/(services)/constants/labels";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Tag from "../../app/(main)/components/(features)/components/Tag";
interface TimelineEntry {
	title: ReactNode;
	content: React.ReactNode;
}

export const ServicesTimeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			className="w-full bg-transparent font-sans md:px-10"
			ref={containerRef}>
			<div className="max-w-7xl mx-auto py-20 px-2 md:px-8 lg:px-10">
				<motion.h2
					className="text-4xl  md:text-5xl max-w-2xl mb-4 text-white overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}>
					{SERVICES.HEADER}
				</motion.h2>
				<motion.div
					className="flex gap-2 mb-4"
					initial={{ opacity: 0, filter: "blur(10px)" }}
					whileInView={{ opacity: 1, filter: "blur(0)" }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}>
					<Tag text="Support" />
					<Tag text="Guidance" />
					<Tag text="Flexibility" />
				</motion.div>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className=" text-sm md:text-base max-w-sm bg-gradient-to-r from-slate-500 to-gray-400 bg-clip-text text-transparent ">
					{SERVICES.SUB_HEADER} <br />
					{SERVICES.SUB_HEADER2}
				</motion.p>
			</div>

		{/* SERVICE CONTENT */}
			<div ref={ref} className="relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex justify-start pt-10 md:pt-40 md:gap-10">
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
								<div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
							</div>
							<h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
								{item.title}
							</h3>
						</div>

						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-lime-400 via-lime-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
