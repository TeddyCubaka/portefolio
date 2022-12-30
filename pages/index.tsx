import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "../components/about";
import Skills from "../components/skills";
import Achievement from "../components/achievement";
import Career from "../components/career";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Teddy Cubaka</title>
				<meta name="description" content="Bienvenue sur le portfolio de Teddy Cubaka. Un développeur de Kinshasa-RD Congo." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar />
				<header>
					<Main />
				</header>
				<About />
				<Achievement />
				<Career />
				<Skills />
				<Footer />
			</main>
		</>
	);
}
