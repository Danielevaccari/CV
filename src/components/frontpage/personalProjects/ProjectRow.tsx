import * as React from "react";
import "../../../css/index.css";
import { IProject } from "../../../interfaces";

const Project: React.FunctionComponent<IProject> = props => {
    const [x, setX] = React.useState<number>(1);
    const [y, setY] = React.useState<number>(1);
    const [offTop, setOffTop] = React.useState<number>(0);
    const [offLeft, setOffLeft] = React.useState<number>(0);
    const [height, setHeigth] = React.useState<number>(0);
    const [width, setWidth] = React.useState<number>(0);
    const [hovered, setHovered] = React.useState<boolean>(false);

    const row = React.useRef<HTMLElement | null>(
        document.getElementById(props.id)
    );

    const platformOffset = (
        event: React.MouseEvent<HTMLImageElement, MouseEvent>
    ): void => {
        if (row.current !== null) {
            setX(event.pageX - offLeft);
            setY(event.pageY - offTop);
            setOffTop(row.current.offsetTop);
            setOffLeft(row.current.offsetLeft);
            setContainerHeightWidth();
            setHovered(true);
            styleStringModify();
        }
    };

    const setContainerHeightWidth = (): void => {
        if (row.current) {
            setHeigth(row.current.offsetHeight);
            setWidth(row.current.clientWidth);
        }
    };

    const styleStringModify = (): void => {
        if (hovered && row.current !== null) {
            row.current.style.transform =
                "perspective(500px) scale(1.08) rotateX(" +
                -20 * ((y - height / 2) / height) +
                "deg) rotateY(" +
                20 * ((x - width / 2) / width) +
                "deg)";
        }
    };

    const resetTilting = (): void => {
        if (row.current) {
            row.current.style.transform =
                "perspective(500px) scale(1) rotateX(0deg) rotateY(0deg) skewy(-5deg)";
        }
    };

    return (
        <div className="personal-projects-row">
            <div className="personal-projects-row__left">
                <span className="personal-projects-description">
                    {props.description}
                </span>
                <span className="personal-projects-description-footer">
                    {props.icons.map(image => {
                        return (
                            <img
                                src={image}
                                className="personal-projects-description-footer-image"
                                key={image}
                            ></img>
                        );
                    })}
                </span>
            </div>
            <div className="personal-projects-row__right">
                <a
                    style={{ textDecoration: "none" }}
                    href={props.href}
                    className="jj"
                >
                    <img
                        id={props.id}
                        className="personal-projects-image"
                        src={props.image}
                        onMouseMove={e => platformOffset(e)}
                        onMouseOut={() => setHovered(false)}
                        onMouseLeave={() => resetTilting()}
                    ></img>
                </a>
            </div>
        </div>
    );
};

export default Project;
