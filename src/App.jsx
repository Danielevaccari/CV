/* eslint-disable max-len */
import React from 'react';
import Frontpage from './components/frontpage/Frontpage.component';
import PersonalBio from './components/personalBio/PersonalBio.component';
import CurriculumVitaePage from './components/curriculumVitaePage/CurriculumVitaePage.component';
import ImageSlider from './components/imageSlider/ImageSlider.component';
import TechSkillsDisplay from './components/techSkillsDisplay/TechSkillsDisplay.component';
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
                <PersonalBio />
                <TechSkillsDisplay />
                <Frontpage />
                <ImageSlider />
              </>
            }>
          </Route>

          <Route path='/cv'
            element={<CurriculumVitaePage /> }>
          </Route>

        </Routes>
      </Router>

    </>
  );
}

export default App;
