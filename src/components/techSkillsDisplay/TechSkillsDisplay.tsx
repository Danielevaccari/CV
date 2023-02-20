import * as React from "react";
import typescriptIcon from "../../images/typescriptIcon.svg";
import htmlsvg from "../../images/htmlSvg.svg";
import csssvg from "../../images/cssSvg.svg";
import reactsvg from "../../images/reactSvg.svg";
import gitsvg from "../../images/gitsvg.svg";
import reduxsvg from "../../images/reduxSvg.svg";
import cypresssvg from "../../images/cypress.svg";
import jestsvg from "../../images/jest.svg";
import "../../css/index.css";

const TechInfoList: React.FunctionComponent = () => {
    return (
        <section className="tech-skills-display-wrapper">
            <div className="tech-skills-display-container">
                <h1 className="tech-skills-display-container-header">Experience</h1>

                <div className="tech-skills-display-top">
                    <img className="tech-skills-display-top-img" src={typescriptIcon} />
                    <img className="tech-skills-display-top-img" src={reactsvg} />
                    <img className="tech-skills-display-top-img" src={htmlsvg} />
                    <img className="tech-skills-display-top-img" src={csssvg} />
                </div>
                <div className="tech-skills-display-bottom">
                    <img className="tech-skills-display-bottom-img" src={gitsvg} />
                    <img className="tech-skills-display-bottom-img" src={reduxsvg} />
                    <img className="tech-skills-display-bottom-img" src={cypresssvg} />
                    <img className="tech-skills-display-bottom-img" src={jestsvg} />
                </div>
            </div>
        </section>
    );
};

export default TechInfoList;
