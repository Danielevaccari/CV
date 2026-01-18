import * as React from "react";
import "../css/index.css";
import styled from "@emotion/styled";

type Props = {
    className?: string;
};

const PageScrollVisualizerBase = ({ className }: Props) => {
    const [scrollAmount, setScrollAmount] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollAmount(document.documentElement.scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const docHeight = document.body.offsetHeight;

    return (
        <div
            className={className}
            style={{
                width: `${(scrollAmount / (docHeight - window.innerHeight)) * 100}vw`,
            }}
        />
    );
};

const PageScrollVisualizer = styled(PageScrollVisualizerBase)`
    top: 0;
    left: 0;
    height: 5px;
    width: 100vw;
    z-index: 1000;
    position: fixed;
    background-color: #000000;
`;

export { PageScrollVisualizer };
