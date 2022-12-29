import skills from "../datas/skills";

interface LocalProps {
	name: string;
	Icon: any;
	color: string;
}

function Skill({ name, Icon, color }: LocalProps) {
	return (
		<div className="skill_card">
			<Icon color={color} size="50" />
			<span> {name} </span>
		</div>
	);
}

export default function Skills() {
	return (
		<div>
			<h2>Voici ce que peut faire Teddy</h2>
			<div className="skills_section">
				{skills.map((data) => (
					<Skill name={data.name} color={data.color} Icon={data.icon} />
				))}
			</div>
		</div>
	);
}
