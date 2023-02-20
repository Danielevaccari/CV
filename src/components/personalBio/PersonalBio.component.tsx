import * as React from "react";
import grass from "../../images/grass.svg";
import "../../css/index.css";
import { EThemeMode, IThemeContext, ThemeContext } from "../theme/ThemeProvider";

const PersonalBio: React.FunctionComponent = () => {
    const [rotated, setRotated] = React.useState<boolean>(false);
    const theme = React.useContext<IThemeContext>(ThemeContext);

    const rotate = (): void => {
        setRotated(prevRotated => !prevRotated);
    };

    const backgroundColor =
        theme.mode === EThemeMode.Dark
            ? "linear-gradient(to right, rgb(0, 0, 0), #28282b)"
            : "linear-gradient(to right, rgb(0, 0, 0), #4E5990)";

    return (
        <>
            <section className="personal-bio-wrapper">
                <div className="personal-bio-left" style={{ background: backgroundColor }}>
                    <div
                        className={"personal-bio-flipper-container"}
                        style={{ transform: rotated ? "rotateY(180deg)" : "" }}>
                        <div className="personal-bio-flipper-front" onClick={rotate}>
                            <img id="bioimg" src={""} alt="" />
                        </div>

                        <div className="personal-bio-flipper-back" onClick={rotate}></div>
                    </div>
                </div>

                <div className="personal-bio-right">
                    <div className="personal-bio-right-description">
                        <h3>Welcome</h3>
                        <br />
                        <h4>Portfolio of</h4>
                        <h1>Daniele Vaccari</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PersonalBio;
