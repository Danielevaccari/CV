import * as React from "react";
import "../../css/index.css";

const PageScrollVisualizer: React.FunctionComponent = () => {
    const [scrollAmount, setScrollAmount] = React.useState<number>(0);
    const docHeight = document.body.offsetHeight;

    window.addEventListener("scroll", () => {
        setScrollAmount(document.documentElement.scrollTop);
    });

    return (
        <div
            className="scrollVisualizerContainer"
            style={{
                width: `${
                    (scrollAmount / (docHeight - window.innerHeight)) * 100
                }vw`,
            }}
        ></div>
    );
};

export default PageScrollVisualizer;
