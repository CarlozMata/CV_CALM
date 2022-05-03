function generatePDF(){
    const element = document.getElementById("print");

    html2pdf()
    .from(element)
    .save("CV-CarlozMata.pdf");
}

function mostrarCertificados() {
    document.getElementById('certificados').style.display = 'block';
    document.getElementById('button-certification-on').style.display = 'none';
    document.getElementById('button-certification-off').style.display = 'block'; 
}
function ocultarCertificados() {
    document.getElementById('certificados').style.display = 'none';
    document.getElementById('button-certification-off').style.display = 'none';
    document.getElementById('button-certification-on').style.display = 'block';
} 
/*YA SE ACTUALIZO?*/