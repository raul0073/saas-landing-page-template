import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlanType } from "../constnats/data";

interface PricingCardProps {
	plan: PlanType;
	isMonthView: boolean;
	primary?: boolean;
}
export function PricingCard({ plan, isMonthView, primary }: PricingCardProps) {
	return (
		<div
			className={cn(
				`bg-white rounded-2xl px-8 py-12 relative ${
					primary ? "bg-lime-500" : ""
				}`
			)}>
			<h3
				className={cn(
					`font-medium text-gray-900 text-2xl ${primary ? "text-white/90" : ""}`
				)}>
				{plan.name}
			</h3>
			<p
				className={cn(
					`mt-2 text-sm text-gray-500 ${primary ? "text-white/90" : ""}`
				)}>
				{plan.forWho}
			</p>
			<p className="mt-8">
				<span
					className={cn(
						`text-5xl font-extrabold text-gray-900 ${
							primary ? "text-white" : ""
						}`
					)}>
					$
					{isMonthView
						? `${plan.price}`
						: `${(plan.price * 7 * 0.9).toFixed(0)}`}
				</span>
				<span
					className={cn(
						`text-base font-medium text-gray-500 ml-1 ${
							primary ? "text-white/60" : ""
						}`
					)}>
					{isMonthView ? "/mo" : "/yr"}
				</span>
			</p>
			<Button className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2 w-full mt-8">
				Pay now
			</Button>
			<div className="mt-8">
				<ul className="mt-6 space-y-4 relative">
					<div
						className={cn(
							`absolute w-px h-[90%] inset-y-4 bg-gray-200 left-2 ${
								primary ? "bg-transparent" : ""
							}`
						)}></div>
					{plan.features.map((item: string, index: number) => (
						<li key={index} className="flex items-center relative z-10">
							<div className="flex-shrink-0">
								<svg
									width="16px"
									height="16px"
									viewBox="0 0 32 32"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg">
									<title>arrow-right-circle</title>
									<desc>Purchase RMS plan.</desc>
									<defs></defs>
									<g
										id="Page-1"
										stroke="none"
										strokeWidth="1"
										fill="#424242"
										className="z-30"
										fillRule="evenodd">
										<g
											id="Icon-Set"
											transform="translate(-308.000000, -1087.000000)"
											fill={primary ? "#fff3f3" : "#424242"}>
											<path
												d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
												id="arrow-right-circle"></path>
										</g>
									</g>
								</svg>
							</div>
							<p
								className={cn(
									`text-gray-600 ml-2 text-sm ${primary ? "text-white" : ""}`
								)}>
								{item}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default PricingCard;
