import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import styles from "./Layout.module.css";

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};
