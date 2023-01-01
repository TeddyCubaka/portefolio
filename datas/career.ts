import { IconType } from "react-icons";
import { TbSchoolOff, TbSchool } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";

interface LocalDataType {
	id: number;
	name: string;
	icon: IconType;
	content: string;
	mobileName: string;
}

const careerArray: LocalDataType[] = [
	{
		id: 0,
		name: "Scolaire",
		icon: TbSchoolOff,
		content:
			"Teddy a fait ses études humanitaires au collège saint Paul Bukavu, au Sud-Kivu. Il a finit en option mathématique et physique avec un diplôme de 60%. Après avoir obtenu son diplôme d'État, Teddy est venu à Kinshasa pour poursuivre ses études supérieurs. Il a commencé en BTP, avant de découvrir et de tomber amoureux de la programmation. Une année après son arrivé à kinshasa il a changé de faculté et s'est lancé dans le dévéloppement web.",
		mobileName: "Scolaire",
	},
	{
		id: 1,
		name: "Extra-Scolaire",
		icon: TbSchool,
		content:
			"En déhors de la scolarité, Teddy fait et a fait plusieurs activités. Depuis ses 11 ans, il est scout et a, bien-sûr, beaucoup très progressé dans le mouvement. Il s'est auto-formé dans plusieurs domaines, notament en Community Management, qui est le domaine extra-scolaire qu'il exerce toujours.",
		mobileName: "Extra-Scol.",
	},
	{
		id: 2,
		name: "Professionnelle",
		icon: MdWorkOutline,
		content:
			"Dans le domaine de dévéloppement web, Teddy a, jusque là, travaillé chez Kinshasa Digital Academy en tant que développeur fullstack. Dans le domaine de comminuty mangement, il l'a généralement fait à la maison Jacqueline, une maison des production des jus naturels à Kinshasa.",
		mobileName: "Profession.",
	},
];

export default careerArray;
