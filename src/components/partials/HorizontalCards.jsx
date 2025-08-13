import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/noimage.jpg";

function HorizontalCards({ data }) {
	return (
		<div className="flex gap-2 sm:gap-3 h-[45vh] sm:h-[50vh] lg:h-[54vh] px-2 sm:px-4 lg:px-5 py-3 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800">
			{data.map((item, index) => {
				return (
					<Link
						to={`/${item.media_type}/details/${item.id}`}
						key={index}
						className="min-w-[40vw] sm:min-w-[30vw] md:min-w-[25vw] lg:min-w-[20vw] xl:min-w-[16vw] min-h-[40vh] sm:min-h-[45vh] bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
					>
						<img
							src={
								item.backdrop_path || item.poster_path
									? `https://image.tmdb.org/t/p/original/${
											item.backdrop_path ||
											item.poster_path
									  }`
									: noImage
							}
							className="h-[25vh] sm:h-[28vh] lg:h-[30vh] w-full object-cover"
							alt=""
						/>
						<div className="p-2 sm:p-3">
							<h1 className="text-sm sm:text-base lg:text-lg font-bold my-1 line-clamp-2">
								{item.title ||
									item.name ||
									item.original_name ||
									item.original_title}
							</h1>
							<p className="text-xs sm:text-sm font-medium line-clamp-3">
								{item.overview.substr(0, 80)}...
								<span className="text-zinc-400 text-xs">
									more
								</span>
							</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default HorizontalCards;
