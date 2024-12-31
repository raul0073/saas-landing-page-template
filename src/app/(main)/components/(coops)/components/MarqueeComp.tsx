"use client";
import Marquee from "@/app/(main)/components/(coops)/components/Marquee";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { coopsList } from "../constants/data";

interface CoopsCardProps extends HTMLAttributes<HTMLElement> {
	logo: StaticImageData;
	name: string;
}
const CoopsCard = ({ logo, name, ...props }: CoopsCardProps) => {
	return (
		<figure
		{...props}
		className={cn("group relative w-64 overflow-hidden rounded-xl border border-white/15 p-4 flex flex-col items-center justify-between gap-1 saturate-100 hover:-translate-y-1 transition-trasform duration-200 ease-in-out")}>
			<Image
				src={logo}
				alt={name}
				width={80}
				height={40}
				className="w-auto h-12 group-hover:saturate-150 "
			/>
			<div className="flex flex-col">
				<figcaption className="text-sm font-medium text-gray-400 ">
					{name}
				</figcaption>
			</div>
		</figure>
	);
};

const CoopsMarquee = () => {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent py-20 md:shadow-xl">
			<Marquee pauseOnHover className="[--duration:20s]">
				{coopsList.map((comp, index: number) => (
					<CoopsCard
						key={index}
						{...comp}
						className="marquee-item shrink-0" 
					/>
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent"></div>
		</div>
	);
};

export default CoopsMarquee;
