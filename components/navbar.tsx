"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavProps = {
	onLinkClick: () => void;
};

export default function Navbar() {
	const [isActive, setIsActive] = useState(false);

	const handleLinkClick = () => {
		setIsActive(false);
	};

	return (
		<>
			<div
				onClick={() => setIsActive(!isActive)}
				className="fixed right-0 m-5 z-50 w-20 h-20 rounded-full bg-blue-600 cursor-pointer flex items-center justify-center"
			>
				<div className={`relative w-full ${isActive ? "burger-active" : ""}`}>
					<div
						className="block h-[1px] w-[40%] bg-white m-auto transition-transform duration-300"
						style={{
							position: "relative",
							top: isActive ? "-1px" : "5px",
							transform: isActive ? "rotate(-45deg)" : "none",
						}}
					></div>

					<div
						className="block h-[1px] w-[40%] bg-white m-auto transition-transform duration-300"
						style={{
							position: "relative",
							top: isActive ? "0px" : "-5px",
							transform: isActive ? "rotate(45deg)" : "none",
						}}
					></div>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && <Nav onLinkClick={handleLinkClick} />}
			</AnimatePresence>
		</>
	);
}

function Nav({ onLinkClick }: NavProps) {
	const navItems = [
		{ title: "Nadia Husna", href: "nadia" },
		{ title: "Nurjeha", href: "nurjeha" },
		{ title: "Zuhayra Nasrin", href: "zuhayra" },
		{ title: "Farah Hazwanie", href: "farah" },
	];

	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	const menuSlide = {
		initial: { opacity: 0, x: 100 },
		enter: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 100 },
	};

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 right-0 h-screen md:w-[30vw] w-3/4 bg-black text-white z-30"
		>
			<div className="box-border h-full py-20 px-14 flex flex-col justify-between">
				<div
					onMouseLeave={() => setSelectedIndicator(pathname)}
					className="flex flex-col mt-20 text-3xl md:text-5xl gap-3"
				>
					<div className="uppercase text-gray-500 border-b border-gray-500 mb-10 text-5xl">
						<p>Candidate</p>
					</div>
					<Link
						href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
						className={`text-white font-light text-lg md:text-4xl  mb-5 hover:underline`}
						onMouseEnter={() => setSelectedIndicator("/")}
						onClick={onLinkClick}
					>
						Home
					</Link>

					{navItems.map((data, index) => (
						<Link
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/candidate/${data.href}`}
							key={index}
							className={`text-white font-light text-lg md:text-4xl mb-5 hover:underline ${ 	
								selectedIndicator === data.href ? "font-bold" : ""
							}`}
							onMouseEnter={() => setSelectedIndicator(data.href)}
							onClick={onLinkClick}
						>
							{data.title}
						</Link>
					))}
				</div>
			</div>
			<Curve />
		</motion.div>
	);
}

function Curve() {
	const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
		window.innerHeight
	} Q-100 ${window.innerHeight / 2} 100 0`;
	const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
		window.innerHeight
	} Q100 ${window.innerHeight / 2} 100 0`;

	const curve = {
		initial: {
			d: initialPath,
		},
		enter: {
			d: targetPath,
			transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: initialPath,
			transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
		},
	};

	return (
		<svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#000000]">
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			></motion.path>
		</svg>
	);
}
