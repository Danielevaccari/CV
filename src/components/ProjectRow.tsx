import * as React from "react";
import { darkFrontFontColor } from "../css/colors";
import "../css/index.css";

type Props = {
    id: number;
    description: string;
    image: string;
    href: string;
    icons: string[];
};

const Project = ({ description, image, href, icons, id }: Props) => {
    const [x, setX] = React.useState<number>(1);
    const [y, setY] = React.useState<number>(1);
    const [offTop, setOffTop] = React.useState<number>(0);
    const [offLeft, setOffLeft] = React.useState<number>(0);
    const [height, setHeigth] = React.useState<number>(0);
    const [width, setWidth] = React.useState<number>(0);
    const [hovered, setHovered] = React.useState<boolean>(false);

    const row = React.useRef<HTMLElement | null>();

    const platformOffset = (event: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
        if (row.current) {
            setX(event.pageX - offLeft);
            setY(event.pageY - offTop);
            setOffTop(row.current.offsetTop);
            setOffLeft(row.current.offsetLeft);
            setContainerHeightWidth();
            setHovered(true);
            styleStringModify();
        }
    };

    const setContainerHeightWidth = () => {
        if (row.current) {
            setHeigth(row.current.offsetHeight);
            setWidth(row.current.clientWidth);
        }
    };

    const styleStringModify = () => {
        if (hovered && row.current) {
            row.current.style.transform =
                "perspective(500px) scale(1.08) rotateX(" +
                -20 * ((y - height / 2) / height) +
                "deg) rotateY(" +
                20 * ((x - width / 2) / width) +
                "deg)";
        }
    };

    const resetTilting = () => {
        if (row.current) {
            row.current.style.transform =
                "perspective(500px) scale(1) rotateX(0deg) rotateY(0deg) skewy(-5deg)";
        }
    };

    function openProjectLink(href: string) {
        window.open(href);
    }

    React.useEffect(() => {
        row.current = document.getElementById(id.toString());
    }, []);

    return (
        <div className="personal-projects-row">
            <div className="personal-projects-row__left">
                <span
                    className="personal-projects-description"
                    style={{ color: darkFrontFontColor }}>
                    {description}
                </span>
                <span className="personal-projects-description-footer">
                    {icons.map(image => {
                        return (
                            <img
                                src={image}
                                className="personal-projects-description-footer-image"
                                key={image}></img>
                        );
                    })}
                </span>
            </div>
            <div className="personal-projects-row__right">
                <div style={{ textDecoration: "none" }} className="jj">
                    <img
                        id={id.toString()}
                        className="personal-projects-image"
                        src={image}
                        onMouseMove={e => platformOffset(e)}
                        onMouseOut={() => setHovered(false)}
                        onMouseLeave={() => resetTilting()}
                        onClick={() => openProjectLink(href)}
                    />
                </div>
            </div>
        </div>
    );
};

export { Project };
