import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import Logo from "../../../../components/Logo";
import { navLinks } from "../(navbar)/constants/data";

export default function Footer() {
	return (
		<footer className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 relative">
			<div className="flex flex-col justify-center items-center py-10 ">
				<div className="flex flex-col justify-center items-center pt-10 mb-4">
					<Logo className="w-8 h-auto"  />
				</div>

				<nav className="mt-4 flex justify-center gap-8">
					<ul className="flex gap-8">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-white/40 hover:text-white hover:tracking-wider transition-all duration-100 ease-in-out">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
						{/* social icons  */}
				<div className="mt-8 w-full flex justify-center gap-8">
					<ImGithub
						className="text-white/70 cursor-pointer hover:skew-x-4"
						width={50}
					/>
					<ImTwitter
						className="text-white/70 cursor-pointer hover:skew-x-6"
						width={50}
					/>
					<ImLinkedin
						className="text-white/70 cursor-pointer hover:skew-x-2"
						width={50}
					/>
				</div>
			</div>
		</footer>
	);
}
