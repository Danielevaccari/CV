import * as React from "react";
import { PersonalBio } from "./PersonalBio";
import emeraldCity from "../../images/emeraldCity.svg";

const Frontpage = () => {
    return (
        <div className="frontpage-wrapper">
            <img
                src={emeraldCity}
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    zIndex: "-1",
                }}
            />
            <PersonalBio />
        </div>
    );
};

export default Frontpage;
