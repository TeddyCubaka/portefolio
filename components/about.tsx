import React, { useState } from "react";
import currentIdContext from "../context/aboutContext";
import { aboutDetails } from "../datas/about";
import { DescriptiveButton } from "./career";

export default function About() {
	const [currentId, setCurrentId] = useState(0);
	return (
		<currentIdContext.Provider value={{ currentId, setCurrentId }}>
			<section className="about_card" id="about">
				<h2>Que fait Teddy ?</h2>
				<div className="about_details">
					<div className="descriptive_button_card">
						{aboutDetails.map((about) => (
							<DescriptiveButton
								context={currentIdContext}
								description={about}
								key={about.id + about.name}
							/>
						))}
					</div>
					<div className="about_descriptive_card">
						<p>
							{`>   `}
							{aboutDetails[currentId].name}
						</p>
						<div>{aboutDetails[currentId].content}</div>
						<span>
							<strong> Technologies : </strong>
							{aboutDetails[currentId].subContent
								? aboutDetails[currentId].subContent
								: ""}
						</span>
					</div>
				</div>
			</section>
		</currentIdContext.Provider>
	);
}
