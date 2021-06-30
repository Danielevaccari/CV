import React, { useState } from 'react'
import cv from '../Images/cv.pdf'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const CV = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'antiquewhite' }}>
                <Button component={Link} to='/' size='large'>Frontpage</Button>
                <Button disableRipple onClick={() => setPageNumber(1)}>←</Button>
                <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page style={{ backgroundColor: 'red' }} pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                <Button disableRipple onClick={() => setPageNumber(2)}>→</Button>
            </div>
        </>
    );

}

export default CV
