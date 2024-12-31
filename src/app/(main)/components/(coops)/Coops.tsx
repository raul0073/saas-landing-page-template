"use client";

import { motion } from "framer-motion";
import TestimonialsMarquee from "./components/MarqueeComp";
import { COOPS } from "./constants/labels";

function Coops() {
	return (
		<section className="coops py-24 overflow-hidden">
			<div className="container mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.9 }}
					className="text-4xl  md:text-5xl text-center  text-white/90 mt-24  font-display  tracking-tight ">
					{COOPS.HEADER1}
					<br />
					<span className="text-primary">{COOPS.HEADER2} </span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-white/50 mt-6 max-w-2xl mx-auto text-center">
					{COOPS.SUB_HEADER}
				</motion.p>
				<div className="w-[900px]  mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
					<TestimonialsMarquee />
				</div>
			</div>
		</section>
	);
}

export default Coops;
