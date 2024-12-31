import { FlipWords } from "@/components/ui/flip-words";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ParallexText() {
	return (
		<section className="flip-words ">
			<div className="footer-footer ">
				<FlipWordsComp />
			</div>

			<div className="social-icons my-4 flex items-center justify-center gap-4">
				<a
					href="https://github.com/raul0073?tab=repositories"
					target="_blank"
					rel="noopener noreferrer">
					<FaGithub className="icon hover:text-amber-400" color={"white"} />
				</a>
				<a
					href="https://www.linkedin.com/in/raz-massami/"
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedin className="icon hover:text-amber-400" color={"white"} />
				</a>
			</div>
		</section>
	);
}

export function FlipWordsComp() {
	const words = [
		"Beautiful",
		"Responsive",
		"Innovative",
		"Modern",
		"Dynamic",
		"User-Friendly",
		"Sleek",
		"Efficient",
	];

	return (
		<div className="flex justify-center items-center px-4">
			<div className="lg:text-4xl mx-auto font-normal text-neutral-300 text-center">
				Crafting <br />
				<FlipWords words={words} className="text-lime-400 text-nowrap" />
				Applications
			</div>
		</div>
	);
}
