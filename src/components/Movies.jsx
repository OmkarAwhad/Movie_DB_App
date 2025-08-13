import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "./partials/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

function Movies() {
	document.title = "MovieDB | Movies";
	const navigate = useNavigate();
	const [category, setcategory] = useState("now_playing");
	const [movies, setmovies] = useState([]);
	const [page, setpage] = useState(1);
	const [hasMore, sethasMore] = useState(true);

	async function getMovies() {
		try {
			const response = await axios.get(
				`movie/${category}?page=${page}`
			);
			if (response.data.results.length > 0) {
				setmovies((prev) => [...prev, ...response.data.results]);
				setpage((prev) => prev + 1);
			} else {
				sethasMore(false);
			}
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	const refreshHandler = () => {
		if (movies.length === 0) {
			getMovies();
		} else {
			setpage(1);
			setmovies([]);
			getMovies();
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
					Movies
				</h1>

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto lg:w-[70%]">
					<div className="flex-1 sm:flex-auto">
						<TopNav placeholder={"Search Movie"} />
					</div>
					<div className="w-full sm:w-auto">
						<Dropdown
							title="Category"
							options={[
								"now_playing",
								"popular",
								"top_rated",
								"upcoming",
							]}
							func={(e) => setcategory(e.target.value)}
						/>
					</div>
				</div>
			</div>

			{/* Infinite Scroll Container */}
			<InfiniteScroll
				loader={<Loading />}
				dataLength={movies.length}
				next={getMovies}
				hasMore={hasMore}
				className="overflow-hidden"
			>
				<Card data={movies} title="movie" />
			</InfiniteScroll>
		</div>
	);
}

export default Movies;
