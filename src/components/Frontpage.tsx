import * as React from "react";
import emeraldCity from "../images/emeraldCity.svg";
import { TechInfoList } from "./TechInfoList";
import { Projects } from "./Projects";
import styled from "@emotion/styled";

type Props = { className?: string };

const FrontpageBase = ({ className }: Props) => {
    return (
        <>
            <div className={className}>
                <img
                    src={emeraldCity}
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        zIndex: "-1",
                    }}
                />

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
            </div>

            <TechInfoList />

            <Projects />
        </>
    );
};

const Frontpage = styled(FrontpageBase)`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

export { Frontpage };
