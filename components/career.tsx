import React, { ReactElement, useContext, useState } from "react";
import careerArray from "../datas/career";
import careerContext from "../context/careerContext";

export interface LocalProps {
	icon: ReactElement;
	title: string;
	id: number;
}

function DescriptiveButton({ icon, title, id }: LocalProps) {
	const career = useContext(careerContext);
	return (
		<div
			className={
				career.currentCareerId === id
					? "descriptive_button active-descriptive_button_card"
					: "descriptive_button"
			}
			onClick={() => {
				career.setCurrentCareerId(id);
			}}>
			<div className="descriptive_icon">{icon}</div>
			<div className="strong"> {title} </div>
		</div>
	);
}

export default function Career() {
	const [currentCareerId, setCurrentCareerId] = useState(0);

	return (
		<careerContext.Provider value={{ currentCareerId, setCurrentCareerId }}>
			<section className="about_card" id="career">
				<span></span>
				<h2>Que fait Teddy ?</h2>
				<div className="about_details">
					<div className="descriptive_button_card">
						{careerArray.map((data) => (
							<DescriptiveButton
								icon={<data.icon />}
								title={data.name}
								id={data.id}
								key={data.id}
							/>
						))}
					</div>
					<div className="about_descriptive_card">
						<span> {careerArray[currentCareerId].name} </span>
						<div> {careerArray[currentCareerId].content} </div>
					</div>
				</div>
			</section>
		</careerContext.Provider>
	);
}
