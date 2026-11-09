import {
    EducationAndLanguages,
    Experience,
    Footer,
    Intro,
    Projects,
    Skills,
    ThemeToggle,
} from "./components";

const App = () => (
    <div className="page">
        <ThemeToggle />
        <main>
            <Intro />
            <Experience />
            <Skills />
            <Projects />
            <EducationAndLanguages />
        </main>
        <Footer />
    </div>
);

export default App;
