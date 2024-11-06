import Image from "next/image";
import fsktmlogo from "@/public/images/fsktmlogo.png";
import uthmlogo from "@/public/images/uthmlogo.png";
import fsktmbg from "@/public/images/fsktm.jpg";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className="w-full h-12 p-2 bg-transparent hidden md:block fixed z-10 top-5 left-0">
				<Image
					src={uthmlogo}
					alt="logo"
					width={200}
					height={200}
					className="mx-auto mb-10"
				/>
			</header>
			<div
				className="min-h-screen md:p-0 p-4 bg-cover bg-right md:bg-center backdrop-blur-lg"
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
								height={300}
								className="w-fit mx-auto mb-14"
							/>
							<h1 className="scroll-m-20 uppercase text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
								Fsktm Mpp Candidate
							</h1>
							<div className="max-w-2xl mx-auto my-6 rounded-lg bg-black p-4 bg-opacity-60">
								<h3 className="scroll-m-20 text-xl text-gray-300 font-normal text-center tracking-tight">
									Representing FSKTM as candidates for UTHM{"'"}s student council, dedicated
									to supporting and empowering our faculty community.
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
			</div>
		</>
	);
}
