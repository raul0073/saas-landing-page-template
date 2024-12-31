"use client";

import ContactForm from "@/app/(main)/components/(contact)/components/ContactForm";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";

export function AnimatedModal() {
	const formRef = useRef<{ submit: () => void } | null>(null);

	const handleSubmit = () => {
		formRef.current?.submit();
	};

	return (
		<div className="py-24 flex items-center justify-center ">
			<Modal>
				<ModalTrigger className="bg-black dark:bg-white dark:text-black flex justify-center group/modal-btn text-zinc-950 items-center bg-gradient-to-b from-[#e6e6e6] to-[#ffffff] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-full py-3 w-[250px]">
					<span className="group-hover/modal-btn:translate-x-48 text-center transition duration-500 ">
						Contact Us
					</span>
					<div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
						🤗
					</div>
				</ModalTrigger>
				<ModalBody>
					<ModalContent>
						<div className="container mx-auto ">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
								<div className="px-1 md:px-4 w-full flex flex-col justify-center items-start">
									<header>
										<h2 className="text-4xl md:text-5xl pt-12 tracking-tight text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-100 ">
											Contact Us
										</h2>
										<p className="text-lg text-white/50 mt-2 px-1">
											Tackle us with anything.
										</p>
									</header>
									<ContactForm ref={formRef} />
								</div>
								<div className="contact-art-parallax overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_60%,black_60%,transparent)]"></div>
							</div>
						</div>
					</ModalContent>
					<ModalFooter className="gap-4 items-center justify-between px-8">
						<div className="flex gap-2">
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
						{/* Trigger form submission */}
						<Button
							onClick={handleSubmit}
							type="submit"
							className="rounded-full px-12">
							Submit
						</Button>
					</ModalFooter>
				</ModalBody>
			</Modal>
		</div>
	);
}
