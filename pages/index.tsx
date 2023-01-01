import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "../components/about";
import Skills from "../components/skills";
import Achievement from "../components/achievement";
import Career from "../components/career";
import Footer from "../components/footer";
import { BiArrowToTop } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [scrollingIsHeigh, setScrollingIsHeigh] = useState<boolean>(false);

	const [y, setY] = useState(0);

	const handleNavigation = useCallback(
		(e: any) => {
			const window = e.currentTarget;
			if (y > window.screen.height) setScrollingIsHeigh(true);
			else setScrollingIsHeigh(false);

			setY(window.scrollY);
		},
		[y]
	);

	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<>
			<Head>
				<title>Teddy Cubaka</title>
				<meta
					name="description"
					content="Bienvenue sur le portfolio de Teddy Cubaka. Un développeur de Kinshasa-RD Congo."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar />
				<Main />
				<About />
				{scrollingIsHeigh ? (
					<div
						className="go_up_button"
						onClick={() => {
							window.scroll(0, 0);
							setScrollingIsHeigh(false);
						}}>
						{" "}
						<BiArrowToTop size="30" color="white" />{" "}
					</div>
				) : (
					""
				)}
				<Achievement />
				<Career />
				<Skills />
				<Footer />
			</main>
		</>
	);
}
