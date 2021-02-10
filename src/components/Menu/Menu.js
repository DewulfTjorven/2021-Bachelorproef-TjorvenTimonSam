import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import pdfFile from './menukaartBuda.pdf';


import style from "./Menu.module.css";


const Menu = () => {
  const location = useLocation();

  const [numPages, setNumPages] = useState(null);
  let [pageNumber, setPageNumber] = useState(1);

  const pdfjs = require("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const document = <Document file={pdfFile}></Document>
  console.log(document.props)

  return (
    <>
      {/* {
        location.pathname === "/bewonerinterface/bewonermenu" ?
          <div className={style.menu}>
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>

            <button className={style.button + " " + style.buttonNextPage} onClick={() => setPageNumber(pageNumber + 1)}>volgende pagina</button>

          </div>
          :
          <section className={style.container}>
            <button className={style.button}>
              <p>Menu</p>
            </button>
          </section>
      } */}

{
        location.pathname === "/bewonerinterface/bewonermenu" ?
          <div>
            <div className={style.menu}>
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

export default Menu;
