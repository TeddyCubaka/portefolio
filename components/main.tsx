import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import image from "./images/teddy.jpg";
export default function Main() {
	return (
		<main className="site_main">
			<div className="main_image">
				<Image
					src={image}
					alt="Picture of the author"
					width="225"
					height="300"
				/>
			</div>
			<h1>Teddy Cubaka BIRHINGINGWA</h1>
			<div>Développeur fullstack</div>
			<div className="main_icons">
				<a
					href="https://github.com/TeddyCubaka"
					target="_blank"
					rel="noreferrer">
					{" "}
					<BsGithub size="30" />{" "}
				</a>
				<a
					href="https://www.linkedin.com/in/teddy-birhingingwa-a3707a240/"
					target="_blank"
					rel="noreferrer">
					{" "}
					<BsLinkedin size="30" />{" "}
				</a>
			</div>
		</main>
	);
}
