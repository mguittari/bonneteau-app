import { useEffect, useState } from "react";
import "./App.css";
import PlayMat from "./Components/PlayMat/PlayMat";

function App() {
	const [figures, setFigures] = useState(["circle", "square", "triangle"]);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		setFigures(array);
	}

	useEffect(() => {
		shuffle(figures);
		console.log("figures -->", figures);
	});

	return (
		<>
			<PlayMat />
		</>
	);
}

export default App;
