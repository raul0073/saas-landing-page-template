import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Logo from "../../../../../components/Logo";
import { navLinks } from "../constants/data";

function MobileMenu({
	setIsMobileMenuOn,
}: {
	setIsMobileMenuOn: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<Drawer onOpenChange={(open) => setIsMobileMenuOn(open)}>
			<DrawerTrigger>
				<MenuIcon className="md:hidden text-white" width={30} height={30} />
			</DrawerTrigger>
			<DrawerContent className="rounded-none p-4 w-[200px] border-none bg-black shadow-md shadow-white/15">
				<DrawerHeader>
					<DrawerTitle>
						<Logo className="w-6 h-auto" />
					</DrawerTitle>
					<Separator className="w-2/3 mx-auto " />
				</DrawerHeader>

				<ul className="space-y-8 text-center font-sans mt-24">
					{navLinks.map((link) => (
						<li key={link.href}>
							<DrawerClose asChild>
								<a
									href={link.href}
									className="text-white/60 hover:text-white hover:tracking-wider transition-all duration-100 ease-in-out">
									{link.label}
								</a>
							</DrawerClose>
						</li>
					))}
				</ul>
				<DrawerFooter className="text-center">
					<div>
						<span className="handwritingFont text-gray-400">r</span>
						<span className="handwritingFont text-yellow-400">m</span>
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

export default MobileMenu;
