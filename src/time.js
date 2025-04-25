const horaActual = () =>
{
    const ahora = new Date();
    const horas = ahora.getHours().toString()
    const minutos = ahora.getMinutes().toString()
    const segundos = ahora.getSeconds().toString()
    return `son las: ${horas}:${minutos}:${segundos}`;
}

export default horaActual
  