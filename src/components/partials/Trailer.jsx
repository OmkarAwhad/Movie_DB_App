import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

function Trailer() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const category = pathname.includes("movie") ? "movie" : "tv";
	const ytvideo = useSelector((state) => state[category].info.videos);

	return ytvideo ? (
		<div className="fixed inset-0 flex w-full h-full z-[100] items-center justify-center bg-[rgba(0,0,0,0.8)] p-4">
			<Link
				onClick={() => navigate(-1)}
				className="absolute top-4 right-4 lg:top-7 lg:right-20 font-black text-xl lg:text-2xl text-white hover:text-red-400 z-10"
			>
				<i className="ri-close-large-fill"></i>
			</Link>
			<ReactPlayer
				controls
				width="100%"
				height="100%"
				style={{
					maxWidth: "90vw",
					maxHeight: "80vh",
				}}
				url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
			/>
		</div>
	) : (
		<div className="fixed inset-0 flex w-full h-full z-[100] items-center justify-center bg-[rgba(0,0,0,0.8)]">
			<Link
				onClick={() => navigate(-1)}
				className="absolute top-4 right-4 lg:top-7 lg:right-20 font-black text-xl lg:text-2xl text-white hover:text-red-400"
			>
				<i className="ri-close-large-fill"></i>
			</Link>
			<Notfound />
		</div>
	);
}

export default Trailer;
