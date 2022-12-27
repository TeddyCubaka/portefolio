import React, { useContext, useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { GiStickFrame } from "react-icons/gi";
import PropTypes, { InferProps } from "prop-types";
import data from "../datas/about.json";
import currentIdContext from "../context/aboutContext";

function DescriptiveButton({
	icon,
	title,
	color,
	id,
}: InferProps<typeof DescriptiveButton.propTypes>) {
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
			<div className="about_card" id="about">
				<h2>Que fait Teddy ?</h2>
				<div className="about_details">
					<div className="descriptive_button_card">
						<DescriptiveButton
							title={data.web.title}
							id={data.web.id}
							icon={<BsLaptop size="34" />}
						/>
						<DescriptiveButton
							title={data.mobile.title}
							id={data.mobile.id}
							icon={<BiMobileAlt size="34" />}
						/>
						<DescriptiveButton
							title={data.design.title}
							id={data.design.id}
							icon={<GiStickFrame size="34" />}
						/>
					</div>
					<div className="about_descriptive_card">
						<div>
							{" "}
							{currentId === 0
								? data.web.title
								: currentId === 1
								? data.mobile.title
								: currentId === 2
								? data.design.title
								: null}{" "}
						</div>
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
							{" "}
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
			</div>
		</currentIdContext.Provider>
	);
}

DescriptiveButton.propTypes = {
	icon: PropTypes.element,
	title: PropTypes.string,
	color: PropTypes.string,
	id: PropTypes.number,
};
