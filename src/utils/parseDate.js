export default function parseDate(fechaCorta) {
  // Expresión regular para extraer día, mes y año
  const partes = fechaCorta.match(/^(\d{2})\/(\d{2})\/(\d{2})$/);

  if (partes) {
    const dia = parseInt(partes[1]);
    const mes = parseInt(partes[2]) - 1; // Los meses en JavaScript empiezan desde 0
    const anio = parseInt(partes[3]) + 2000; // Asumamos que estamos en el siglo XXI

    // Crear un objeto Date con la fecha parseada
    const fecha = new Date(anio, mes, dia);

    // Formatear la fecha en el formato deseado
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
  } else {
    return "Formato de fecha inválido";
  }
}