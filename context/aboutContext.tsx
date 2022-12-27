import { createContext, use, useState } from "react";

let prop: any;

const currentIdContext = createContext(prop);

export default currentIdContext;
