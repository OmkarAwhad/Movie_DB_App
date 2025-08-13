import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noImage from "../../../public/noimage.jpg";

function TopNav({ placeholder }) {
	const [query, setQuery] = useState("");
	const [searches, setSearches] = useState([]);

	const getData = async () => {
		try {
			const response = await axios.get(`/search/multi?query=${query}`);
			setSearches(response.data.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, [query]);

	return (
		<div className="w-full h-auto lg:h-[10vh] px-4 lg:px-0">
			<div className="flex items-center mt-3 ml-0 lg:ml-20">
				<i className="text-xl lg:text-2xl ri-search-line"></i>
				<input
					type="text"
					placeholder={placeholder}
					value={query}
					name="query"
					onChange={(e) => setQuery(e.target.value)}
					className="w-full lg:w-2/3 p-2 lg:p-3 mx-2 text-base lg:text-xl font-semibold text-zinc-200 outline-none bg-transparent"
				/>
				{query.length > 0 && (
					<i
						onClick={() => setQuery("")}
						className="text-xl lg:text-2xl ri-close-large-fill cursor-pointer hover:text-red-400"
					></i>
				)}
			</div>

			<div className="z-[100] relative w-full lg:w-[47%] max-h-[40vh] left-0 lg:left-[10%] lg:ml-[10%] overflow-auto mt-2">
				{searches.length > 0 &&
					searches.map((item, index) => {
						return (
							<Link
								to={`${item.media_type}/details/${item.id}`}
								key={index}
								className="border-b-2 duration-200 mt-[1px] text-zinc-300 hover:text-zinc-200 bg-zinc-600 border-zinc-400 hover:bg-zinc-400 p-3 lg:p-4 rounded flex items-center gap-3 lg:gap-4"
							>
								<img
									src={
										item.backdrop_path ||
										item.profile_path
											? `https://image.tmdb.org/t/p/original/${
													item.backdrop_path ||
													item.profile_path
											  }`
											: noImage
									}
									className="h-16 w-20 lg:h-20 lg:w-28 object-cover rounded shadow-lg flex-shrink-0"
									alt=""
								/>
								<h1 className="font-bold text-sm lg:text-base line-clamp-2">
									{item.title ||
										item.name ||
										item.original_title ||
										item.original_name}
								</h1>
							</Link>
						);
					})}
			</div>
		</div>
	);
}

export default TopNav;
