import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { applications, ApplicationType } from "../constants/constants";
import ParallexText from "./ParallexText";

function ApplicationsGrid() {
	return (
		<div>
			<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 dark:from-neutral-600 dark:to-white text-xs md:text-sm font-normal mb-8">
				We develop custom applications that are integrated with your management
				systems.
			</p>
			<div className="mb-8">
				<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
					✅ Analytics you will never use
				</div>
				<div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
					✅ Charts that lead nowhere
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
				{applications.map((app: ApplicationType, i: number) => {
					return (
						<DirectionAwareHover imageUrl={app.imageUrl} className="" key={i}>
							<p className="font-bold text-xl">{app.title}</p>
							<div className="backdrop-blur-lg  w-full">
								<p className="font-normal text-sm text-gray-400">
									{app.description}
								</p>
							</div>
						</DirectionAwareHover>
					);
				})}
				<div className=" rounded-lg  items-center justify-center hidden md:col-span-2 lg:flex">
					<ParallexText />
				</div>
			</div>
		</div>
	);
}

export default ApplicationsGrid;
