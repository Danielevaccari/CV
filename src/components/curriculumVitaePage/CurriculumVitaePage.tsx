import * as React from "react";
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
                        {!pageNumber ? <img className="cvPdfSvg" src={""} alt=""></img> : ""}
                        {pageNumber ? <img className="cvPdfSvg" src={""} alt=""></img> : ""}
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
