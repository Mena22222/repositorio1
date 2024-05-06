function evaluarFase1(nombre, apellido, departamento, puntajeFP, puntajePI, puntajePOO, evidenciaFP, evidenciaPI, evidenciaPOO, promedioIngles, hizoLeccionesCT) {
    
    let puntajeCT = hizoLeccionesCT ? 100:00;
    let statusIngles = promedioIngles >= 50 ? "ok" : "reprobado";
    let puntajeTecnico = Math.round((puntajeFP*0.3) + (puntajePI*0.5) + (puntajePOO*0.2));
    let evidenciasEntregadas = (evidenciaFP && evidenciaPI && evidenciaPOO) ? 3:0;
    let statusFinal = " ";

    if (puntajeTecnico >=60 && evidenciasEntregadas === 3) {
        statusFinal= "aprobado con " + puntajeTecnico;
    } else if (puntajeTecnico >= 60 && evidenciasEntregadas < 3) {
        statusFinal = "pendiente de examen final";
    } else if (puntajeTecnico >=50 && evidenciasEntregadas === 3) {
        statusFinal = "pendiente de examen final"
    } else {
        statusFinal = "reprobado";
    }

    let mensaje = "Hola " + nombre + "!! El detalle de tu status final es :\n\n" +
    "En Inglés - " + promedioIngles + " puntos - " + statusIngles + "\n" +
    "En CT - " + puntajeCT + " puntos - ok\n" +
    "En Técnica - " + puntajeTecnico + " puntos - ok\n" +
    "En conclusión, tu status final es " + statusFinal + ".";

    return mensaje;
    


}

console.log(evaluarFase1("Alberto", "del Pino", "Canelones", 67, 81, 70, true, true, 4, 90, true));