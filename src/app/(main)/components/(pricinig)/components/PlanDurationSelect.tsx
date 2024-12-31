import { Dispatch, SetStateAction } from "react";

function PlanDurationSelect({
	isMonthView,
	setIsMonthView,
}: {
	isMonthView: boolean;
	setIsMonthView: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div>
			<button
				className={`text-sm px-4 py-2 inline-flex relative ${
					isMonthView ? "bg-gray-50" : "bg-gray-200"
				} `}
				onClick={() => setIsMonthView(true)}>
				<span className="text-black/40">Monthly</span>
				{isMonthView && (
					<span className="absolute bottom-0 h-px inset-x-0 bg-gradient-to-r from-primary to-lime-500-400 blur-[1px] z-50  mx-auto"></span>
				)}
			</button>
			<button
				className={`text-sm px-4 py-2 inline-flex relative -ml-2 ${
					isMonthView ? "bg-gray-200" : "bg-gray-50"
				} `}
				onClick={() => setIsMonthView(false)}>
				<span className="text-black/40">Yearly</span>
				{!isMonthView && (
					<span className="absolute bottom-0 h-px inset-x-0 bg-gradient-to-r from-primary to-lime-500 blur-[1px] z-50  mx-auto"></span>
				)}
			</button>
		</div>
	);
}

export default PlanDurationSelect;
