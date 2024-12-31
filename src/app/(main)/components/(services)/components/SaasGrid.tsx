import { SaasPageDialogComp } from "@/app/(main)/components/(services)/components/NormalModal";
import { SaasType, sassList } from "../constants/constants";

function SaasGrid() {
	return (
		<div>
			<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 text-xs md:text-sm font-normal mb-4">
				We create custom management systems and dashboards designed to clean up
				your mess.
			</p>
			<p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
				{`Whether it's managing data, employees or tracking performance, our visualizing insights will make feel in control.`}
			</p>
			<div className="grid grid-cols-2 gap-4">
				{/* eslint-disable-next-line */}
				{sassList.map((saas: SaasType, i: number) => {
					return (
						<div className={saas.parentClassName} key={i}>
							<SaasPageDialogComp
								website={saas.wbsite}
								url={saas.url}
								popUpData={saas.popUpData}>
								{saas.coverImg}
							</SaasPageDialogComp>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SaasGrid;
