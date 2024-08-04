import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { PublicLayout } from '../general/PublicLayout'; // Ajusta la ruta según tu estructura de archivos

const GeneradorPDF = () => {
  const contentRef = useRef();

  const handleGeneratePDF = () => {
    const element = contentRef.current;
    const options = {
      margin: 0,
      filename: 'PublicLayout.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'px', format: 'a0', orientation: 'portrait' } // Usa formato 'a0' para tamaño grande
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      <div ref={contentRef}>
        <PublicLayout />
      </div>
      <button onClick={handleGeneratePDF}>Generar PDF</button>
    </div>
  );
};

export default GeneradorPDF;
