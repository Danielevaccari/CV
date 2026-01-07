import * as React from "react";
import PersonalProjects from "./personalProjects/PersonalProjects";
import "../../css/index.css";
import { frontPageBgColorDark, frontPageBgColorLight } from "../../css/colors/colors";
import { EThemeMode, IThemeContext, ThemeContext } from "../theme/ThemeProvider";

const Projects: React.FunctionComponent = () => {
    const theme = React.useContext<IThemeContext>(ThemeContext);

    return (
        <>
            <section className="personal-projects">
                <div
                    className="personal-projects-container"
                    style={{
                        backgroundColor:
                            theme.mode === EThemeMode.Dark
                                ? frontPageBgColorDark
                                : frontPageBgColorLight,
                    }}>
                    <div className="personal-projects-header">Projects</div>
                    <div className="personal-projects-header-small">
                        click card on the right to open the project
                    </div>

                    <PersonalProjects />
                </div>
            </section>
        </>
    );
};

export { Projects };
