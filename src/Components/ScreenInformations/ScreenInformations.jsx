import styles from "../ScreenInformations/ScreenInformations.module.css";
import Button from "../UI/ButtonShuffle/ButtonShuffle";

export default function ScreenInformations({
	ledScreen,
	isSpade,
	isClickable,
	handleClickShuffle,
}) {
	return (
		<>
			<div className={styles.infotext}>
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
								onClick={handleClickShuffle}
							>
								{ledScreen}
							</button>
						) : (
							ledScreen
						)}
					</p>
					{isClickable && (
						<p className={styles["reset-message"]}>⬆ Clique pour rejouer ⬆</p>
					)}
				</div>
			</div>
		</>
	);
}
