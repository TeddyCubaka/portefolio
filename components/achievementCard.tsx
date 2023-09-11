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
    <div className="w-full h-auto border border-solid border-[#123853] flex flex-col items-center p-4 rounded-md ">
      <div className="space_between w_max">
        <div className="meddium base_center color_blue">
          {" "}
          {achievement.name}{" "}
        </div>
        <span className="status small">{achievement.status}</span>
      </div>
      <div className="w_max"> {achievement.description} </div>
      <div className="space_around w_max">
        {achievement.link.length > 1 ? (
          <a className="txt_center" href={achievement.link}>
            {" "}
            <IoOpenOutline /> Site web
          </a>
        ) : (
          <span>
            <IoOpenOutline />
            Site indisponible
          </span>
        )}
        <a className="txt_center" href={achievement.sourceCode}>
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
