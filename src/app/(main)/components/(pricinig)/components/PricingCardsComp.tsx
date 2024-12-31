"use client";
import { Fragment, useState } from "react";
import { plans, PlanType } from "../constnats/data";
import PlanDurationSelect from "./PlanDurationSelect";
import { PricingCard } from "./PricingCards";

function PricingCardsComp() {
	const [isMonthView, setIsMonthView] = useState<boolean>(true);
	return (
		<Fragment>
			<div className="mx-auto flex-row  justify-center items-center border rounded-3xl border-gray-100 flex mt-20 overflow-hidden w-fit">
				<PlanDurationSelect
					isMonthView={isMonthView}
					setIsMonthView={setIsMonthView}
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">
				{plans.map((plan: PlanType, i: number) => {
					return (
						<PricingCard
							key={i}
							plan={plan}
							isMonthView={isMonthView}
							primary={plan.name.includes("Pro") ? true : false}
						/>
					);
				})}
			</div>
		</Fragment>
	);
}

export default PricingCardsComp;
