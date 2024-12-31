"use client";
import { motion } from "framer-motion";
import PricingCardsComp from "./components/PricingCardsComp";
import { PRICING } from "./constnats/labels";

function Pricing() {
	return (
		<section
			className="min-h-[40rem] px-4 bg-white py-20 md:py-40 relative group overflow-hidden"
			id="pricing">
			<div className="max-w-xl md:mx-auto md:text-center xl:max-w-none relative z-10">
				<motion.h2
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					viewport={{ once: true, amount: 0.5 }}
					className="font-display text-4xl  md:text-5xl tracking-tight text-zinc-900 sm:text-4xl ">
					{PRICING.HEADER}
				</motion.h2>
				<p className="mt-6 text-lg tracking-tight text-zinc-600">
					{PRICING.SUB_HEADER} {PRICING.SUB_HEADER2}
				</p>
			</div>

			<PricingCardsComp />
		</section>
	);
}

export default Pricing;
