import { ReactNode } from "react";
function IntroCardIcon({ icon }: { icon: ReactNode }) {
	return (
		<div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden shadow-lime-400 shadow-[0_10px_70px_rgba(8,_112,_184,_0.7)]">
			{icon}
		</div>
	);
}

export default IntroCardIcon;
