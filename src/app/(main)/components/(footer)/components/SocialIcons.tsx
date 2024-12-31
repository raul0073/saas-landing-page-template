import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
function SocialIcons() {
	return (
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
	);
}

export default SocialIcons;
