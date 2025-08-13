import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "./partials/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

function TVshows() {
	document.title = "MovieDB | TV shows";
	const navigate = useNavigate();
	const [category, setcategory] = useState("airing_today");
	const [tvShows, settvShows] = useState([]);
	const [page, setpage] = useState(1);
	const [hasMore, sethasMore] = useState(true);

	async function getTvShows() {
		try {
			const response = await axios.get(`tv/${category}?page=${page}`);
			if (response.data.results.length > 0) {
				settvShows((prev) => [...prev, ...response.data.results]);
				setpage((prev) => prev + 1);
			} else {
				sethasMore(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	const refreshHandler = () => {
		if (tvShows.length === 0) {
			getTvShows();
		} else {
			setpage(1);
			settvShows([]);
			getTvShows();
		}
	};

	useEffect(() => {
		refreshHandler();
	}, [category]);

	return (
		<div className="w-full min-h-screen">
			{/* Header with Navigation */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 lg:px-[5%] py-4 justify-between gap-4">
				<h1 className="text-xl sm:text-2xl font-semibold text-zinc-200 flex items-center">
					<i
						onClick={() => navigate(-1)}
						className="hover:text-[#6556CD] mr-2 duration-150 cursor-pointer text-xl sm:text-2xl ri-arrow-left-line"
					></i>
					TV Shows
				</h1>

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto lg:w-[70%]">
					<div className="flex-1 sm:flex-auto">
						<TopNav placeholder={"Search TV Shows"} />
					</div>
					<div className="w-full sm:w-auto">
						<Dropdown
							title="Category"
							options={[
								"airing_today",
								"on_the_air",
								"top_rated",
								"popular",
							]}
							func={(e) => setcategory(e.target.value)}
						/>
					</div>
				</div>
			</div>

			{/* Infinite Scroll Container */}
			<InfiniteScroll
				loader={<Loading />}
				dataLength={tvShows.length}
				next={getTvShows}
				hasMore={hasMore}
				className="overflow-hidden"
			>
				<Card data={tvShows} title="tv" />
			</InfiniteScroll>
		</div>
	);
}

export default TVshows;
