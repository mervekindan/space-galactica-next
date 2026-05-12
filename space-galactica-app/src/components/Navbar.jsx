"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import styles from "./Navbar.module.css";
import { NavItem } from "./NavItem";
import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext.jsx";

export const navbarItems = [
    { id: 1, title: "ABOUT US", link: "/about_us" },
    { id: 2, title: "DESTINATION", link: "/destination" },
    { id: 3, title: "NASA COLLABORATION", link: "/nasa_collaboration" },
];

export const Navbar = () => {
    const currentPath = usePathname();
    const { wishlistCount } = useContext(WishlistContext);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.navbarLogo}>
                <a href="/">
                    <img src="/shared/logo.svg" alt="" /> GALACTICA
                </a>
            </div>
            <div className={styles.decorativeLine} />
            <nav className={styles.navbar}>
                <div className={styles.navbarBG} />
                <ul className={styles.navbarList}>
                    {navbarItems.map((item, index) => (
                        <li
                            key={item.id}
                            className={classNames(styles.navbarLinks, {
                                [styles.isLinkActive]:
                                    item.link === currentPath,
                            })}
                        >
                            <NavItem
                                title={item.title}
                                link={item.link}
                                index={`0${index + 1}`}
                            />
                        </li>
                    ))}
                    <li
                        className={styles.wishlistBadge}
                        aria-label="Wishlist"
                    ></li>
                </ul>
                <Badge count={wishlistCount}>
                    <Planet color="white" />
                </Badge>
            </nav>
        </header>
    );
};
