import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile menu button */}
			<button
				className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#6556CD] rounded-md"
				onClick={() => setIsOpen(!isOpen)}
			>
				<i
					className={`text-white text-xl ${
						isOpen ? "ri-close-line" : "ri-menu-line"
					}`}
				></i>
			</button>

			{/* Overlay for mobile */}
			{isOpen && (
				<div
					className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
					onClick={() => setIsOpen(false)}
				></div>
			)}

			{/* Sidebar */}
			<div
				className={`
        fixed lg:static top-0 left-0 w-64 lg:w-[20%] h-screen 
        border-r border-zinc-300 flex flex-col gap-y-4 p-3 bg-[#1F1E24]
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:transform-none transition-transform duration-300 ease-in-out z-40
      `}
			>
				<h1 className="text-[#6556CD] text-xl lg:text-2xl px-2 lg:px-5 mt-12 lg:mt-0">
					<i className="ri-tv-2-fill"></i>
					<span className="font-black text-white pl-2">
						SCSDB.
					</span>
				</h1>

				<nav className="w-full flex flex-col gap-2">
					<h1 className="text-base lg:text-lg font-bold font-sans px-2">
						New Feeds
					</h1>
					<Link
						to="/trending"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-fire-fill"></i>
						Trending
					</Link>
					<Link
						to="/popular"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-bard-fill"></i>
						Popular
					</Link>
					<Link
						to="/movie"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-movie-fill"></i>
						Movies
					</Link>
					<Link
						to="/tv"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-tv-line"></i>
						TV Shows
					</Link>
					<Link
						to="/person"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-team-fill"></i>
						People
					</Link>
				</nav>

				<hr className="border border-zinc-400 mx-2" />

				<nav className="w-full flex flex-col gap-2">
					<h1 className="text-base lg:text-lg font-bold font-sans px-2">
						Website Information
					</h1>
					<Link
						to="/about"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-information-fill"></i>
						About SCSDB
					</Link>
					<Link
						to="/contactUs"
						className="py-3 lg:py-4 pl-6 lg:pl-8 w-full hover:bg-[#6556CD] font-bold rounded-md duration-200 text-base lg:text-lg"
						onClick={() => setIsOpen(false)}
					>
						<i className="mr-3 lg:mr-4 ri-phone-fill"></i>
						Contact Us
					</Link>
				</nav>
			</div>
		</>
	);
}

export default SideNav;
