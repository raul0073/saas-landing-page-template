import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ServicesTimeline } from "@/components/ui/timeline";
import ApplicationsGrid from "./components/ApplicationsGrid";
import SaasGrid from "./components/SaasGrid";
import WebsitesGrid from "./components/WebsitesGrid";


export function Services() {
	const data = [
		{
			title: <TextGenerateEffect words="Websites" />,
			content: <WebsitesGrid />,
		},
		{
			title: <TextGenerateEffect words="Management Systems" />,
			content: <SaasGrid />,
		},
		{
			title: <TextGenerateEffect words="Mobile Applications" />,
			content: <ApplicationsGrid />,
		},
	];
	return (
		<section className="w-full px-1 md:px-4" id="services">
			<ServicesTimeline data={data} />
		</section>
	);
}
