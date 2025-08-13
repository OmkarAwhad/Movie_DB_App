import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
	return (
		<div
			style={{
				background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
					data.backdrop_path || data.poster_path
				})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-end p-4 sm:p-6 lg:p-10"
		>
			<div className="w-full sm:w-3/4 lg:w-1/2">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black my-4 sm:my-6 lg:my-8 leading-tight">
					{data.title ||
						data.name ||
						data.original_name ||
						data.original_title}
				</h1>
				<h1 className="my-2 sm:my-3 text-sm sm:text-base lg:text-lg line-clamp-3 sm:line-clamp-none">
					{data.overview.substr(0, 150)}...
					<Link
						to={`${data.media_type}/details/${data.id}`}
						className="text-blue-400 ml-1 hover:text-blue-300"
					>
						read more
					</Link>
				</h1>
				<div className="flex flex-wrap items-center mb-4 sm:mb-6 gap-2 sm:gap-4 text-sm sm:text-base">
					<div className="flex items-center">
						<i className="text-yellow-400 font-semibold mr-1 ri-megaphone-fill"></i>
						{data.release_date ? (
							<h1 className="font-semibold">
								{data.release_date}
							</h1>
						) : (
							<h1>N.A.</h1>
						)}
					</div>
					<div className="flex items-center">
						<i className="text-yellow-400 font-semibold mr-1 ri-album-fill"></i>
						<h1 className="font-semibold capitalize">
							{data.media_type}
						</h1>
					</div>
				</div>
				<Link
					to={`/movie/details/${data.id}/trailer`}
					className="bg-[#6556CD] px-4 sm:px-6 py-2 sm:py-3 rounded-md text-zinc-200 hover:bg-[#7d6bf5] font-bold hover:text-white duration-300 text-sm sm:text-base inline-block"
				>
					Watch Trailer
				</Link>
			</div>
		</div>
	);
}

export default Header;
