import skills from "../datas/skills";

interface LocalProps {
  name: string;
  Icon: any;
  color: string;
}

function Skill({ name, Icon, color }: LocalProps) {
  return (
    <div
      className="group cursor-default w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] border border-[#123853] rounded-md text-center flex flex-col justify-evenly items-center skill_card hover:bg-[#123853cb] hover:text-white transition ease-in duration-500">
      <Icon
        className="text-[#123853] group-hover:scale-110 group-hover:transition group-hover:ease-in group-hover:duration-500 group-hover:text-white" size="40" />
      <span style={{ textAlign: "center" }}> {name} </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="font-bold text-3xl mb-5 text-[#123853]">Voici ce que peut faire Teddy</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((data, index) => (
          <Skill
            name={data.name}
            color={data.color}
            Icon={data.icon}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
