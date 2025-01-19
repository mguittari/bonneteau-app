import styles from "./Button.module.css";

export default function Button() {
	return (
		<button className={styles.button} type="button">
			<p>Next round</p>
		</button>
	);
}
