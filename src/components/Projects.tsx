import * as React from "react";
import "../css/index.css";
import { frontPageBgColorDark, frontPageBgColorLight } from "../css/colors";
import { EThemeMode, IThemeContext, ThemeContext } from "./ThemeProvider";
import { Project } from "./ProjectRow";
import { personalProjects } from "./constants";

const Projects = () => {
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
                    {personalProjects.map(project => {
                        return (
                            <Project
                                key={project.id}
                                id={project.id}
                                image={project.image}
                                description={project.description}
                                href={project.href}
                                icons={project.icons}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export { Projects };
