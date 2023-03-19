import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElement =
    (document.getElementById("root") as HTMLElement) ||
    (document.createElement<"div">("div") as HTMLElement);

ReactDOM.render(
    <React.StrictMode>
        {/* Wrap whole application in Redux */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    rootElement
);
