import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetail() {
	// Estado para almacenar los datos del Pokemon.
	const [pokemonCard, setPokemonCard] = useState(null);

	// Estados para almacenar los datos de la búsqueda por el parámetro ID.
	let params = useParams();
	const pokemonID = params.id;

	// Nos conectamos a la api para recoger los datos en JSON
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemonCard(data);
			});
	}, [pokemonID]);

	// Si no tenemos los datos, mostramos un mensaje de carga
	if (!pokemonCard) {
		return <p>No pokemon detail</p>;
	}

	return (
		<>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonCard.id}.png`}
				alt={pokemonCard.name}
			/>
		</>
	);
}

export default CardDetail;
