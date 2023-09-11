import React from "react";
import careerArray, { DescriptiveButton } from "../datas/career";
import { LocalSection } from "./about";

export default function Career() {
  return (
    <section className="about_card" id="career">
      <h2 className="font-bold text-3xl mb-5 text-[#123853]">Et le parcours de Teddy ?</h2>

      <LocalSection {...careerArray[0]} />
      <LocalSection {...careerArray[1]} />
      <LocalSection {...careerArray[2]} />
    </section>
  );
}
