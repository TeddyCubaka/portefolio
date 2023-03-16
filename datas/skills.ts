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
	SiDiscord,
	SiLinux,
	SiUbuntu,
	SiCanva,
	SiPython,
	SiDjango,
	SiSqlite,
	SiGitlab,
	SiGmail,
	SiSlack,
	SiGoogledrive,
	SiGooglesheets,
	SiGooglecalendar,
	SiGooglechrome,
	SiFirefox,
	SiGooglekeep,
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
		name: "Python",
		icon: SiPython,
		color: "#346fa0",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
		color: "#3c873a ",
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
		name: "Django",
		icon: SiDjango,
		color: "#003c2a",
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
		name: "Github",
		icon: BsGithub,
		color: "#000000",
	},
	{
		name: "Gitlab",
		icon: SiGitlab,
		color: "#db4128",
	},
	{
		name: "Mongodb",
		icon: SiMongodb,
		color: "#049024",
	},
	{
		name: "SQL",
		icon: AiOutlineConsoleSql,
		color: "#081c7b",
	},
	{
		name: "MySQL",
		icon: SiMysql,
		color: "#667ef4",
	},
	{
		name: "Sqlite",
		icon: SiSqlite,
		color: "#003a55",
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
		name: "Google Sheet",
		icon: SiGooglesheets,
		color: "#1d9e5f",
	},
	{
		name: "Google keep",
		icon: SiGooglekeep,
		color: "#edae00",
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
		name: "Gmail",
		icon: SiGmail,
		color: "#e34133",
	},
	{
		name: "Slack",
		icon: SiSlack,
		color: "#481449",
	},
	{
		name: "Discord",
		icon: SiDiscord,
		color: "#565def",
	},
	{
		name: "Asana",
		icon: SiAsana,
		color: "#F06A6A",
	},
	{
		name: "Calendar",
		icon: SiGooglecalendar,
		color: "#0061cd",
	},
	{
		name: "Vs Code",
		icon: SiVisualstudiocode,
		color: "#0078d7",
	},
	{
		name: "Google drive",
		icon: SiGoogledrive,
		color: "#00a745",
	},
	{
		name: "Chrome",
		icon: SiGooglechrome,
		color: "#dc392d",
	},
	{
		name: "Mozilla firefox",
		icon: SiFirefox,
		color: "#d25424",
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
