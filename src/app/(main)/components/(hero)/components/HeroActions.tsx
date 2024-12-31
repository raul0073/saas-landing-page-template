import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HERO } from "../constants/labels";

function HeroActionButtons() {
	return (
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
	);
}

export default HeroActionButtons;
