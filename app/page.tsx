"use client";

import Image from "next/image";
import fsktmlogo from "@/public/images/fsktmlogo.png";
import mpps from "@/public/images/mppCandidates.png";
import mpps2 from "@/public/images/mppCandidates2.png";
import Link from "next/link";
import { ContainerScroll } from "@/components/container-scroll-anim";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import SparklesText from "@/components/ui/sparkles-text";

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const targetDate = new Date("2024-11-14T10:00:00").getTime();

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setTimeLeft({ days, hours, minutes, seconds });

			if (difference <= 0) {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);
	return (
		<>
			<div className="flex flex-col overflow-hidden bg-gradient-to-b from-slate-300 via-red-100 to-blue-400">
				<ContainerScroll
					titleComponent={
						<>
							<Image
								src={fsktmlogo}
								alt="logo"
								width={500}
								height={500}
								className="mx-auto mb-10 md:w-[40vw] w-[80vw]"
							/>
							<h1 className="text-4xl md:text-5xl font-semibold text-black dark:text-white px-5 uppercase">
								FSKTM{"'"}s Visionary Voices
								<br />
								<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
									👩‍🎓
								</span>
							</h1>
						</>
					}
				>
					<Image
						src={isMobile ? mpps2 : mpps}
						alt="hero"
						height={1920}
						width={1080}
						className="mx-auto rounded-2xl object-cover h-full"
						draggable={false}
					/>
				</ContainerScroll>
			</div>
			<div className="min-h-screen bg-gradient-to-t from-slate-300 via-red-100 to-blue-400 p-4">
				<div className="max-w-5xl pt-36 mx-auto">
					<div className="block justify-end">
						<SparklesText
							text="Fsktm SRC Candidates"
							className="scroll-m-20 uppercase md:text-5xl text-4xl font-extrabold tracking-wide lg:text-7xl text-center px-10"
						/>
						<div className="max-w-2xl mx-auto my-6">
							<h3 className="scroll-m-20 text-lg text-neutral-700 font-normal text-center tracking-tight">
								Representing FSKTM as candidates for UTHM{"'"}s student council,
								dedicated to supporting and empowering our faculty community.
							</h3>
						</div>
						<div className="flex justify-center">
							<Link
								className="group relative inline-block focus:outline-none focus:ring"
								href="/candidate/nadia"
							>
								<span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
								<span className="relative inline-block border-4 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
									View Candidates
								</span>
							</Link>
						</div>
					</div>
					<div className="text-center my-20">
						<h2 className="md:text-5xl text-4xl font-bold">
							Countdown to Election Day
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-6 text-lg font-semibold px-2">
							<div className="p-4 bg-white shadow-md rounded-lg">
								{timeLeft.days} <span className="block text-sm">Days</span>
							</div>
							<div className="p-4 bg-white shadow-md rounded-lg">
								{timeLeft.hours} <span className="block text-sm">Hours</span>
							</div>
							<div className="p-4 bg-white shadow-md rounded-lg">
								{timeLeft.minutes} <span className="block text-sm">Minutes</span>
							</div>
							<div className="p-4 bg-white shadow-md rounded-lg">
								{timeLeft.seconds} <span className="block text-sm">Seconds</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <header className="w-full h-12 p-2 bg-transparent hidden md:block fixed z-10 top-5 left-0">
				<Image
					src={uthmlogo}
					alt="logo"
					width={200}
					height={200}
					className="mx-auto mb-10"
				/>
			</header>
			<div
				className="min-h-screen md:p-0 p-4 bg-cover bg-no-repeat bg-right md:bg-center"
				style={{ backgroundImage: `url(${fsktmbg.src})` }}
			>
				<div className="grid grid-cols-12">
					<div className="md:col-span-6"></div>
					<div className="col-span-12 md:col-span-6 max-w-5xl pt-28 md:pt-36">
						<div className="block justify-end">
							<Image
								src={fsktmlogo}
								alt="logo"
								width={600}
								height={600}
								className="mx-auto mb-14"
							/>
							<h1 className="scroll-m-20 uppercase text-3xl font-extrabold tracking-tight lg:text-5xl text-center">
								Fsktm Mpp Candidate
							</h1>
							<div className="max-w-2xl mx-auto my-6 rounded-lg bg-black p-4 bg-opacity-40">
								<h3 className="scroll-m-20 text-lg text-neutral-200 font-normal text-center tracking-tight">
									Representing FSKTM as candidates for UTHM{"'"}s student council,
									dedicated to supporting and empowering our faculty community.
								</h3>
							</div>
							<div className="flex justify-center">
								<Link
									className="group relative inline-block focus:outline-none focus:ring"
									href="/candidate/nadia"
								>
									<span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
									<span className="relative inline-block border-4 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
										View Candidates
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}
