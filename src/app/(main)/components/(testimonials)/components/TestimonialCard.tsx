import Image from "next/image";
import { TestimonialsType } from "../constants/data";

function TestimonialCard({ data }: { data: TestimonialsType }) {
	return (
		<div className="shadow-lg px-8 py-12 rounded-xl border border-zinc-700/10  flex-1 mb-8">
			<p className="text-xl md:text-2xl font-normal text-zinc-700 leading-relaxed">
				{data.text}
			</p>
			<div className="flex flex-row space-x-2 mt-8">
				<Image
					src={data.avatar}
					alt="avatar"
					width={35}
					height={35}
					className="transition duration-500  blur-0 scale-100 rounded-full border "
				/>
				<div className="flex flex-col">
					<p className="text-sm text-gray-800">{data.name}</p>
					<p className="text-xs text-gray-500">{data.title}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
