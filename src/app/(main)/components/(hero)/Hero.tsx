"use client";
import underline from "@/../public/images/svgs/needle-underline.svg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HERO } from "./constants/labels";
const transition = { duration: 0.6, ease: "easeInOut" };

export function Hero() {
	return (
		<section className="hero pt-24 px-4 pb-24">
			<div className="container mx-auto relative">
				<div className="flex justify-center ml-[40%] promo">
					<div className="inline-flex py-1 text-xs md:text-sm md:px-4 px-2 bg-gradient-to-t from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold capitalize">
						{HERO.SPECIAL_OFFER}
					</div>
				</div>

				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={transition}
					viewport={{ once: true }}
					className=" w-full text-center  d bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50  text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans py-2  relative z-20 font-bold tracking-tight mt-6">
					{HERO.HEADER} <br />
					{HERO.HEADER2}{" "}
					<span className="relative">
						<span className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50">
							{HERO.PRO}.
						</span>
						<motion.span
							initial={{ fill: "transparent", opacity: 0, width: "60%" }}
							whileInView={{ fill: "lime-400", opacity: 1, width: "100%" }}
							transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
							viewport={{ once: true }}
							className="absolute w-full h-4 left-0 top-full -translate-y-1/2 
						bg-gradient-to-r from-primary -skew-y-4 to-lime-400 z-50"
							style={{
								maskImage: `url(${underline.src})`,
								maskSize: "contain",
								maskPosition: "center",
								maskRepeat: "no-repeat",
							}}></motion.span>
					</span>
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn", delay: 1.2 }}
					viewport={{ once: true }}
					className="text-center text-lg md:text-xl text-white/50 mt-8 max-w-2xl mx-auto">
					{HERO.SUB_TEXT.TEXT1} {HERO.SUB_TEXT.TEXT2} {HERO.SUB_TEXT.TEXT3}
				</motion.p>
				<div className="flex flex-col md:flex-row justify-center gap-4 w-[80%] md:w-2/3 max-w-xl mx-auto mt-24 heroBtns">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, ease: "easeIn", delay: 2 }}
						className="w-full lg:p-6 flex flex-col gap-4 lg:flex-row lg:justify-between  font-semibold lg:text-lg rounded-full">
						<Button
							className="w-full lg:p-6 py-3 lg:text-lg rounded-full text-black font-medium"
							variant={"default"}>
							{HERO.BTNS.GET_STARTED}
						</Button>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, ease: "easeIn", delay: 2 }}
						className="w-full lg:p-6  flex flex-col gap-4 lg:flex-row lg:justify-between  font-semibold lg:text-lg rounded-full ">
						<Button
							className="w-full lg:p-6 py-3 lg:text-lg  rounded-full font-medium"
							variant={"secondary"}>
							{HERO.BTNS.LEARN_HOW_IT_WORKS}
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
