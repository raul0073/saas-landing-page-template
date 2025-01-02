"use client";
import underline from "@/../public/images/svgs/needle-underline.svg";
import { motion } from "framer-motion";
import HeroActionButtons from "./components/HeroActions";
import { HERO } from "./constants/labels";
import PromoTag from "./components/PromoTag";

export function Hero() {
	return (
		<section className="hero pt-24 px-4 pb-24">
			<div className="container mx-auto relative">
				{/* promo tag */}
				<PromoTag />
				{/* hero header */}
			
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeInOut"}}
					viewport={{ once: true }}
					className=" w-full text-center  d bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50  text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans py-2  relative z-20 font-bold tracking-tight mt-6">
					{HERO.HEADER} <br />
					{HERO.HEADER2}{" "}
					<span className="relative">
						<span className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-300 to-neutral-50">
							{HERO.PRO}.
						</span>
						<motion.span
							initial={{ fill: "transparent", opacity: 0, width: "60%" }}
							whileInView={{ fill: "lime-400", opacity: 1, width: "100%" }}
							transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
							viewport={{ once: true }}
							className="absolute w-full h-4 left-0 top-full -translate-y-1/2 
						bg-gradient-to-r from-primary -skew-y-4 to-lime-400 z-50"
							style={{
								maskImage: `url(${underline.src})`,
								maskSize: "contain",
								maskPosition: "center",
								maskRepeat: "no-repeat",
							}}></motion.span>
					</span>
				</motion.h1>
				{/* hero paragraph */}
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeIn", delay: 1.2 }}
					viewport={{ once: true }}
					className="text-center text-lg md:text-xl text-white/50 mt-8 max-w-2xl mx-auto">
					{HERO.SUB_TEXT.TEXT1} {HERO.SUB_TEXT.TEXT2} {HERO.SUB_TEXT.TEXT3}
				</motion.p>
				{/* hero action btns */}
				<HeroActionButtons />
			</div>
		</section>
	);
}
