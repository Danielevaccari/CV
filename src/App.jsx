/* eslint-disable max-len */
import React from 'react';
import Frontpage from './Components/frontpage/Frontpage.component';
import Bio from './Components/personalBio/PersonalBio.component';
import CurriculumVitaePage from './Components/curriculumVitaePage/CurriculumVitaePage.component';
import ImageSlider from './Components/imageSlider/ImageSlider.component';
import TechSkillsDisplay from './Components/techSkillsDisplay/TechSkillsDisplay.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 *
 * @return {React}
 * Routing of the application
 */
function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/'
            element={
              <>
                <Bio />
                <TechSkillsDisplay />
                <Frontpage />
                <ImageSlider />
              </>
            }>
          </Route>

          <Route path='/cv'
            element={
              <CurriculumVitaePage />
            }>
          </Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
