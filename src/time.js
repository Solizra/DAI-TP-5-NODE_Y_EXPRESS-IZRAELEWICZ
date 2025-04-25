export function horaActual()
{
    const ahora = new Date();
    const horas = ahora.getHours()
    const minutos = ahora.getMinutes()
    const segundos = ahora.getSeconds()
    return `${horas}:${minutos}:${segundos}`;
}

module.exports = 
{
    ahora, horas, minutos, segundos
}


  