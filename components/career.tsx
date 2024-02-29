import React, { useState } from "react";
import careerArray from "../datas/career";
import { LocalSection } from "./about";
import jobsData from '../datas/jobs.json';
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface LocalSectionProps {
  id: number,
  compagny: string,
  image: string | null,
  type: string
  tasks: string[],
  roles: string[],
  period: string,
  achievements: string[],
  technologie: string[]
}

const ListPuce = ({ title, content, children }: any) => {
  let className = "text-[#f55a1b] pr-2 " + (title ? "" : "pl-5");
  return (
    <div>
      <span className={className}> + </span>
      {
        title ?
          <strong> {title} {" : "} </strong>
          : ""

      }
      {content ? content : children}
    </div>
  )
}

const JobDetails = ({ type, tasks, roles, achievements, technologie }: LocalSectionProps) => {
  const [showMore, _setShowMore] = useState<boolean>(false);

  return (
    <div>
      <ListPuce {...{ title: "type", content: type }} />
      <ListPuce {...{ title: "roles" }}>
        {
          roles.map(role => (
            <ListPuce {...{ title: "", content: role }} key={role} />
          ))
        }
      </ListPuce>
      {
        showMore ?
          <div
            onClick={() => { _setShowMore(false) }}
            className="block overflow-hidden shower_animation">
            <ListPuce {...{ title: "réalisations" }}>
              {
                achievements.map(achievement => (
                  <ListPuce {...{ title: "", content: achievement }} key={achievement} />
                ))
              }
            </ListPuce>
            <ListPuce {...{ title: "tâches" }}>
              {
                tasks.map(task => (
                  <ListPuce {...{ title: "", content: task }} key={task} />
                ))
              }
            </ListPuce>
            <ListPuce {...{ title: "technologies" }}>
              {
                technologie.map(technologie => (
                  <ListPuce {...{ title: "", content: technologie }} key={technologie} />
                ))
              }
            </ListPuce>
          </div>
          :
          "..."
      }
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            if (showMore) _setShowMore(false)
            else _setShowMore(true)
          }}
          className="px-2 border border-[#123853] flex items-center gap-2 justify-end rounded-md hover:bg-[#123853cb] hover:text-white transition ease-in duration-500">
          voir plus
        </button>
      </div>
    </div>
  )
}

export function JobCard({ id, compagny, image, type, tasks, roles, period, achievements, technologie }: LocalSectionProps) {
  return (
    <div className="h-fit w-full mx-4 grid grid-cols-[1fr_2.5fr] border-solid border-l-2 border-black py-5 max-md:flex max-md:flex-col max-md:py-2">
      <div className="h-fit flex items-center gap-3 relative bottom-[27px] right-[13px] max-md:bottom-2.5 max-md:right-[13px] max-md:items-start">
        <span className="h-fit text-white bg-[#1e736e] p-3 rounded-3xl"></span>
        <span
          className="text-[#1e736e] text-xl font-bold md:whitespace-nowrap md:w-[150px]">
          {compagny} {" : "} {period} </span>
      </div>

      <div className="max-md:ml-8 max-md:mr-5 pr-10 max-md:pr-1 max-md:text-justify">
        <JobDetails {...{ id, compagny, image, type, tasks, roles, period, achievements, technologie }} />
      </div>
    </div>
  );
}


function Jobs() {
  return (
    <section className="about_card" id="career">
      <h4 className="font-bold text-xl mb-5 text-[#123853]">Parcours proffessionnels</h4>
      {
        jobsData.map((job) => (
          <JobCard {...job} key={job.id} />
        ))
      }
    </section>
  )
}


export default function Career() {
  return (
    <section className="about_card" id="career">
      <h2 className="font-bold text-3xl mb-5 text-[#123853]">Et le parcours de Teddy ?</h2>

      <LocalSection {...careerArray[0]} />
      <LocalSection {...careerArray[1]} />
      <LocalSection {...careerArray[2]} />
      <Jobs />
    </section>
  );
}
