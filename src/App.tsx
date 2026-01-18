import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageScrollVisualizer } from "./components/PageScrollVisualizer";
import { NavigationBar } from "./components/NavigationBar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Frontpage } from "./components/Frontpage";

const App = () => {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <NavigationBar />
                    <PageScrollVisualizer />

                    <Routes>
                        <Route path="/" element={<Frontpage />} />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
