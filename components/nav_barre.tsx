import { BsTelephone } from "react-icons/bs";

export default function Navbarre() {
	return (
		<nav className="nav_barre">
			<h1>Teddy Cubaka</h1>
			<div>
				<ul>
					<li>A propos</li>
					<li>Réalisations</li>
					<li>Évenements</li>
					<li>Compétences</li>
				</ul>
				<BsTelephone />
			</div>
		</nav>
	);
}
