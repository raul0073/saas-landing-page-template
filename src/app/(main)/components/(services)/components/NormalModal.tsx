import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
	AnimatedTestimonials,
	Testimonial,
} from "../../../../../components/ui/animated-testimonials";

type LandingPageDialogCompProps = {
	imgSrc: StaticImageData;
	children: ReactNode;
	url: string;
	website: string;
};
export function LandingPageDialogComp({
	children,
	imgSrc,
	url,
	website,
}: LandingPageDialogCompProps) {
	return (
		<Dialog>
			<DialogTrigger className="w-full cursor-pointer">
				{children}
			</DialogTrigger>
			<DialogContent className="w-80 mx-auto h-2/3 bg-gradient-to-tl from-neutral-900 to-black border-lime-400/30">
				<DialogHeader>
					<DialogTitle className="uppercase font-extrabold text-white">
						{website}
					</DialogTitle>
					<DialogDescription className="text-white/30 px-2">
						<Link href={`${url}`} passHref target="_blank" className="group">
							{url}{" "}
							<ArrowRight className="inline-flex w-4 h-auto duration-150 ease-out fill-mode-forwards group-hover:translate-x-6 group-hover:text-transparent " />
							<ArrowRight className="inline-flex -translate-x-6 text-transparent w-4 h-auto duration-150 ease-in group-hover:-translate-x-4 group-hover:text-lime-300 " />
						</Link>
					</DialogDescription>
				</DialogHeader>
				<div className="overflow-auto  scrollbar-thumb-lime-400 scrollbar-track-transparent  scroll-mx-10 p-4 scrollbar-thin ">
					<Image
						src={imgSrc}
						alt="startup template"
						className="object-cover h-fit w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}

type SaasPageDialogComp = {
	children: ReactNode;
	url: string;
	popUpData: Testimonial[];
	website: string;
};
export function SaasPageDialogComp({
	children,
	url,
	website,
	popUpData,
}: SaasPageDialogComp) {
	return (
		<Dialog>
			<DialogTrigger className="w-full cursor-pointer">
				{children}
			</DialogTrigger>
			<DialogContent className="w-[900px] h-fit bg-black border-lime-400/30">
				<DialogHeader className="h-fit text-left pb-8">
					<DialogTitle className="uppercase font-extrabold text-white">
						{website}
					</DialogTitle>
					<DialogDescription className="text-white/30 px-2">
						<Link href={`${url}`} passHref target="_blank" className="group">
							{url}{" "}
							<ArrowRight className="inline-flex w-4 h-auto duration-150 ease-out fill-mode-forwards group-hover:translate-x-6 group-hover:text-transparent " />
							<ArrowRight className="inline-flex -translate-x-6 text-transparent w-4 h-auto duration-150 ease-in group-hover:-translate-x-4 group-hover:text-lime-300 " />
						</Link>
					</DialogDescription>
				</DialogHeader>
				<AnimatedTestimonials testimonials={popUpData} />
			</DialogContent>
		</Dialog>
	);
}
