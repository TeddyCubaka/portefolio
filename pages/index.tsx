import Head from "next/head";
import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "../components/about";
import Skills from "../components/skills";
import Achievement from "../components/achievement";
import Career from "../components/career";
import Footer from "../components/footer";
import { BiArrowToTop } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [scrollingIsHeigh, setScrollingIsHeigh] = useState<boolean>(false);

	const [y, setY] = useState(0);

	const handleNavigation = useCallback(
		(e: any) => {
			const window = e.currentTarget;
			if (y > (1 / 2) * window.screen.height) setScrollingIsHeigh(true);
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
					content="Teddy Cubaka est Un développeur web et web mobile de Kinshasa-RD Congo. Teddy, un développeur fullstack, peut concevoir des systèmes information, développer des solutions web et bien plus. "
				/>
				<meta name="title" content="Portefolio developpeur fullstack" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
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
