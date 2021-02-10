import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import pdfFile from './Magazine WZC febr 2021.pdf';


import style from "./Signaal.module.css";


const Signaal = () => {
  const location = useLocation();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfjs = require("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const document = <Document file={pdfFile}></Document>
  console.log(document.props.file)

  return (
    <>
      {
        location.pathname === "/bewonerinterface/bewonersignaal" ?
          <div>
            <div className={style.signaal}>
            {pageNumber > 1 ? <button className={style.button + " " + style.buttonNextPage} onClick={() => setPageNumber(pageNumber - 1)}>vorige pagina</button> : null}
              <Document
                file={pdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <button className={style.button + " " + style.buttonNextPage} onClick={() => setPageNumber(pageNumber + 1)}>volgende pagina</button>
  
  
            </div>
              <p>Pagina {pageNumber} van {numPages}</p>
          </div>
          :
          <section className={style.container}>
            <button className={style.button}>
              <p>Signaal</p>
            </button>
          </section>
      }

    </>

  );

};

export default Signaal;
