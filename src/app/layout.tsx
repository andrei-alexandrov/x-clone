import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X clone",
  description: "A clone of the X website, created with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-container">
          <Sidebar />
          {children}
          <News />
        </div>
      </body>
    </html>
  );
}
