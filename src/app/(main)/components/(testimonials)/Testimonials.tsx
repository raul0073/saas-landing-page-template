"use client";
import { motion } from "framer-motion";
import TestimonialCard from "./components/TestimonialCard";
import { testimonials, TestimonialsType } from "./constants/data";
import { TESTIMONIALS } from "./constants/labels";

function Testimonials() {
	return (
		<section className="testimonials  min-h-screen bg-white relative overflow-clip">
			<div className="absolute w-40 lg:w-[40rem] h-96 -top-24 right-[50%] translate-x-[50%] bg-gradient-to-t from-[#8779ff] to-[#2cff36] blur-3xl  rounded-full opacity-20"></div>
			<div className="container py-20 md:py-40 mx-auto">
				<div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						className="font-display text-4xl  md:text-5xl tracking-tight text-zinc-900 text-center mt-12">
						{TESTIMONIALS.HEADER}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
						viewport={{ once: true, amount: 1 }}
						className="mt-6 text-lg tracking-tight  bg-gradient-to-r from-slate-500 to-gray-400 bg-clip-text text-transparent  text-center">
						{TESTIMONIALS.SUB_HEADER}{" "}
					</motion.p>
				</div>
				<div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 mt-20 px-4">
					{testimonials.map((item: TestimonialsType, i: number) => {
						return <TestimonialCard data={item} key={i} />;
					})}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
