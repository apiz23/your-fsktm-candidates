"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import nurjeha1 from "@/public/images/Nurjeha/1.jpg";
import nurjeha2 from "@/public/images/Nurjeha/2.jpg";
import nurjeha3 from "@/public/images/Nurjeha/3.jpg";
import { X } from "lucide-react";
import { Maven_Pro } from "next/font/google";
import { Separator } from "@/components/ui/separator";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function Farah() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,

		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

	const container1 = useRef<HTMLDivElement>(null);
	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: container1,
		offset: ["start end", "end start"],
	});
	const y2 = useTransform(scrollYProgress1, [0, 1], ["-10%", "10%"]);

	return (
		<>
			<div
				ref={container}
				className="h-screen overflow-hidden grid grid-cols-1 md:grid-cols-10 gap-4 bg-[#bb3030]"
			>
				<div className="pt-20 md:pt-0  col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-3 px-20 md:flex items-center justify-center text-black bg-[#f18989]">
					<h1 className="col-span-1 text-center text-3xl md:text-5xl lg:text-7xl w-fit md:max-w-[30vw] font-bold md:text-left space-y-3">
						Choose Progress, Choose Nurjeha
					</h1>
					<Separator
						orientation="vertical"
						className="mx-10 md:flex hidden h-[20vh] bg-gray-700 w-[2px]"
					/>
					<X className="col-span-1 h-20 md:h-32 w-20 md:w-32 text-gray-800 border-b-2 border-gray-600 mx-auto" />
				</div>

				<motion.div
					style={{ y: y }}
					className="col-span-1 md:col-span-5 relative h-full flex items-center justify-center bg-[#bb3030] p-4"
				>
					<Image
						src={nurjeha1}
						alt="image"
						width={500}
						height={500}
						className="object-contain bg-black rounded-xl md:h-[50vh] w-fit"
						style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px" }}
					/>
				</motion.div>
			</div>

			<div className="flex justify-center my-40">
				<p
					className={`${mavenPro.className} antialiased text-[10vw] md:text-[7.5vw] uppercase text-center max-w-[60vw] md:max-w-[50vw] leading-none`}
				>
					NURJEHA BINTI ALIAS
				</p>
			</div>
			<div
				ref={container1}
				className="flex items-center justify-center h-screen overflow-hidden bg-[#5D1E20]"
				style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
			>
				<div className="fixed top-[-10vh] left-0 h-[120vh] w-ful grid grid-cols-1 md:grid-cols-12 md:px-10">
					<motion.div
						style={{ y: y2 }}
						className="col-span-7 flex items-center justify-center md:p-10 p-4 gap-4"
					>
						<Carousel>
							<CarouselContent className="md:pt-0 pt-32">
								<CarouselItem className="md:basis-1/2">
									<Image
										src={nurjeha2}
										alt="image"
										className="object-cover rounded-xl"
										width={500}
										height={500}
									/>
								</CarouselItem>
								<CarouselItem className="md:basis-1/2">
									<Image
										src={nurjeha3}
										alt="image"
										className="object-cover rounded-xl"
										width={500}
										height={500}
									/>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</motion.div>

					<div className="col-span-5 md:flex md:flex-col justify-center text-center px-10">
						<div className="uppercase space-y-4 mb-10 text-white">
							<p className="text-[8vw] md:text-[3vw] text-center font-bold ">
								Aspirasi Merealisasi Realiti
							</p>
							<p className="text-[4vw] md:text-[2vw] font-semibold">Code: 102</p>
						</div>
						<div className="flex flex-wrap justify-center gap-3 md:mb-0 mb-20 md:mt-0 mt-10">
							<Badge variant="default" className="md:text-lg bg-red-500">
								#VoteforJEHA
							</Badge>
							<Badge variant="default" className="md:text-lg bg-yellow-500">
								#JehaOnDutyGuaranteePuasHati
							</Badge>
							<Badge variant="default" className="md:text-lg bg-blue-500">
								#JPMPPUTHM
							</Badge>
							<Badge variant="default" className="md:text-lg bg-green-500">
								#PMPPUTHM24/25
							</Badge>
							<Badge variant="default" className="md:text-lg bg-yellow-500">
								#ONnProgressif
							</Badge>
							<Badge variant="default" className="md:text-lg bg-red-500">
								#GraduanCemerlang
							</Badge>
							<Badge variant="default" className="md:text-lg bg-blue-500">
								#GraduanBerkemahiran
							</Badge>
						</div>
					</div>
				</div>
			</div>
			<div className="min-h-screen bg-slate-300 pt-44 md:px-0 px-4 md:pb-0 pb-10">
				<h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-20">
					Get to Know Your Candidate Better
				</h1>
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-20">
					<div className="col-span-1">
						<div className="flex gap-5 mb-3">
							<AiFillInstagram className="h-10 w-10" />
							<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] inline-block text-transparent bg-clip-text">
								Instagram
							</h2>
						</div>
						<div className="overflow-hidden relative w-full h-[400px] md:h-[470px] rounded-lg">
							<iframe
								src="https://www.instagram.com/_nrjeha/embed"
								style={{ width: "100%", height: "100%", border: "none" }}
								title="Instagram Profile"
								allowTransparency={true}
							/>
						</div>
					</div>
					<div className="col-span-1">
						<div className="flex gap-5 mb-3">
							<AiFillTikTok className="h-10 w-10" />
							<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-[#69C9D0] via-[#010101] to-[#EE1D52] inline-block text-transparent bg-clip-text">
								TikTok
							</h2>
						</div>
						<blockquote
							className="tiktok-embed max-w-[780px] min-w-[288px] rounded-lg"
							cite="https://www.tiktok.com/@_nrjeha"
							data-unique-id="_nrjeha"
							data-embed-type="creator"
						>
							<section>
								<Link
									target="_blank"
									href="https://www.tiktok.com/@_nrjeha?refer=creator_embed"
								>
									@cunerrs
								</Link>
							</section>
						</blockquote>
					</div>
				</div>
			</div>
		</>
	);
}
