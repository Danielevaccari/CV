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
import { Orbs } from "./Orbs";

const App = () => (
    <div className="page">
        <ScrollProgress />
        <Orbs />
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
