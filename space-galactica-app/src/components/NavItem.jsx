import Link from "next/link";
import styles from "./Navbar.module.css";

export function NavItem({ title, link, index }) {
    return (
        <Link href={link}>
            <b>{index}</b> {title}
        </Link>
    );
}
