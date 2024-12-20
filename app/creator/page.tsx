import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TechVentura from "@/public/images/tech-ventura.png";

export default function Creator() {
	return (
		<div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center p-6">
			<div className="text-center mb-8">
				<h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
					Creator 🙋🏻‍♂️
				</h2>
				<p className="text-xl text-muted-foreground mt-2">
					DI230052 | AA210392 | MJ195345 | JG160007
				</p>
			</div>
			<div className="grid grid-cols-2 gap-8 mt-10">
				<div className="flex flex-col items-center text-center">
					<Link
						href="https://github.com/apiz23"
						target="_blank"
						rel="noopener noreferrer"
						className="text-4xl text-gray-800 hover:text-black transition-colors"
					>
						<FaGithub />
					</Link>
					<p className="mt-2 text-lg">GitHub</p>
				</div>

				<div className="flex flex-col items-center text-center">
					<Link
						href="https://www.linkedin.com/in/muh-hafizuddin"
						target="_blank"
						rel="noopener noreferrer"
						className="text-4xl text-blue-700 hover:text-blue-900 transition-colors"
					>
						<FaLinkedin />
					</Link>
					<p className="mt-2 text-lg">LinkedIn</p>
				</div>
			</div>
			<div className="flex flex-col items-center pt-6">
				<Image
					src={TechVentura}
					alt="Tech Ventura Logo"
					className="h-12 w-12"
					width={48}
					height={48}
				/>
				<p className="mt-2 text-md font-semibold text-gray-600">Tech Ventura</p>
				<p className="mt-1 text-xs text-gray-600">
					© 2024 Tech Ventura. All rights reserved.
				</p>
			</div>
		</div>
	);
}
