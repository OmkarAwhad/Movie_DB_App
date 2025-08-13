import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "./partials/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

function Trending() {
	const navigate = useNavigate();
	const [category, setcategory] = useState("all");
	const [duration, setduration] = useState("day");
	const [trending, setTrending] = useState([]);
	const [page, setpage] = useState(1);
	const [hasMore, sethasMore] = useState(true);
	document.title = "MovieDB | Trending";

	async function getTrending() {
		try {
			const response = await axios.get(
				`/trending/${category}/${duration}?page=${page}`
			);
			if (response.data.results.length > 0) {
				setTrending((prev) => [...prev, ...response.data.results]);
				setpage((prev) => prev + 1);
			} else {
				sethasMore(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	const refreshHandler = () => {
		if (trending.length === 0) {
			getTrending();
		} else {
			setpage(1);
			setTrending([]);
			getTrending();
		}
	};

	useEffect(() => {
		refreshHandler();
	}, [category, duration]);

	return (
		<div className="w-full min-h-screen">
			{/* Header with Navigation */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 lg:px-[5%] py-4 justify-between gap-4">
				<h1 className="text-xl sm:text-2xl font-semibold text-zinc-200 flex items-center">
					<i
						onClick={() => navigate(-1)}
						className="hover:text-[#6556CD] mr-2 duration-150 cursor-pointer text-xl sm:text-2xl ri-arrow-left-line"
					></i>
					Trending
				</h1>

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto lg:w-[70%]">
					<div className="flex-1 sm:flex-auto">
						<TopNav placeholder={"Search Movie or TV show"} />
					</div>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
						<Dropdown
							title="Category"
							options={["all", "movie", "tv"]}
							func={(e) => setcategory(e.target.value)}
						/>
						<Dropdown
							title="Duration"
							options={["week", "day"]}
							func={(e) => setduration(e.target.value)}
						/>
					</div>
				</div>
			</div>

			{/* Infinite Scroll Container */}
			<InfiniteScroll
				loader={<Loading />}
				dataLength={trending.length}
				next={getTrending}
				hasMore={hasMore}
				className="overflow-hidden"
			>
				<Card data={trending} title={category} />
			</InfiniteScroll>
		</div>
	);
}

export default Trending;
