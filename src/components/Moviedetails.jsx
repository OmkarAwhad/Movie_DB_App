import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "./redux/actions/movieActions";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

function Moviedetails() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { info } = useSelector((state) => state.movie);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(asyncloadmovie(id));
		return () => {
			dispatch(removemovie());
		};
	}, [id]);

	return info && info.detail ? (
		<div className="w-full">
			<div
				style={{
					background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				className="w-full min-h-screen flex flex-col relative"
			>
				{/* Navigation */}
				<nav className="h-[10vh] flex items-center gap-4 sm:gap-8 lg:gap-20 pl-4 sm:pl-8 lg:pl-20 text-xl sm:text-2xl font-black text-zinc-100">
					<Link onClick={() => navigate(-1)}>
						<i className="ri-arrow-left-line hover:text-[#6556CD] duration-200"></i>
					</Link>
					<Link to="/">
						<i className="ri-home-4-fill hover:text-[#6556CD] duration-200"></i>
					</Link>
					<a
						href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
						target="_blank"
						className="text-sm sm:text-base lg:text-lg hover:text-[#6556CD] duration-200"
					>
						imdb
					</a>
					<a
						href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
						target="_blank"
						className="hover:text-[#6556CD] duration-200"
					>
						<i className="ri-earth-fill"></i>
					</a>
				</nav>

				{/* Main Content */}
				<div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-32 mt-8 lg:mt-16 gap-6 lg:gap-12">
					{/* Movie Poster */}
					<div className="flex justify-center lg:justify-start">
						<img
							src={`https://image.tmdb.org/t/p/original/${
								info.detail.poster_path ||
								info.detail.backdrop_path
							}`}
							alt=""
							className="h-[50vh] sm:h-[60vh] lg:h-[40vh] w-auto object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded-lg"
						/>
					</div>

					{/* Movie Details */}
					<div className="flex-1">
						<h1 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 lg:mb-8 leading-tight text-center lg:text-left">
							{info.detail.title ||
								info.detail.name ||
								info.detail.original_name ||
								info.detail.original_title}{" "}
							<small className="text-lg sm:text-xl block sm:inline mt-2 sm:mt-0">
								(
								{info.detail.release_date.split("-")[0]}
								)
							</small>
						</h1>

						{/* Rating and Info */}
						<div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start mb-6">
							<div className="font-bold text-base sm:text-lg bg-yellow-500 h-12 w-12 sm:h-[50px] sm:w-[50px] flex items-center justify-center rounded-full text-black">
								{(
									info.detail.vote_average * 10
								).toFixed()}
								<sup>%</sup>
							</div>
							<p className="text-sm sm:text-base lg:text-xl font-black">
								User Score
							</p>
							<p className="text-sm sm:text-base">
								{info.detail.release_date}
							</p>
							<p className="flex flex-wrap gap-2 text-sm sm:text-base">
								{info.detail.genres.map(
									(genre, index) => (
										<span
											key={index}
											className="bg-zinc-700 px-2 py-1 rounded"
										>
											{genre.name}
										</span>
									)
								)}
							</p>
							<p className="text-sm sm:text-base">
								{info.detail.runtime}min
							</p>
						</div>

						{/* Tagline */}
						<h1 className="font-semibold text-base sm:text-lg mb-4 italic text-center lg:text-left">
							{info.detail.tagline}
						</h1>

						{/* Overview */}
						<h1 className="text-lg font-bold mb-2">
							Overview
						</h1>
						<p className="mb-6 text-sm sm:text-base leading-relaxed text-justify">
							{info.detail.overview}
						</p>

						{/* Translations */}
						<p className="text-lg font-bold mb-2">
							Translated In
						</p>
						<p className="mb-6 text-sm sm:text-base">
							{info.translations.join(", ")}
						</p>

						{/* Trailer Button */}
						<Link
							to={`/movie/details/${id}/trailer`}
							className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 bg-[#6556CD] font-bold rounded-md hover:bg-[#7d6bf5] transition-colors duration-300 text-sm sm:text-base"
						>
							<i className="ri-arrow-right-s-fill text-lg sm:text-xl mr-2"></i>
							Play Trailer
						</Link>
					</div>
				</div>

				{/* Watch Providers */}
				<div className="flex flex-col gap-3 px-4 sm:px-8 lg:px-32 py-8 lg:py-12">
					{info.watchproviders && info.watchproviders.buy && (
						<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
							<h1 className="font-medium text-base sm:text-lg min-w-[80px]">
								Buy
							</h1>
							<div className="flex flex-wrap gap-2 sm:gap-3">
								{info.watchproviders.buy.map(
									(item, index) => (
										<img
											key={index}
											src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
											className="h-10 w-10 sm:h-12 sm:w-12 lg:h-[5vh] lg:w-[5vh] rounded-md"
											alt=""
										/>
									)
								)}
							</div>
						</div>
					)}

					{info.watchproviders &&
						info.watchproviders.flatrate && (
							<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
								<h1 className="font-medium text-base sm:text-lg min-w-[80px]">
									Flatrate
								</h1>
								<div className="flex flex-wrap gap-2 sm:gap-3">
									{info.watchproviders.flatrate.map(
										(item, index) => (
											<img
												key={index}
												src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
												className="h-10 w-10 sm:h-12 sm:w-12 lg:h-[5vh] lg:w-[5vh] rounded-md"
												alt=""
											/>
										)
									)}
								</div>
							</div>
						)}

					{info.watchproviders && info.watchproviders.rent && (
						<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
							<h1 className="font-medium text-base sm:text-lg min-w-[80px]">
								Rent
							</h1>
							<div className="flex flex-wrap gap-2 sm:gap-3">
								{info.watchproviders.rent.map(
									(item, index) => (
										<img
											key={index}
											src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
											className="h-10 w-10 sm:h-12 sm:w-12 lg:h-[5vh] lg:w-[5vh] rounded-md"
											alt=""
										/>
									)
								)}
							</div>
						</div>
					)}
				</div>

				{/* Recommendations */}
				<div className="w-full px-4 sm:px-8 lg:px-32">
					<hr className="my-4 bg-zinc-400 h-[1px] border-none" />
					<p className="text-base sm:text-lg font-semibold mb-4">
						Recommendations and Similar stuff
					</p>
					<HorizontalCards
						data={
							info.recommendations.length > 0
								? info.recommendations
								: info.similar
						}
					/>
				</div>
			</div>
			<Outlet />
		</div>
	) : (
		<Loading />
	);
}

export default Moviedetails;
