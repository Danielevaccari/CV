import {
    EducationAndLanguages,
    Experience,
    Footer,
    Intro,
    Projects,
    ScrollProgress,
    Skills,
    ThemeToggle,
} from "./components";

const App = () => (
    <div className="page">
        <ScrollProgress />
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
