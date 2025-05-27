import React, { useEffect } from 'react';
import jsPDF from 'jspdf';

const Certificado = () => {
  useEffect(() => {
    const doc = new jsPDF();
    doc.text('Certificado de Conclusão', 20, 20);
    doc.text(`Nome: Jonatas Luiz Soares da Costa`, 20, 40);
    doc.text(`Curso: Segurança Operacional Ferroviária`, 20, 50);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, 60);
    doc.save('certificado.pdf');
  }, []);

  return (
    <div>
      <h2>Seu certificado foi gerado!</h2>
      <p>Verifique sua pasta de downloads.</p>
    </div>
  );
};

export default Certificado;
