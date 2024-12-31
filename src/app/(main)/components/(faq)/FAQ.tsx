"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FAQList } from "./constants/data";
import { FAQ } from "./constants/labels";

function FAQComp() {
	const [selectedIdx, setSelectedIndx] = useState<number | null>(null);
	return (
		<section className="faq py-24">
			<div className="container mx-auto">
				<h2 className="w-full text-center text-white text-4xl  md:text-5xl  max-w-2xl mx-auto mt-6">
					{FAQ.HEADER}
				</h2>

				{/* questions */}
				<div className="mt-[5rem] flex flex-col gap-6 w-full max-w-xl mx-auto p-1">
					{FAQList.map((f, i: number) => (
						<div
							className="bg-neutral-900  rounded-2xl border border-white/10 p-6"
							onMouseLeave={() => setSelectedIndx(null)}
							key={i}>
							<div className="flex justify-between items-center w-full">
								<h3 className="font-medium text-white/90  max-w-xl">
									{f.question}
								</h3>
								<Plus
									className={cn(
										"text-lime-400 shrink-0 cursor-pointer",
										selectedIdx === i && "rotate-45"
									)}
									onClick={() =>
										i === selectedIdx
											? setSelectedIndx(null)
											: setSelectedIndx(i)
									}
								/>
							</div>
							<AnimatePresence>
								{selectedIdx === i && (
									<motion.div
										initial={{ height: 0, marginTop: 0 }}
										animate={{
											height: "auto",
											marginTop: "24px",
										}}
										exit={{
											height: 0,
											marginTop: 0,
										}}
										className={cn(
											"mt-6 overflow-hidden",
											selectedIdx !== i && "hidden"
										)}>
										<p className="text-white/70 font-base text-sm">
											{f.answer}
										</p>
										<ul className="pt-1">
											{f.list?.map((item, i) => {
												return (
													<li key={i} className="text-white/40 text-xs">
														{item}
													</li>
												);
											})}
										</ul>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQComp;
