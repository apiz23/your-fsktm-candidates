"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FadeText } from "./ui/fade-text";
import yfc from "@/public/images/yfc-logo.png";
import { Progress } from "./ui/progress";

const opacity = {
	initial: { opacity: 0 },
	enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
	exit: { opacity: 0, transition: { duration: 0.5 } },
};

const slideUp = {
	initial: { top: 0 },
	exit: {
		top: "-100vh",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
	},
};

export function Preloader() {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight });

		const timer = setInterval(() => {
			setProgress((prev) => (prev < 100 ? prev + 20 : 100));
		}, 400);

		return () => clearInterval(timer);
	}, []);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
		dimension.height
	}  L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="fixed inset-0 flex flex-col items-center justify-center z-50"
		>
			{dimension.width > 0 && (
				<>
					<motion.div
						variants={opacity}
						initial="initial"
						animate="enter"
						exit="exit"
						className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative z-50"
					>
						<Image
							src={yfc}
							alt="logo"
							width="100"
							height="100"
							className="mx-auto mb-10"
						/>
						<div className="text-center md:flex md:space-y-0 space-y-5 md:space-x-5">
							<FadeText
								className="text-4xl font-bold text-black dark:text-white"
								direction="up"
								framerProps={{
									show: { transition: { delay: 0.2 } },
								}}
								text="Your"
							/>
							<FadeText
								className="text-4xl font-bold text-black dark:text-white"
								direction="up"
								framerProps={{
									show: { transition: { delay: 0.4 } },
								}}
								text="FSKTM"
							/>
							<FadeText
								className="text-4xl font-bold text-black dark:text-white"
								direction="up"
								framerProps={{
									show: { transition: { delay: 0.6 } },
								}}
								text="Candidates"
							/>
						</div>
						<Progress value={progress} className="w-full mt-6" />
					</motion.div>

					<svg
						className="absolute top-0 w-full"
						style={{ height: `calc(100% + 300px)` }}
					>
						<motion.path
							variants={curve}
							initial="initial"
							exit="exit"
							fill="#7AB2D3"
						></motion.path>
					</svg>
				</>
			)}
		</motion.div>
	);
}

export default function Loader() {
	const [isLoading, setIsLoading] = useState(() => {
		if (typeof window !== "undefined") {
			return sessionStorage.getItem("isLoading") !== "false";
		}
		return true;
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const isLoadingSession = sessionStorage.getItem("isLoading");
			if (isLoadingSession === "false") {
				setIsLoading(false);
			} else {
				const timer = setTimeout(() => {
					setIsLoading(false);
					sessionStorage.setItem("isLoading", "false");
				}, 3000);
				return () => clearTimeout(timer);
			}
		}
	}, []);

	return (
		<AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
	);
}
