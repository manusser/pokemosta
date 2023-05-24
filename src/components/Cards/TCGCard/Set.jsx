import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Card, Button } from "flowbite-react";

function Set({ setID }) {
	const [set, setSet] = useState(null);

	// Nos conectamos a la api para recoger los datos en JSON
	useEffect(() => {
		fetch(`https://api.pokemontcg.io/v2/sets/${setID}`, {
			headers: {
				"X-Api-Key": process.env.TCG_API,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setSet(data);
			});
	}, [setID]);

	// Si no tenemos los datos, mostramos un mensaje de carga
	if (!set) {
		return (
			<div className="relative p-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
				<div className="flex justify-between z-20">
					<div class="flex items-center w-full space-x-2">
						<div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<AiFillStar className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
				</div>
				<div class="mt-2 flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
					<svg
						class="w-12 h-12 text-gray-200"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 640 512"
					>
						<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
					</svg>
				</div>
				<div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 my-4"></div>
				<div class="flex items-center w-full space-x-2">
					<div class="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-10"></div>
					<div class="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-10"></div>
				</div>
			</div>
		);
	}

	// Devolvemos la Card del pokemon con los detalles
	return (
		<>
			<div className="max-w-sm">
				<Card imgSrc={set.data.images.logo}>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{set.data.name}
					</h5>
					<Button>
						View set
						<svg
							className="ml-2 -mr-1 h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</Button>
				</Card>
			</div>
		</>
	);
}

export default Set;
