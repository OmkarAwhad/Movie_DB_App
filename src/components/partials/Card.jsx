import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/noimage.jpg";

function Card({ data, title }) {
	console.log(title);
	return (
		<div className="w-full h-full bg-[#1F1E24] px-2 sm:px-4 lg:px-[5%]">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 w-full max-w-7xl mx-auto">
				{data.map((item, index) => {
					return (
						<Link
							to={`/${item.media_type || title}/details/${
								item.id
							}`}
							key={index}
							className="relative mb-4 sm:mb-5 group"
						>
							<div className="aspect-[3/4] w-full">
								<img
									src={
										item.backdrop_path ||
										item.poster_path ||
										item.profile_path
											? `https://image.tmdb.org/t/p/original/${
													item.backdrop_path ||
													item.poster_path ||
													item.profile_path
											  }`
											: noImage
									}
									alt=""
									className="w-full h-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<h1 className="font-bold text-sm sm:text-base lg:text-lg px-1 sm:px-2 lg:px-3 py-1 line-clamp-2">
								{item.title ||
									item.name ||
									item.original_name ||
									item.original_title}
							</h1>

							{item.vote_average && (
								<div className="absolute -right-2 sm:-right-3 lg:-right-4 font-bold text-xs sm:text-sm lg:text-base top-1/2 sm:top-2/3 bg-yellow-500 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full">
									{(
										item.vote_average * 10
									).toFixed()}
									<sup className="text-xs">%</sup>
								</div>
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Card;
