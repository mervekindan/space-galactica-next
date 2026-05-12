import Link from "next/link";

export function PageLink({ href, title }) {
    return <Link href={href}>{title}</Link>;
}
