const horaActual = () =>
{
    const ahora = new Date();
    const horas = ahora.getHours().toString()
    const minutos = ahora.getMinutes().toString()
    const segundos = ahora.getSeconds().toString()
    return `son las: ${horas}:${minutos}:${segundos}`;
}

const fechaCompleta = () => {
    const ahora = new Date();
    
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const diaSemana = diasSemana[ahora.getDay()];
    const diaMes = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    const hora = horaActual();

    return `${diaSemana} ${diaMes} de ${mes} de ${año}, ${hora}`;
};

export { horaActual, fechaCompleta };

  
