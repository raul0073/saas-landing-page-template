const url = `https://rmstudio.vercel.app`
export const navLinks: NavigationLinkType[] = [
    { href: `${url}/#about`, label: "About" },
    { href: `${url}/#services`, label: "Services" },
    { href: `${url}/#pricing`, label: "Pricing" },
    { href: `${url}/#contact`, label: "Contact" },
];

export type NavigationLinkType = {
    href: string,
    label: string;
}