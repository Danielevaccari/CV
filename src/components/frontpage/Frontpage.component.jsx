import React from 'react';
import PersonalProjects from './personalProjects/PersonalProjects.component';

const Frontpage = () => {
  return (
    <>
      <section className='personal-projects'>
        <div className='personal-projects-container'>
          <PersonalProjects />
        </div>
      </section>
    </>
  );
};

export default Frontpage;
