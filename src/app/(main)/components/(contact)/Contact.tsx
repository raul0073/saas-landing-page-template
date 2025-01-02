"use client";
import { motion } from "framer-motion";
import { AnimatedModal } from "./components/AnimatedModal";
import { CONTACT } from "./constants/data";
function Contact() {
	return (
		<section className="contct-page h-[70vh] py-24 md:py-40 " id="contact">
			<div className="container mx-auto">
				<motion.h2
					initial={{ opacity: 0, filter: "blur(30px)", color: "transparent" }}
					whileInView={{ opacity: 1, filter: "blur(0)" }}
					transition={{ duration: 0.9, ease: "easeIn" }}
					viewport={{ once: true, amount: 0.9 }}
					className="text-4xl  md:text-5xl pt-12 tracking-tight  text-center bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50 dark:from-neutral-600 dark:to-white">
					{CONTACT.HEADER}{" "}
					<span className="text-primary"> {CONTACT.TODAY}</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut", delay: .8 }}
					viewport={{ once: true, amount: 1 }}
					className="text-lg text-white/50 mt-6 max-w-2xl mx-auto text-center">
					{CONTACT.SUB_HEADER}
				</motion.p>
				<div className="max-w-xl mx-auto flex justify-center">
					<AnimatedModal />
				</div>
			</div>
		</section>
	);
}

export default Contact;
