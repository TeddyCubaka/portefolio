import { useState } from "react";
import { useRouter } from "next/router";
import { BsTelephone } from "react-icons/bs";

function isActive() {
	console.log(location.hash);
}

export default function Navbar() {
	const router = useRouter();

	return (
		<nav className="navbar">
			<h1>Teddy Cubaka</h1>
			<div className="navigations">
				<a href="#about">A propos</a>
				<a href="#achievements">Réalisations</a>
				<a href="#events">Évenements</a>
				<a href="#skills">Compétences</a>
				<button>
					<BsTelephone size="34px" />
				</button>
			</div>
		</nav>
	);
}
