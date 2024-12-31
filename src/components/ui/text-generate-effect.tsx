"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope] = useAnimate();
	const wordsArray = words.split(" ");

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="opacity-0"
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
							whileInView={{
								opacity: 1,
								filter: "blur(0px)",
							}}
							transition={{
								duration: duration || 1,
								delay: idx * 0.2,
							}}
							viewport={{once: true}}
							>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div className=" ">{renderWords()}</div>
			</div>
		</div>
	);
};
