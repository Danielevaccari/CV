import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement =
    (document.getElementById("root") as HTMLElement) ||
    (document.createElement("div") as HTMLElement);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);
