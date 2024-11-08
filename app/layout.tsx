import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Script from "next/script";
import Loader from "@/components/loader";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Your FSKTM Candidate",
	description:
		"Meet and support the future leaders from FSKTM - your trusted student representatives.",
	viewport: "width=device-width, initial-scale=1",
	icons: {
		icon: [
			{
				url: "/favicon.ico",
				href: "/favicon.ico",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<Script src="https://www.tiktok.com/embed.js" strategy="afterInteractive" />
				<Script
					src="https://www.instagram.com/embed.js"
					strategy="afterInteractive"
				/>
			</head>
			<body className={`${poppins.className} antialiased`}>
				<Loader />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
