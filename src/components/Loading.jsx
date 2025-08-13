import React from "react";

function Loading() {
	return (
		<div
			className="w-full h-screen flex items-center justify-center"
			style={{ backgroundColor: "#1F1E24" }}
		>
			<div className="spinner"></div>
			<style jsx="true">{`
				.spinner {
					width: 60px;
					height: 60px;
					position: relative;
				}

				@media (min-width: 768px) {
					.spinner {
						width: 80px;
						height: 80px;
					}
				}

				.spinner::before,
				.spinner::after {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 4px solid transparent;
					border-top-color: #ffffff;
					border-radius: 50%;
					animation: spin 0.6s cubic-bezier(0.5, 0, 0.5, 1)
						infinite;
				}

				@media (min-width: 768px) {
					.spinner::before,
					.spinner::after {
						border-width: 6px;
					}
				}

				.spinner::after {
					border: 4px solid transparent;
					border-bottom-color: #ffffff;
					animation-direction: reverse;
					animation-duration: 0.8s;
				}

				@media (min-width: 768px) {
					.spinner::after {
						border-width: 6px;
					}
				}

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				.spinner::before {
					box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
				}
			`}</style>
		</div>
	);
}

export default Loading;
