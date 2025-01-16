import { useEffect, useState } from "react";
import "./App.css";
import PlayMat from "./Components/PlayMat/PlayMat";

function App() {
	const [figures, setFigures] = useState([
		{ id: 1, shape: "circle" },
		{ id: 2, shape: "square" },
		{ id: 3, shape: "triangle" },
	]);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	useEffect(() => {
		const shuffled = shuffle(figures);
		// spread sur le tableau pour créer une nouvelle référence, afin de forcer React à re-rendre correctement les composants en fonction de l'état mis à jour
		setFigures([...shuffled]);
	}, []);

	return (
		<>
			<PlayMat figures={figures} />
		</>
	);
}

export default App;
