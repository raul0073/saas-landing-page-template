"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TestimonialsType } from "../constants/data";
function TestimonialCard({ data, i }: { data: TestimonialsType; i: number }) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				x: i % 2 === 0 ? 50 : -50,
			}}
			whileInView={{
				opacity: 1,
				x: 0, 
				transition: {
					duration: 1,
					delay: (i * 0.3) - 1 
				},
				
			}}
			viewport={{ once: true }}
			className="shadow-lg px-8 py-12 rounded-xl border border-zinc-700/10  flex-1 mb-8">
			<p className="text-xl md:text-2xl font-normal text-zinc-700 leading-relaxed">
				{data.text}
			</p>
			<div className="flex flex-row space-x-2 mt-8">
				<Image
					src={data.avatar}
					alt="avatar"
					width={35}
					height={35}
					className="transition duration-500  blur-0 scale-100 rounded-full border "
				/>
				<div className="flex flex-col">
					<p className="text-sm text-gray-800">{data.name}</p>
					<p className="text-xs text-gray-500">{data.title}</p>
				</div>
			</div>
		</motion.div>
	);
}

export default TestimonialCard;
