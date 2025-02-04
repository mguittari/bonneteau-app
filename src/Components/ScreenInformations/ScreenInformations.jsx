import styles from "../ScreenInformations/ScreenInformations.module.css";
import Button from "../UI/ButtonShuffle/ButtonShuffle";

export default function ScreenInformations({
	ledScreen,
	attempt,
	isSpade,
	isClickable,
	shuffle,
	setCards,
	resetGame,
}) {
	const handleClickButton = () => {
		// Étape 1 : Retourner les cartes sans les mélanger
		setCards((prevCards) =>
			prevCards.map((card) => ({ ...card, is_face_down: true })),
		);

		// Étape 2 : Mélanger après 500ms tout en conservant les ID
		setTimeout(() => {
			setCards((prevCards) => {
				// Copier proprement
				const copiedCards = [...prevCards];

				// Mélanger mais en conservant les IDs
				const shuffled = shuffle(copiedCards);

				return shuffled;
			});
		}, 600);
		resetGame();
	};
	return (
		<>
			<div className={styles.screen}>
				<p
					className={
						isSpade || ledScreen === "Perdu :(" ? styles.text2 : styles.text1
					}
				>
					{" "}
					{isClickable ? (
						<button
							className={styles.click}
							type="button"
							onClick={handleClickButton}
							title="Cliquez ici pour rejouer"
						>
							{ledScreen}
						</button>
					) : (
						ledScreen
					)}
				</p>
			</div>
		</>
	);
}
