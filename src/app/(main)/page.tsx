import dynamic from "next/dynamic";
import { Fragment } from "react";
import Contact from "./components/(contact)/Contact";
import FAQ from "./components/(faq)/FAQ";
import { Hero } from "./components/(hero)/Hero";
import { TabletParallax } from "./components/(parallax)/Parallax";
import Pricing from "./components/(pricinig)/Pricing";

const DynamicFeatures = dynamic(
	() => import("@/./app/(main)/components/(features)/Features"),
	{
		loading: () => <div>Loading...</div>,
	}
);
const DynamicServices = dynamic(
	() => import("@/./app/(main)/components/(services)/Services"),
	{
		loading: () => <div>Loading...</div>,
	}
);
const DynamicTestimonials = dynamic(
	() => import("@/./app/(main)/components/(testimonials)/Testimonials"),
	{
		loading: () => <div>Loading...</div>,
	}
);
const DynamicCoops = dynamic(
	() => import("@/./app/(main)/components/(coops)/Coops"),
	{
		loading: () => <div>Loading...</div>,
	}
);

export default function Home() {
	return (
		<Fragment>
			<Hero />
			<TabletParallax />
			<DynamicFeatures />
			<DynamicServices />
			<DynamicTestimonials />
			<Pricing />
			<DynamicCoops />
			<FAQ />
			<Contact />
		</Fragment>
	);
}
