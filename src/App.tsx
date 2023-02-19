import * as React from "react";
import Frontpage from "./components/frontpage/Frontpage";
import PersonalBio from "./components/personalBio/PersonalBio.component";
import CurriculumVitaePage from "./components/curriculumVitaePage/CurriculumVitaePage";
import ImageSlider from "./components/imageSlider/ImageSlider";
import TechSkillsDisplay from "./components/techSkillsDisplay/TechSkillsDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageScrollVisualizer from "./components/pageScrollVisualizer/PageScrollVisualizer";

const App = (): JSX.Element => {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <PageScrollVisualizer />
                                <PersonalBio />
                                <TechSkillsDisplay />
                                <Frontpage />
                                <ImageSlider />
                            </>
                        }
                    ></Route>

                    <Route path="/cv" element={<CurriculumVitaePage />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
