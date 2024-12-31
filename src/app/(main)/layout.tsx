import { Fragment, ReactNode } from "react";
import Navbar from "./components/(navbar)/Navigation";
import Footer from "./components/(footer)/Footer";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<section className="layout relative w-full  h-fit min-h-[42rem] flex flex-col items-center bg-gradient-to-br from-gray-900 to-black">
				<Navbar />
				<main className="w-full mx-auto  h-fit">{children}</main>
				<footer className="w-full">
					<Footer />
				</footer>
			</section>
		</Fragment>
	);
}

export default Layout;
