import * as React from "react";
import "../../css/index.css";

const PersonalBio: React.FunctionComponent = () => {
    const [rotated, setRotated] = React.useState<boolean>(false);

    const rotate = (): void => {
        setRotated(prevRotated => !prevRotated);
    };

    return (
        <>
            <section className="personal-bio-wrapper">
                <div className="personal-bio-left">
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
                        <h2>Welcome</h2>
                        <br />
                        <h3>Portfolio of</h3>
                        <h1>Daniele Vaccari</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PersonalBio;
