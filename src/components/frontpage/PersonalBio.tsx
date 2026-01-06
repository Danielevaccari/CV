import * as React from "react";
import "../../css/index.css";

const PersonalBio: React.FunctionComponent = () => {
    return (
        <>
            <section className="personal-bio-wrapper">
                <div className="personal-bio-left"></div>

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

export { PersonalBio };
