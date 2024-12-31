import { Fragment } from "react";
import FAQ from "./components/(faq)/FAQ";
import Contact from "./components/(contact)/Contact";
import Coops from "./components/(coops)/Coops";
import { Features } from "./components/(features)/Features";
import { Hero } from "./components/(hero)/Hero";
import { TabletParallax } from "./components/(parallax)/Parallax";
import Pricing from "./components/(pricinig)/Pricing";
import { Services } from "./components/(services)/Services";
import Testimonials from "./components/(testimonials)/Testimonials";

export default function Home() {
	return (
		<Fragment>
			<Hero />
			<TabletParallax />
			<Features />
			<Services />
			<Testimonials />
			<Pricing />
			<Coops />
			<FAQ />
			<Contact />
		</Fragment>
	);
}
