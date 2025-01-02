"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import QuestionAndAnswerComp from "./components/QuestionAndAnswer";
import { FAQList } from "./constants/data";
import { FAQ } from "./constants/labels";

function FAQComp() {
	const [selectedIdx, setSelectedIndx] = useState<number | null>(null);
	return (
		<section className="faq py-24">
			<div className="container mx-auto">
			<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						viewport={{ once: true, amount: 1 }}
						 className="w-full text-center text-white text-4xl  md:text-5xl  max-w-2xl mx-auto mt-8">
					{FAQ.HEADER2}
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 1 }}
					className="mt-6 text-lg w-full text-center text-white/50">
					{FAQ.SUB_HEADER}
				</motion.p>
				{/* questions */}
				<div className="mt-[5rem] flex flex-col gap-6 w-full max-w-xl mx-auto p-1">
					{FAQList.map((f, i: number) => (
						<QuestionAndAnswerComp
							key={i}
							selectedIdx={selectedIdx}
							setSelectedIndx={setSelectedIndx}
							FAQ={f}
							i={i}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQComp;
