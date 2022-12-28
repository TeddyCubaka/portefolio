import React, { ReactElement, useContext, useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import data from "../datas/about.json";
import currentIdContext from "../context/aboutContext";

export interface LocalProps {
	icon: ReactElement;
	title: string;
	id: number;
}

function DescriptiveButton({ icon, title, id }: LocalProps) {
	const { currentId, setCurrentId } = useContext(currentIdContext);
	return (
		<div
			className={
				currentId === id
					? "descriptive_button active-descriptive_button_card"
					: "descriptive_button"
			}
			onClick={() => {
				setCurrentId(id);
			}}>
			<div className="descriptive_icon">{icon}</div>
			<div className="strong"> {title} </div>
		</div>
	);
}

export default function About() {
	const [currentId, setCurrentId] = useState(0);
	return (
		<currentIdContext.Provider value={{ currentId, setCurrentId }}>
			<section className="about_card" id="about">
				<h2>Que fait Teddy ?</h2>
				<div className="about_details">
					<div className="descriptive_button_card">
						<DescriptiveButton
							title={data.web.title}
							id={data.web.id}
							icon={<BsLaptop size="25" />}
						/>
						<DescriptiveButton
							title={data.mobile.title}
							id={data.mobile.id}
							icon={<BiMobileAlt size="25" />}
						/>
						<DescriptiveButton
							title={data.design.title}
							id={data.design.id}
							icon={<MdDesignServices size="25" />}
						/>
					</div>
					<div className="about_descriptive_card">
						<span>
							{" "}
							{`>   `}{" "}
							{currentId === 0
								? data.web.title
								: currentId === 1
								? data.mobile.title
								: currentId === 2
								? data.design.title
								: null}{" "}
						</span>
						<div>
							{" "}
							{currentId === 0
								? data.web.description
								: currentId === 1
								? data.mobile.description
								: currentId === 2
								? data.design.description
								: null}{" "}
						</div>
						<sub>
							<strong> Technologies : </strong>
							{currentId === 0
								? data.web.skills
								: currentId === 1
								? data.mobile.skills
								: currentId === 2
								? data.design.skills
								: null}{" "}
						</sub>
					</div>
				</div>
			</section>
		</currentIdContext.Provider>
	);
}
