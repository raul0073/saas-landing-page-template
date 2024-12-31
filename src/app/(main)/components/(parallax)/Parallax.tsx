"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { TABLET_PARALLAX } from "./constants/labels";
export function TabletParallax() {
	return (
		<section className="parallax flex flex-col overflow-hidden px-4">
			<ContainerScroll
				titleComponent={
					<>
						<motion.h1
							initial={{ opacity: 0, y: -100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							viewport={{ once: true, amount: 1 }}
							className="text-4xl font-semibold bg-gradient-to-r relative lg:-top-4 from-gray-100 to-gray-300 bg-clip-text text-transparent">
							{TABLET_PARALLAX.HEADER}
							<br />
							<span className="text-4xl md:text-[6rem] font-bold mt-1 relative lg:top-4 bg-gradient-to-tl from-lime-400 to-green-600 bg-clip-text text-transparent">
								{TABLET_PARALLAX.SUB_HEADER}
							</span>
						</motion.h1>
					</>
				}>
				<Image
					src={`https://cdn.dribbble.com/userupload/16258223/file/original-cb915df0c18dca568e5ff844c689939e.png?resize=1600x1200&vertical=center`}
					alt="hero"
					height={720}
					width={1400}
					className="mx-auto rounded-2xl object-cover h-full w-[95%] p-1"
					draggable={false}
				/>
			</ContainerScroll>
		</section>
	);
}

// https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg?t=st=1733987797~exp=1733991397~hmac=1f5757b320abc5b303aad5ddbb9672b60e5f256de6384a1c8e25bcc8f24724f5&w=1380
