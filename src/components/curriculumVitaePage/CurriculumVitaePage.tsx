import * as React from "react";
import cvsvg from "../../images/cv1.svg";
import cvsvg2 from "../../images/cv2.svg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../css/index.css";

const CV: React.FunctionComponent = () => {
    const [pageNumber, setPageNumber] = React.useState<boolean>(false);

    return (
        <>
            <div className="cvWalls">
                <div className="cvContainer">
                    <div className="paper">
                        {!pageNumber ? (
                            <img className="cvPdfSvg" src={cvsvg} alt=""></img>
                        ) : (
                            ""
                        )}
                        {pageNumber ? (
                            <img className="cvPdfSvg" src={cvsvg2} alt=""></img>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <Button disableRipple component={Link} to="/" size="large">
                    Frontpage
                </Button>
                <div>
                    <Button disableRipple onClick={() => setPageNumber(false)}>
                        ←
                    </Button>
                    <Button disableRipple onClick={() => setPageNumber(true)}>
                        →
                    </Button>
                </div>
            </div>
        </>
    );
};

export default CV;
