import * as React from 'react';
import PersonalProjects from './personalProjects/PersonalProjects';

const Frontpage: React.FunctionComponent = () => {
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