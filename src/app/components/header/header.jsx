import Link from "next/link";
import styles from "../../page.module.css";

export default async function Header() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.left}>
					<Link
						href={"/"}
						style={{ textDecoration: "none", color: "white" }}
					>
						<p>XerFlix</p>
					</Link>
				</div>
				<div className={styles.right}>
					<Link href="/">Home</Link>
					<Link href="/kdrama">Kdrama</Link>
					<Link href="/Anime">Anime</Link>
					<Link href="/movies">Movies</Link>
					<Link href="/web-series">Web Series</Link>
				</div>
			</div>
		</main>
	);
}
