import { useEffect, useState } from "react";
import "./App.css";
import PlayMat from "./Components/PlayMat/PlayMat";

function App() {
	const [cards, setCards] = useState([
		{ id: 1, shape: "club", is_face_down: true },
		{ id: 2, shape: "diamond", is_face_down: true },
		{ id: 3, shape: "spade", is_face_down: true },
	]);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;
	}

	useEffect(() => {
		const shuffled = shuffle(cards);
		// spread sur le tableau pour créer une nouvelle référence, afin de forcer React à
		//re-rendre correctement les composants en fonction de l'état mis à jour (sinon il
		// considère que le tableau n'a pas été modifié)
		setCards([...shuffled]);
	}, []);

	return (
		<>
			<PlayMat cards={cards} setCards={setCards} shuffle={shuffle} />
		</>
	);
}

export default App;
