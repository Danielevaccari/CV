import * as React from "react";
import CurriculumVitaePage from "./components/curriculumVitaePage/CurriculumVitaePage";
import ImageSlider from "./components/imageSlider/ImageSlider";
import TechSkillsDisplay from "./components/techSkillsDisplay/TechSkillsDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageScrollVisualizer from "./components/pageScrollVisualizer/PageScrollVisualizer";
import NavigationBar from "./components/navigationBar/NavigationBar";
import ThemeProvider from "./components/theme/ThemeProvider";
import Projects from "./components/projects/Projects";
import Frontpage from "./components/frontpage/Frontpage";
import Counter from "./components/counter/Counter";

const App = (): JSX.Element => {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <NavigationBar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <PageScrollVisualizer />
                                    {/* <Counter /> */}
                                    <Frontpage />
                                    <Projects />
                                    <TechSkillsDisplay />
                                    <ImageSlider />
                                </>
                            }
                        />
                        <Route path="/cv" element={<CurriculumVitaePage />} />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
