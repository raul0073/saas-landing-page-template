import { NavigationLinkType } from "../../(navbar)/constants/data";

function NavigationLink({link}: {link: NavigationLinkType}) {
	return (
		<li key={link.href}>
			<a
				href={link.href}
				className="text-white/40 hover:text-white hover:tracking-wider transition-all duration-100 ease-in-out footer-link uppercase">
				{link.label}
			</a>
		</li>
	);
}

export default NavigationLink;
