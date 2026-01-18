import * as React from "react";
import typescriptIcon from "../images/typescriptIcon.svg";
import htmlsvg from "../images/htmlSvg.svg";
import csssvg from "../images/cssSvg.svg";
import reactsvg from "../images/reactSvg.svg";
import gitsvg from "../images/gitsvg.svg";
import reduxsvg from "../images/reduxSvg.svg";
import cypresssvg from "../images/cypress.svg";
import sqlicon from "../images/sqlicon.svg";
import "../css/index.css";
import styled from "@emotion/styled";

type Props = {
    className?: string;
};

const TechInfoListBase = ({ className }: Props) => {
    return (
        <section className={className}>
            <div className="tech-skills-display-container">
                <h1 className="tech-skills-display-container-header">Experience</h1>

                <div className="tech-skills-display-top">
                    <img className="tech-skills-display-top-img" src={typescriptIcon} />
                    <img className="tech-skills-display-top-img" src={reactsvg} />
                    <img className="tech-skills-display-top-img" src={htmlsvg} />
                    <img className="tech-skills-display-top-img" src={csssvg} />
                </div>
                <div className="tech-skills-display-bottom">
                    <img className="tech-skills-display-top-img" src={sqlicon} />
                    <img className="tech-skills-display-top-img" src={gitsvg} />
                    <img className="tech-skills-display-top-img" src={reduxsvg} />
                    <img className="tech-skills-display-top-img" src={cypresssvg} />
                </div>
            </div>
        </section>
    );
};

const TechInfoList = styled(TechInfoListBase)`
    height: 60vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .tech-skills-display-top-img {
        height: 70px;
        width: 70px;
        padding: 5px;
    }

    .tech-skills-display-top-img:hover {
        transform: scale(1.08);
    }

    @media (max-width: 426px) {
        .tech-skills-display-icon {
            height: 45px;
            width: 45px;
        }
    }
`;

export { TechInfoList };
