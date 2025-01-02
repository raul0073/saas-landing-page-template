"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { FAQItemType } from "../constants/data";
function QuestionAndAnswerComp({
	selectedIdx,
	setSelectedIndx,
	i,
	FAQ,
}: {
	i: number;
	selectedIdx: number | null;
	setSelectedIndx: Dispatch<SetStateAction<number | null>>;
	FAQ: FAQItemType;
}) {
	return (
		<div
			className="bg-neutral-900  rounded-2xl border border-white/10 p-6"
			onMouseLeave={() => setSelectedIndx(null)}>
			<div className="flex justify-between items-center w-full">
				<h3 className="font-medium text-white/90  max-w-xl">{FAQ.question}</h3>
				<Plus
					className={cn(
						"text-lime-400 shrink-0 cursor-pointer",
						selectedIdx === i && "rotate-45"
					)}
					onClick={() =>
						i === selectedIdx ? setSelectedIndx(null) : setSelectedIndx(i)
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
						<p className="text-white/70 font-base text-sm">{FAQ.answer}</p>
						<ul className="pt-1">
							{FAQ.list?.map((item, i) => {
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
	);
}

export default QuestionAndAnswerComp;
