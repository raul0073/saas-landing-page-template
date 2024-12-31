import { StaticImageData } from "next/image";
import eleven from "@/../public/customers/eleven.png";
import picmyderam from "@/../public/customers/pic.png";
import tahel from "@/../public/customers/tahel2.png";
import tiferet from "@/../public/customers/tiferet.png";


type CoopType = {
    name: string;
    logo: StaticImageData;
}
export const coopsList: CoopType[] = [
	{ name: "Eleven Academy", logo: eleven },
	{ name: "Tiferet Israel", logo: tiferet },
	{ name: "Pic My Dream", logo: picmyderam },
	{ name: "Tahel Events", logo: tahel },
];