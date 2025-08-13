import React from "react";
import { useNavigate } from "react-router-dom";

function ContactUs() {
	const navigate = useNavigate();

	return (
		<div className="max-w-4xl min-h-screen mx-auto p-4 sm:p-6 lg:p-8">
			<i
				onClick={() => navigate(-1)}
				className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-10 lg:top-6 font-black hover:text-[#6556CD] duration-150 cursor-pointer text-xl sm:text-2xl ri-arrow-left-line"
			></i>

			<div className="pt-12 sm:pt-8">
				<h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5">
					Contact Us
				</h1>
				<p className="mb-4 text-base sm:text-lg leading-relaxed">
					If you have any questions, feedback, or suggestions,
					feel free to reach out to us through the following
					channels:
				</p>

				<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
					Mobile Number
				</h2>
				<p className="mb-4 text-base sm:text-lg text-red-400">
					+123-456-7890
				</p>

				<h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6">
					Follow Us
				</h2>
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
					>
						<i className="text-2xl text-blue-600 ri-facebook-circle-fill"></i>
						<span className="text-base sm:text-lg">
							Facebook
						</span>
					</a>
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 hover:text-gray-400 transition-colors duration-200"
					>
						<i className="text-2xl text-zinc-600 ri-twitter-x-line"></i>
						<span className="text-base sm:text-lg">
							Twitter
						</span>
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-2 hover:text-pink-300 transition-colors duration-200"
					>
						<i className="text-2xl text-pink-400 ri-instagram-fill"></i>
						<span className="text-base sm:text-lg">
							Instagram
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
