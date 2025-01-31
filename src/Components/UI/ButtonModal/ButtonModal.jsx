import styles from "../ButtonModal/ButtonModal.module.css";

export default function ButtonModal() {
	return (
		<button className={styles["container-button"]} type="submit">
			<p className={styles["button-modal"]}>Valider</p>
		</button>
	);
}
