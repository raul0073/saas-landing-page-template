import { ReactNode } from "react";
export function IntroCardIcon({ icon }: { icon: ReactNode }) {
	return (
		<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden shadow-lime-400 shadow-[0_10px_70px_rgba(8,_112,_184,_0.7)]">
			{icon}
		</div>
	);
}

type IntroCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
};

export function IntroCard({ icon, title, description }: IntroCardProps) {
	return (
		<div className="introCard flex flex-col px-4 relative">
			<IntroCardIcon icon={icon} />

			<div className="py-3 space-y-4 mt-8">
				<h3 className="text-white text-2xl">{title}</h3>
				<p className="text-white/85 text-sm  mt-8 leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}