import longImgEleven from "@/../public/images/landing_pages/eleven_full.png";
import landing2 from "@/../public/images/landing_pages/lrv_.png";
import longImglrv from "@/../public/images/landing_pages/lrv_full.png";
import landing1 from "@/../public/images/landing_pages/www.eleven-academy.co.il_.png";
import saas3 from "@/../public/images/saas/experimental/dashboard.png";
import saas4 from "@/../public/images/saas/experimental/sub.png";
import saas2 from "@/../public/images/saas/synagogue_entry.png";
import saas1 from "@/../public/images/saas/synagogue_transactions.png";
import app2 from "@/../public/images/applications/predictor_mobile_mock-removebg-preview.png";
import app4 from "@/../public/images/applications/shifter_mobile_mock-removebg-preview.png";
import app3 from "@/../public/images/applications/Tahel_mobile_mock-removebg-preview.png";
import app1 from "@/../public/images/applications/tiferet_mobile_mock-removebg-preview.png";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { timelineImageClass } from "../utils/UI";

export type WebsiteType = {
	wbsite: string;
	parentClassName?: string;
	url: string;
	fullpageImg: StaticImageData;
	coverImg: ReactNode;
};

export const websitesList = [
	{
		wbsite: "Eleven-Academy",
		url: "www.eleven-academy.co.il",
		fullpageImg: longImgEleven,
		coverImg: (
			<Image
				src={landing1}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "col-span-2",
	},
	{
		wbsite: "Leereava",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={landing2}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
	},
	{
		wbsite: "Eleven-Academy",
		url: "www.eleven-academy.co.il",
		fullpageImg: longImgEleven,
		coverImg: (
			<Image
				src={landing1}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
	},
	{
		wbsite: "Leereava",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={landing2}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "col-span-2",
	},
];

export type SaasType = {
	wbsite: string;
	url: string;
	coverImg: ReactNode;
	parentClassName?: string;
	popUpData: SaasPopupType[];
};
type SaasPopupType = {
	name: string;
	desc: string;
	src: StaticImageData;
};

export const sassList = [
	{
		wbsite: "Eleven Academy Admin Panel",
		url: "www.eleven-academy.co.il",
		coverImg: (
			<Image
				src={saas3}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		popUpData: [
			{
				name: "asd",
				desc: "Display",
				src: saas1,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas2,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas3,
			},
		],
	},
	{
		wbsite: "Synagogue Management System",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={saas2}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		popUpData: [
			{
				name: "asd",
				desc: "Display",
				src: saas1,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas2,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas3,
			},
		],
	},
	{
		wbsite: "Synagogue Management System",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={saas1}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		popUpData: [
			{
				name: "asd",
				desc: "Display",
				src: saas1,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas2,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas3,
			},
		],
	},
	{
		wbsite: "Synagogue Management System",
		url: "www.lrv.co.il",
		fullpageImg: longImglrv,
		coverImg: (
			<Image
				src={saas4}
				alt="startup template"
				width={500}
				height={500}
				className={timelineImageClass}
			/>
		),
		parentClassName: "",
		popUpData: [
			{
				name: "asd",
				desc: "Display",
				src: saas1,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas2,
			},
			{
				name: "asd",
				desc: "Display",
				src: saas3,
			},
		],
	},
];
export type ApplicationType = {
	imageUrl: StaticImageData;
    title: string;
    description: string;
    link: string;
}
export const applications = [
	{
		imageUrl: app1,
		title: "Tiferet Israel",
		description:
			"Tiferet Israel is a religious foundation dedicated to fostering spiritual growth and community engagement.",
		link: "#",
	},
	{
		imageUrl: app3,
		title: "Tahel Events",
		description:
			"Tahel Events is a platform designed to streamline event planning and coordination with ease.",
		link: "#",
	},
	{
		imageUrl: app2,
		title: "Score Predictor",
		description:
			"Score Predictor is a football prediction game for Euro Championship 2024",
		link: "#",
	},
	{
		imageUrl: app4,
		title: "Shift Management",
		description:
			"Shift Management is a solution tailored to simplify scheduling and workforce organization.",
		link: "#",
	},
];

