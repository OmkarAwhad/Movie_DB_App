import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-[rgba(0,0,0,0.7)] px-4">
			<img
				src="/gif/404.gif"
				alt="404 Not Found"
				className="h-[30vh] sm:h-[40vh] lg:h-[50vh] w-auto object-contain mb-4"
			/>
			<div className="text-center">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
					Page Not Found
				</h1>
				<p className="text-base sm:text-lg text-zinc-300 mb-6">
					The page you're looking for doesn't exist.
				</p>
				<Link
					to="/"
					className="bg-[#6556CD] hover:bg-[#7d6bf5] px-6 py-3 rounded-md text-white font-semibold transition-colors duration-300 inline-block"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
}

export default Notfound;
