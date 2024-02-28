import React from "react";
import { IconType } from "react-icons";
import { aboutDetails } from "../datas/about";

interface LocalSectionProps {
  icon: IconType;
  name: string;
  content: string;
  subContent?: string;
}

export function LocalSection({
  icon,
  name,
  content,
  subContent,
}: LocalSectionProps) {
  const Icon = icon;
  return (
    <div className="h-fit w-full mx-5 grid grid-cols-[1fr_2.6fr] border-solid border-l-2 border-black py-5 max-md:flex max-md:flex-col max-md:py-0">
      <div className="h-fit flex items-center gap-3 relative bottom-5 right-[22px] max-md:bottom-0">
        <span className="h-fit text-white bg-[#1e736e] p-3 rounded-3xl">
          <Icon size="20px" color="white" />
        </span>
        <span className="text-[#1e736e] text-xl font-bold ">{name}</span>
      </div>

      <div className="max-md:ml-8 max-md:mr-5 pr-10 max-md:pr-1 max-md:text-justify">
        <p>{content}</p>
        {subContent ? (
          <span className="block mt-2.5">
            <strong> Technologies : </strong>
            {subContent}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-[#F5F5F5] h-auto flex flex-col" id="about">
      <h2 className="font-bold text-3xl mb-5 text-[#123853]">
        Que fait Teddy ?
      </h2>

      <LocalSection {...aboutDetails[0]} />
      <LocalSection {...aboutDetails[1]} />
      <LocalSection {...aboutDetails[2]} />
    </section>
  );
}
