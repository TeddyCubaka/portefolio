import React from "react";
import { RiCodeSLine } from "react-icons/ri";
import { IoOpenOutline } from "react-icons/io5";

interface Achievement {
  achievement: {
    name: string;
    description: string;
    type: string;
    technologie: string;
    link: string;
    sourceCode: string;
    frame: string;
    status: string;
  };
}

type LocalStatus = {
  status: string;
};

export default function AchievementCard({ achievement }: Achievement) {
  return (
    <div className="w-full h-auto border border-solid border-[#123853] flex flex-col items-center p-4 rounded-md max-md:gap-2.5">
      <div className="space_between w_max">
        <div className="font-medium flex items-center text-[#123853]">
          {" "}
          {achievement.name}{" "}
        </div>

        <span className="border border-[#123853cb] px-2 py-1 rounded-2xl flex items-center gap-2.5 text-sm hover:bg-[#123853cb] hover:text-white transition ease-in duration-500 cursor-default">{achievement.status}</span>
      </div>
      <div className="w_max"> {achievement.description} </div>
      <div className="flex justify-between w-full">
        {achievement.link.length > 1 ? (
          <a className="w-full underline flex flex-row items-center justify-center gap-2 " href={achievement.link}>
            {" "}
            <IoOpenOutline /> Site web
          </a>
        ) : (
          <span className="w-full flex flex-row items-center justify-center gap-2 ">
            <IoOpenOutline />
            Site indisponible
          </span>
        )}
        <a className="w-full underline flex flex-row items-center justify-center gap-2 " href={achievement.sourceCode}>
          {" "}
          <RiCodeSLine /> Code source
        </a>
      </div>
      <div className="space_between small w_max">
        <span> {achievement.technologie} </span>
        <span className="color_blue meddium"> {achievement.frame} </span>
      </div>
    </div>
  );
}
