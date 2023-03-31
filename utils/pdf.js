function convertToPdf(data,id) {
  const { jsPDF } = require("jspdf");

  const doc = new jsPDF();
  doc.text(data, 10, 10);
  path = '../data/pdf/output'+id+'.pdf'
  console.log('Outputing to', path)
  doc.save(path);
  
}

convertToPdf("Jes",12)

