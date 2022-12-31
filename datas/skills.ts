import { BsGithub } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
	SiPhp,
	SiTypescript,
	SiPassport,
	SiSocketdotio,
	SiReact,
	SiNextdotjs,
	SiWordpress,
	SiFigma,
	SiMysql,
	SiMongodb,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAsana,
	SiVisualstudiocode,
	SiMicrosoftexcel,
	SiMicrosoftword,
	SiGoogle,
	SiLinux,
	SiUbuntu,
	SiCanva,
} from "react-icons/si";
import { IconType } from "react-icons";

interface LocalData {
	name: string;
	icon: IconType;
	color: string;
}

const skills: LocalData[] = [
	{
		name: "HTML",
		icon: AiFillHtml5,
		color: "#e34c26",
	},
	{
		name: "CSS",
		icon: DiCss3,
		color: "#264de4",
	},
	{
		name: "JavaScript",
		icon: IoLogoJavascript,
		color: "#f0db4f",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		color: "#007acc",
	},
	{
		name: "PHP",
		icon: SiPhp,
		color: "#8993be",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
		color: "#3c873a ",
	},
	{
		name: "Passport.js",
		icon: SiPassport,
		color: "#000000",
	},
	{
		name: "socket.io",
		icon: SiSocketdotio,
		color: "#000000",
	},
	{
		name: "React.js",
		icon: SiReact,
		color: "#07237c",
	},
	{
		name: "React Native",
		icon: SiReact,
		color: "#436cf3",
	},
	{
		name: "next.js",
		icon: SiNextdotjs,
		color: "#000000",
	},
	{
		name: "Wordpress",
		icon: SiWordpress,
		color: "#21759b",
	},
	{
		name: "Figma",
		icon: SiFigma,
		color: "#fbbb07",
	},
	{
		name: "Canva",
		icon: SiCanva,
		color: "#21759b",
	},
	{
		name: "Git",
		icon: FaGitAlt,
		color: "#f34f29",
	},
	{
		name: "MySQL",
		icon: SiMysql,
		color: "#667ef4",
	},
	{
		name: "Github",
		icon: BsGithub,
		color: "#000000",
	},
	{
		name: "SQL",
		icon: AiOutlineConsoleSql,
		color: "#081c7b",
	},
	{
		name: "Mongodb",
		icon: SiMongodb,
		color: "#049024",
	},
	{
		name: "Ms Excel",
		icon: SiMicrosoftexcel,
		color: "#10793F",
	},
	{
		name: "Ms Word",
		icon: SiMicrosoftword,
		color: "#1B5EBE",
	},
	{
		name: "A. Illustrator",
		icon: SiAdobeillustrator,
		color: "#49021F",
	},
	{
		name: "A. Photoshop",
		icon: SiAdobephotoshop,
		color: "#001E36",
	},
	{
		name: "Asana",
		icon: SiAsana,
		color: "#F06A6A",
	},
	{
		name: "Vs Code",
		icon: SiVisualstudiocode,
		color: "#0078d7",
	},
	{
		name: "Google Tools",
		icon: SiGoogle,
		color: "#00C9FF",
	},
	{
		name: "Ubuntu",
		icon: SiUbuntu,
		color: "#e95420",
	},
	{
		name: "Linux",
		icon: SiLinux,
		color: "#1793d1",
	},
];

export default skills;
