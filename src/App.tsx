import * as React from "react";
import TechSkillsDisplay from "./components/techSkillsDisplay/TechSkillsDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageScrollVisualizer from "./components/pageScrollVisualizer/PageScrollVisualizer";
import NavigationBar from "./components/navigationBar/NavigationBar";
import ThemeProvider from "./components/theme/ThemeProvider";
import { Projects } from "./components/projects/Projects";
import Frontpage from "./components/frontpage/Frontpage";

const App = () => {
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
                                    <Frontpage />
                                    <TechSkillsDisplay />
                                    <Projects />
                                </>
                            }
                        />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
