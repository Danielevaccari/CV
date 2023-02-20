import * as React from "react";
import PersonalProjects from "./personalProjects/PersonalProjects";
import "../../css/index.css";
import { frontPageBgColorDark, frontPageBgColorLight } from "../../css/colors/colors";
import { EThemeMode, IThemeContext, ThemeContext } from "../theme/ThemeProvider";

const Frontpage: React.FunctionComponent = () => {
    const theme = React.useContext<IThemeContext>(ThemeContext);

    return (
        <>
            <section className="personal-projects">
                <div
                    className="personal-projects-container"
                    style={{
                        backgroundColor:
                            theme.mode === EThemeMode.Dark
                                ? frontPageBgColorDark
                                : frontPageBgColorLight,
                    }}>
                    <PersonalProjects />
                </div>
            </section>
        </>
    );
};

export default Frontpage;
