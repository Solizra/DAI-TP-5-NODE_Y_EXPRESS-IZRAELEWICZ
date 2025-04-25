const horaActual = () =>
{
    const ahora = new Date();
    const horas = ahora.getHours().toString()
    const minutos = ahora.getMinutes().toString()
    const segundos = ahora.getSeconds().toString()
    return `son las: ${horas}:${minutos}:${segundos}`;
}

const fechaCompleta = () =>
{
    const ahora = new Date();
    
    const diaSemana = ahora.getDay();
    const mes = ahora.getMonth();
    const año = ahora.getFullYear();
    const hora = horaActual();

     return `${diaSemana} de ${mes} de ${año}, ${hora}`;
}

export { horaActual, fechaCompleta };

  