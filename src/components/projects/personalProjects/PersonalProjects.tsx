import * as React from "react";
import { personalProjects } from "./personalProjects.data";
import { Project } from "./ProjectRow";

const PersonalProjects: React.FunctionComponent = () => {
    return (
        <>
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
        </>
    );
};

export default PersonalProjects;
