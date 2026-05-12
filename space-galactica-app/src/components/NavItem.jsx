import Link from "next/link";
import styles from "./Navbar.module.css";

export function NavItem({ title, link, isActive, index }) {
    return (
        <Link href={link} className={styles.navbarLinks}>
            <b>{index}</b> {title}
        </Link>
    );
}
