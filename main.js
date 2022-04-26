function generatePDF(){
    const element = document.getElementById("invoice");

    html2pdf()
    .from(element)
    .save("CV-CarlozMata.pdf");
}