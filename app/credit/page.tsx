import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Credit() {
	return (
		<div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center p-6">
			<div className="text-center mb-8">
				<h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0">
					Credits
				</h2>
				<p className="text-xl text-muted-foreground mt-2">
					DI230052 | AA210392 | MJ195345 | JG160007
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
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

				<div className="flex flex-col items-center text-center">
					<Link
						href="piz230601@gmail.com"
						className="text-4xl text-gray-800 hover:text-black transition-colors"
					>
						<FaEnvelope />
					</Link>
					<p className="mt-2 text-lg">Email</p>
				</div>
			</div>
		</div>
	);
}
