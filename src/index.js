import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./Hello";
import Goodbye from './Goodbye'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<>
    <Hello />
    <Goodbye />
</>);