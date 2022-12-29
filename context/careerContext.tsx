import React, { createContext, useState } from "react";

interface LocalProps {
	currentCareerId: number;
	setCurrentCareerId: React.Dispatch<React.SetStateAction<number>>;
}

let prop: any;

const careerContext = createContext(prop);

export default careerContext;
