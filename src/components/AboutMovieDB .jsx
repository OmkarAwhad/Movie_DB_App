import React from "react";
import { useNavigate } from "react-router-dom";

function AboutMovieDB() {
	const navigate = useNavigate();

	return (
		<div className="max-w-4xl min-h-screen mx-auto p-4 sm:p-6 lg:p-8">
			<i
				onClick={() => navigate(-1)}
				className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-10 lg:top-6 font-black hover:text-[#6556CD] duration-150 cursor-pointer text-xl sm:text-2xl ri-arrow-left-line"
			></i>

			<div className="pt-12 sm:pt-8">
				<h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5">
					About MovieDB
				</h1>
				<p className="mb-4 text-base sm:text-lg leading-relaxed">
					Welcome to MovieDB, your ultimate movie search database
					application! Whether you are a movie enthusiast or just
					looking for something to watch, MovieDB is here to help
					you explore a vast collection of movies, find detailed
					information, and discover new favorites.
				</p>

				<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
					Our Purpose
				</h2>
				<p className="mb-4 text-base sm:text-lg leading-relaxed">
					MovieDB aims to provide an easy-to-use platform where
					users can search for movies, view details such as cast,
					plot, and ratings, and keep track of their favorite
					films. Our mission is to make movie discovery and
					information access seamless and enjoyable for everyone.
				</p>

				<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
					Features
				</h2>
				<ul className="list-disc list-inside mb-4 text-base sm:text-lg space-y-2 leading-relaxed">
					<li>Search for movies by title, genre, or year.</li>
					<li>
						View detailed information about each movie,
						including cast, plot, and ratings.
					</li>
					<li>
						Browse popular, top-rated, and upcoming movies.
					</li>
					<li>
						Create and manage a list of your favorite movies.
					</li>
				</ul>

				<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
					How to Use
				</h2>
				<p className="mb-4 text-base sm:text-lg leading-relaxed">
					Using MovieDB is simple and intuitive. Just type the
					name of the movie you are looking for into the search
					bar, and our powerful search engine will provide you
					with relevant results. Click on a movie to view its
					detailed information. You can also browse different
					categories to discover new movies.
				</p>

				<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
					Get in Touch
				</h2>
				<p className="mb-4 text-base sm:text-lg leading-relaxed">
					If you have any questions, feedback, or suggestions,
					feel free to reach out to us. We are always looking for
					ways to improve MovieDB and provide a better experience
					for our users.
				</p>
			</div>
		</div>
	);
}

export default AboutMovieDB;
