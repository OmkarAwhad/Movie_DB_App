import React, { useEffect, useState } from "react";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "./partials/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

function Popular() {
	document.title = "MovieDB | Popular";
	const navigate = useNavigate();
	const [category, setcategory] = useState("movie");
	const [popular, setPopular] = useState([]);
	const [page, setpage] = useState(1);
	const [hasMore, sethasMore] = useState(true);

	async function getPopular() {
		try {
			const response = await axios.get(
				`/${category}/popular?page=${page}`
			);
			if (response.data.results.length > 0) {
				setPopular((prev) => [...prev, ...response.data.results]);
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
		if (popular.length === 0) {
			getPopular();
		} else {
			setpage(1);
			setPopular([]);
			getPopular();
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
					Popular
				</h1>

				<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto lg:w-[70%]">
					<div className="flex-1 sm:flex-auto">
						<TopNav placeholder={"Search Movie or TV show"} />
					</div>
					<div className="w-full sm:w-auto">
						<Dropdown
							title="Category"
							options={["movie", "tv"]}
							func={(e) => setcategory(e.target.value)}
						/>
					</div>
				</div>
			</div>

			{/* Infinite Scroll Container */}
			<InfiniteScroll
				loader={<Loading />}
				dataLength={popular.length}
				next={getPopular}
				hasMore={hasMore}
				className="overflow-hidden"
			>
				<Card data={popular} title={category} />
			</InfiniteScroll>
		</div>
	);
}

export default Popular;
