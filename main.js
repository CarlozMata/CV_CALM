function generatePDF(){
    const element = document.getElementById("print");

    html2pdf()
    .from(element)
    .save("CV-CarlozMata.pdf");
}
