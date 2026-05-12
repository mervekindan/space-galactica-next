import "./globals.css";

import { Navbar } from "../../src/components/Navbar";
import { Footer } from "../../src/components/Footer";
import { WishlistProvider } from "@/contexts/WishlistContext";

export const metadata = {
    title: "Galactica",
    description: "Your space travel agency",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <WishlistProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </WishlistProvider>
            </body>
        </html>
    );
}
