import { LandingPageDialogComp } from "@/app/(main)/components/(services)/components/NormalModal";
import { websitesList, WebsiteType } from "../constants/constants";

function WebsitesGrid() {
	return (
		<div>
			<p className="bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-50 text-xs md:text-sm font-normal mb-8">
				We specialize in creating tailored digital solutions to elevate our
				brand. Scratch that, we mean{" "}
				<span className="font-semibold italic">your</span> brand.
			</p>

			<div className="grid grid-cols-3 gap-4">
				{websitesList.map(
					(landingPage: WebsiteType, i: number) => {
						return (
							<div className={landingPage.parentClassName} key={i}>
								<LandingPageDialogComp
									website={landingPage.wbsite}
									url={landingPage.url}
									imgSrc={landingPage.fullpageImg}>
									{landingPage.coverImg}
								</LandingPageDialogComp>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
}

export default WebsitesGrid;
