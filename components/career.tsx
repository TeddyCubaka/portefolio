import React, { ReactElement, useContext, useState } from "react";
import careerArray, { DescriptiveButton } from "../datas/career";
import careerContext from "../context/careerContext";

export interface LocalProps {
	description: DescriptiveButton;
	context: React.Context<any>;
}

export function DescriptiveButton({ description, context }: LocalProps) {
	const career = useContext(context);
	return (
		<div
			className={
				career.currentId === description.id
					? "descriptive_button active-descriptive_button_card"
					: "descriptive_button"
			}
			onClick={() => {
				career.setCurrentId(description.id);
			}}>
			<div className="descriptive_icon">
				{" "}
				<description.icon />{" "}
			</div>
			<div className="strong hide_on_mobile"> {description.name} </div>
			<div className="strong hide_on_desktop"> {description.mobileName} </div>
		</div>
	);
}

export default function Career() {
	const [currentId, setCurrentId] = useState(0);

	return (
		<careerContext.Provider value={{ currentId, setCurrentId }}>
			<section className="about_card" id="career">
				<span></span>
				<h2>Et le parcours de Teddy ?</h2>
				<div className="about_details">
					<div className="descriptive_button_card">
						{careerArray.map((data) => (
							<DescriptiveButton
								context={careerContext}
								description={data}
								key={data.id}
							/>
						))}
					</div>
					<div className="about_descriptive_card">
						<span>
							{" "}
							{"> "} {careerArray[currentId].name}{" "}
						</span>
						<div> {careerArray[currentId].content} </div>
					</div>
				</div>
			</section>
		</careerContext.Provider>
	);
}
