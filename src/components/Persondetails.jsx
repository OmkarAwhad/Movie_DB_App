import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "./redux/actions/personActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";
import noImage from "../../public/noimage.jpg";

const PersonDetails = () => {
	document.title = "SCSDB | Person Details";

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { info } = useSelector((state) => state.person);
	const dispatch = useDispatch();
	const [category, setcategory] = useState("movie");

	useEffect(() => {
		dispatch(asyncloadperson(id));
		return () => {
			dispatch(removeperson());
		};
	}, [id]);

	return info && info.detail ? (
		<div className="px-4 sm:px-6 lg:px-[10%] w-full min-h-screen bg-[#1F1E24] py-4">
			{/* Navigation */}
			<nav className="h-auto lg:h-[10vh] w-full text-zinc-100 flex items-center gap-4 lg:gap-10 text-lg lg:text-xl mb-6">
				<Link
					onClick={() => navigate(-1)}
					className="hover:text-[#6556CD] ri-arrow-left-line text-xl lg:text-2xl"
				></Link>
			</nav>

			<div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-0">
				{/* Left Side - Profile and Details */}
				<div className="w-full lg:w-[20%] flex flex-col items-center lg:items-start">
					<img
						className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[30vh] sm:h-[35vh] lg:h-[35vh] w-auto object-cover rounded-lg"
						src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
						alt=""
					/>

					<hr className="mt-6 lg:mt-10 mb-4 lg:mb-5 border-none h-[2px] bg-zinc-500 w-full" />

					{/* Social Media Links */}
					<div className="text-xl lg:text-2xl text-white flex gap-x-4 lg:gap-x-5 justify-center lg:justify-start w-full mb-6">
						<a
							target="_blank"
							href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
							className="hover:text-[#6556CD] transition-colors duration-200"
						>
							<i className="ri-earth-fill"></i>
						</a>
						<a
							target="_blank"
							href={`https://www.facebook.com/${info.externalid.facebook_id}`}
							className="hover:text-blue-500 transition-colors duration-200"
						>
							<i className="ri-facebook-circle-fill"></i>
						</a>
						<a
							target="_blank"
							href={`https://www.instagram.com/${info.externalid.instagram_id}`}
							className="hover:text-pink-500 transition-colors duration-200"
						>
							<i className="ri-instagram-fill"></i>
						</a>
						<a
							target="_blank"
							href={`https://twitter.com/${info.externalid.twitter_id}`}
							className="hover:text-blue-400 transition-colors duration-200"
						>
							<i className="ri-twitter-x-fill"></i>
						</a>
					</div>

					{/* Personal Information */}
					<div className="w-full text-center lg:text-left">
						<h1 className="text-xl lg:text-2xl text-zinc-400 font-semibold mb-4 lg:my-5">
							Person Info
						</h1>

						<div className="space-y-3 lg:space-y-4">
							<div>
								<h1 className="text-base lg:text-lg text-zinc-400 font-semibold">
									Known For
								</h1>
								<h1 className="text-zinc-400 text-sm lg:text-base">
									{info.detail.known_for_department}
								</h1>
							</div>

							<div>
								<h1 className="text-base lg:text-lg text-zinc-400 font-semibold">
									Gender
								</h1>
								<h1 className="text-zinc-400 text-sm lg:text-base">
									{info.detail.gender === 2
										? "Male"
										: "Female"}
								</h1>
							</div>

							<div>
								<h1 className="text-base lg:text-lg text-zinc-400 font-semibold">
									Birthday
								</h1>
								<h1 className="text-zinc-400 text-sm lg:text-base">
									{info.detail.birthday}
								</h1>
							</div>

							<div>
								<h1 className="text-base lg:text-lg text-zinc-400 font-semibold">
									Deathday
								</h1>
								<h1 className="text-zinc-400 text-sm lg:text-base">
									{info.detail.deathday
										? info.detail.deathday
										: "Still Alive"}
								</h1>
							</div>

							<div>
								<h1 className="text-base lg:text-lg text-zinc-400 font-semibold">
									Place Of Birth
								</h1>
								<h1 className="text-zinc-400 text-sm lg:text-base">
									{info.detail.place_of_birth}
								</h1>
							</div>

							<div>
								<h1 className="text-base lg:text-lg text-zinc-400 font-semibold">
									Also Known As
								</h1>
								<h1 className="text-zinc-400 text-sm lg:text-base">
									{info.detail.also_known_as.join(
										", "
									)}
								</h1>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side - Details and Information */}
				<div className="w-full lg:w-[80%] lg:ml-[5%]">
					<h1 className="text-3xl sm:text-4xl lg:text-6xl text-zinc-400 font-black my-4 lg:my-5 text-center lg:text-left">
						{info.detail.name}
					</h1>

					<h1 className="text-lg lg:text-xl text-zinc-400 font-semibold mb-2">
						Biography
					</h1>
					<p className="text-zinc-400 text-sm lg:text-base mt-3 mb-6 leading-relaxed text-justify">
						{info.detail.biography.substr(0, 500)}...
					</p>

					<h1 className="mt-5 text-base lg:text-lg text-zinc-400 font-semibold mb-4">
						Known For
					</h1>
					<HorizontalCards data={info.combinedCredits.cast} />

					<div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-6">
						<h1 className="text-lg lg:text-xl text-zinc-400 font-semibold">
							Acting
						</h1>
						<div className="w-full sm:w-auto">
							<Dropdown
								title="Category"
								options={["tv", "movie"]}
								func={(e) =>
									setcategory(e.target.value)
								}
							/>
						</div>
					</div>

					<div className="list-disc text-zinc-400 w-full h-[40vh] sm:h-[45vh] lg:h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-3 lg:p-5 rounded-lg">
						{info[category + "Credits"].cast.map((c, i) => (
							<div
								key={i}
								className="hover:text-white p-3 lg:p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer border-b border-zinc-800 last:border-b-0"
							>
								<Link
									to={`/${category}/details/${c.id}`}
									className=" flex gap-4 "
								>
									<img
										src={
											c.backdrop_path ||
											c.poster_path ||
											c.profile_path
												? `https://image.tmdb.org/t/p/original/${
														c.backdrop_path ||
														c.poster_path ||
														c.profile_path
												}`
												: noImage
										}
										alt=""
										className=" w-[15vw] lg:w-[5vw] h-[10vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
									/>
									<div>
										<span className="font-semibold text-sm lg:text-lg">
											{c.name ||
												c.title ||
												c.original_name ||
												c.original_title}
										</span>
										{c.character && (
											<span className="block ml-0  mt-2 text-xs lg:text-sm text-zinc-500">
												Character: {c.character}
											</span>
										)}
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default PersonDetails;
