import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlogSite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="header flex justify-between bg-blue-950 h-14">
          <h3 className="font-bold text-3xl px-1 pt-2 text-white-500">Crafty._.Wishes</h3>
          <nav>
            <ul className="flex space-x-4 pt-4 px-4">
              <li className="hover:text-cyan-600">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-cyan-600">
                <Link href="#">Course</Link>
              </li>
              <li className="hover:text-cyan-600">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="hover:text-cyan-600">
                <Link href="#">About</Link>
              </li>
              <li className="hover:text-cyan-600">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </section>
        {children}
        <section>
          <footer className="bg-purple-950">
            <h1 className="text-white text-center font-bold pb-8 pt-4 text-2xl">Follow us</h1>
            <p className="text-center text-sm">COPYRIGHT © 2023 CRAFTY._.WISHES.ALL RIGHT RESERVED.</p>
          </footer>
        </section>
      </body>
    </html>
  );
}
