import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
	return (
		<footer>
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
			<div>copyright@2022</div>
		</footer>
	);
}
