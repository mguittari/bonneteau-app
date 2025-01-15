import { useEffect, useState } from "react";
import "./App.css";
import PlayMat from "./Components/PlayMat/PlayMat";

function App() {
	const [figures, setFigures] = useState(["circle", "square", "triangle"]);

	const shuffle = (array) => {
		const shuffled = array.sort(() => Math.random() - 0.5);
		setFigures(shuffled);
	};

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
