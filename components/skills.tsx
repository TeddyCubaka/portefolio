import { useState } from "react";
import skills from "../datas/skills";

interface LocalProps {
  name: string;
  Icon: any;
  color: string;
}

function Skill({ name, Icon, color }: LocalProps) {
  return (
    <div
      className="group cursor-default w-[120px] h-[120px] max-md:w-[85px] max-md:h-[85px] max-md:m-2.5 border border-[#123853] rounded-md m-5 text-center flex flex-col justify-evenly items-center skill_card hover:bg-[#123853cb] hover:text-white transition ease-in duration-500">
      <Icon
        className="text-[#123853] group-hover:scale-110 group-hover:transition group-hover:ease-in group-hover:duration-500 group-hover:text-white" size="50" />
      <span style={{ textAlign: "center" }}> {name} </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="font-bold text-3xl mb-5 text-[#123853]">Voici ce que peut faire Teddy</h2>
      <div className="skills_section">
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
