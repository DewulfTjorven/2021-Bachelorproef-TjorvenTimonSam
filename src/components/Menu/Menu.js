import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import style from "./Menu.module.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;





const Menu = () => {
  const location = useLocation();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <>
      {
        location.pathname === "/bewonerinterface/bewonermenu" ?
          <div>
            <Document
              file="./menukaart.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            

          </div>
          :
          <section className={style.container}>
            <button className={style.button}>
              <p>Menu</p>
            </button>
          </section>
      }

    </>

  );
};

export default Menu;
