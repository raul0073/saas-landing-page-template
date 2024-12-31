import { navLinks } from "../(navbar)/constants/data";
import Logo from "../../../../components/Logo";
import NavigationLink from "./components/NavigationLink";
import SocialIcons from "./components/SocialIcons";

export default function Footer() {
	return (
		<footer className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 relative">
			<div className="flex flex-col justify-center items-center py-10 ">
				<div className="flex flex-col justify-center items-center pt-10 mb-4">
					<Logo className="w-8 h-auto" />
				</div>
				<nav className="mt-4 flex justify-center gap-8">
					<ul className="flex gap-8">
						{navLinks.map((link, i: number) => {
							return <NavigationLink key={`${i}-${link.href}`} link={link} />
						})}
					</ul>
				</nav>
				<SocialIcons />
			</div>
		</footer>
	);
}
