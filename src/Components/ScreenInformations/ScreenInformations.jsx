import styles from "../ScreenInformations/ScreenInformations.module.css";

export default function ScreenInformations({ ledScreen, attempt, isSpade }) {
	return (
		<>
			<div className={styles.screen}>
				<p
					className={
						isSpade || ledScreen === "Perdu :(" ? styles.text2 : styles.text1
					}
				>
					{ledScreen}
				</p>
			</div>
		</>
	);
}
