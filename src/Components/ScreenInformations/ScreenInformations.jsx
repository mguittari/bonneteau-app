import styles from "../ScreenInformations/ScreenInformations.module.css";

export default function ScreenInformations({ ledScreen }) {
	return (
		<>
			<div className={styles.screen}>
				<p className={styles.text1}>{ledScreen}</p>
			</div>
		</>
	);
}
