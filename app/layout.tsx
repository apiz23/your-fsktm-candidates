import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Your FSKTM Candidate",
	description: "FSKTM Candidate Website",
};
<script async src="https://www.tiktok.com/embed.js"></script>;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
				<Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
			</head>
			<body className={`${poppins.className} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
