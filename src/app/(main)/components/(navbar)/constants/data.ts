export const navLinks: NavigationLinkType[] = [
    { href: `#about`, label: "About" },
    { href: `#services`, label: "Services" },
    { href: `#pricing`, label: "Pricing" },
    { href: `#contact`, label: "Contact" },
];

export type NavigationLinkType = {
    href: string,
    label: string;
}