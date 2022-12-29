import { IconType } from "react-icons";
import { TbSchoolOff, TbSchool } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";

interface LocalDataType {
	id: number;
	name: string;
	icon: IconType;
	content: string;
}

const careerArray: LocalDataType[] = [
	{
		id: 0,
		name: "Scolaire",
		icon: TbSchoolOff,
		content:
			"Teddy a fait ses études humanitaire au collège saint Paul Bukavu, au Sud-Kivu. Il finit en mathématique-physique avec un diplôme de 60%. Après avoir obtenu son diplôme d&#39;État, Teddy est venu à Kinshasa pour poursuivre ses études supérieurs. Il a commencé en BTP, avant de tomber de découvrir et de tomber amoureux de la programmation. Une année après son arrivé à kinshasa il a changé de faculté et s'est lancé dans le dévéloppement web.",
	},
	{
		id: 1,
		name: "Extra-colaire",
		icon: TbSchool,
		content:
			"En déhors de la scolarité, Teddy a fait pas et fait plusieurs activité. Depuis ses 11 ans, il est scout et a bien-sûr très progressé dans le mouvements. Il a fait plusieurs auto-formation, notament en Community Management, qui est le domaine extra-scolaire qu'il exerce toujours.",
	},
	{
		id: 2,
		name: "Professionnelle",
		icon: MdWorkOutline,
		content:
			"Dans le domaine de dévéloppement web, Teddy a, jusque là, travaillé chez Kinshasa Digital Academy en tant que développeur fullstack. Dans le domaine de comminuty mangement, il l'a généralement fait dans la maison Jacqueline, une maison des production des jus naturels à Kinshasa.",
	},
];

export default careerArray;
