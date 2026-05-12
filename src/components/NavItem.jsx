import Link from "next/link";

export function NavItem({ title, link, index }) {
    return (
        <Link href={link}>
            <b>{index}</b> {title}
        </Link>
    );
}
