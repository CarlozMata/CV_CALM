function generatePDF(){
    const element = document.getElementById("print");

    html2pdf()
    .from(element)
    .save("CV-CarlozMata.pdf");
}

function mostrarCertificadosProfesionales() {
    document.getElementById('certificados_profesionales').style.display = 'block';
    document.getElementById('button-certification-on').style.display = 'none';
    document.getElementById('button-certification-off').style.display = 'block'; 
}
function ocultarCertificadosProfesionales() {
    document.getElementById('certificados_profesionales').style.display = 'none';
    document.getElementById('button-certification-off').style.display = 'none';
    document.getElementById('button-certification-on').style.display = 'block';
} 
function mostrarCertificadosPersonales() {
    document.getElementById('certificados_personales').style.display = 'block';
    document.getElementById('button2-certification-on').style.display = 'none';
    document.getElementById('button2-certification-off').style.display = 'block'; 
}
function ocultarCertificadosPersonales() {
    document.getElementById('certificados_personales').style.display = 'none';
    document.getElementById('button2-certification-off').style.display = 'none';
    document.getElementById('button2-certification-on').style.display = 'block';
} 
