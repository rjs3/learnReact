import React from "react";
import ReactDOM from "react-dom";
import Contador from "./contador"

ReactDOM.render(<Contador label="Contador" initalValue={10} />,document.getElementById("app"));