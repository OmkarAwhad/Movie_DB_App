import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

function Home() {
	const [wallpaper, setWallpaper] = useState(null);
	const [trending, setTrending] = useState([]);
	const [filter, setFilter] = useState("all");

	async function getWallpaper() {
		try {
			const response = await axios.get(`/trending/all/day`);
			let randomData =
				response.data.results[
					Math.floor(
						Math.random() * response.data.results.length
					)
				];
			setWallpaper(randomData);
		} catch (error) {
			console.log(error);
		}
	}

	async function getTrending() {
		try {
			const response = await axios.get(`/trending/${filter}/day`);
			setTrending(response.data.results);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getTrending();
		!wallpaper && getWallpaper();
	}, [filter]);

	return wallpaper ? (
		<div className="flex flex-col lg:flex-row min-h-screen">
			<SideNav />
			<div className="w-full lg:w-[80%] overflow-y-auto overflow-x-hidden min-h-screen lg:ml-0 pt-16 lg:pt-0">
				<TopNav placeholder={"Search Movie or TV show"} />
				<Header data={wallpaper} />
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 lg:px-5 py-4 gap-3 sm:gap-0">
					<h1 className="font-bold text-zinc-300 text-lg sm:text-xl">
						Trending
					</h1>
					<Dropdown
						title="Filter"
						options={["tv", "movie", "all"]}
						func={(e) => setFilter(e.target.value)}
					/>
				</div>
				<HorizontalCards data={trending} />
			</div>
		</div>
	) : (
		<Loading />
	);
}

export default Home;
