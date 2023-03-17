import { BsLaptop } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { IconType } from "react-icons";
import { DescriptiveButton } from "./career";

export const aboutDetails: DescriptiveButton[] = [
	{
		id: 0,
		icon: BsLaptop,
		name: "Développement web",
		content:
			"Dans le dévéloppement web, Teddy fait généralement du JavaCript. A ceci s'ajoute le typescript et le PHP. Bien-sûr, il ne fait pas que coder. Il peut faire le suivi des projet et son élaboration. Il va de la modélisation d'un système à sa mise en ligne du système. Il peut aussi faire la maintenace d'une application web ou d'un site web. Il fait plusieurs technologie et veut en apprendre encore plus. Dans la conception, Teddy peut faire les deux partie d'un site web, la partie client et la partie serveur.",
		subContent:
			"HTML, CSS, JavaScript, typescript, PHP, React.js, next.js, node.js, express.js, socket.io, passport.js",
		mobileName: "Dév Web",
	},
	{
		id: 1,
		icon: BiMobileAlt,
		name: "Développement mobile",
		content:
			"Tout comme pour le web, Teddy fait la conception d'un système mobile. Il peut étudier, modéliser et concevoir le système. Et bien-sûr il peut aussi faire la maintenance.",
		subContent: "React Native",
		mobileName: "Dév Mob",
	},
	{
		id: 2,
		icon: MdDesignServices,
		name: "Modélisation et Design d'un site",
		content:
			"Rare sont les développeurs avec un goût du design. Teddy, justement en a. Il a une passion pour les codes et pour le design. Mais que vaut un système sans une bonne modélisation, rien. Teddy vous fait le tout. Il modélise votre système d'une manière optimale et ainsi vous pourriez utiliser votre système pendant longtemps.",
		subContent:
			"Figma, canva, asana, google tools, UML, Adobe illustrator et photoshop, inkscape, etc...",
		mobileName: "Mod & Des",
	},
];
