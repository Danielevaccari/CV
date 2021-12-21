/* eslint-disable react/jsx-key */
import React from 'react';
import personalProjects from './personalProjects.data';
import Project from './Project.component';

const PersonalProjects = () => {
  // return (
  //   personalProjects.forEach((item) => {
  //     console.log(item);
  //   })
  // );
  return (
    personalProjects.map((project) => {
      return (
        <Project
          key={project.id}
          id={project.id}
          image={project.image}
          description={project.description}
          href={project.href}
          technology={project.technology}
          alt={project.alt}
        />
      );
    })
  );
};

export default PersonalProjects;
