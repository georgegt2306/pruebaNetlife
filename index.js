const express = require("express");
const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

app.post("/devolver/anagrama", function (req, res) {
  // Validar que se recibe el parámetro `palabras`
  const { palabras } = req.body;

  if (!Array.isArray(palabras) || palabras.length === 0) {
    return res.status(400).json({ error: "Debe enviar un array de palabras válido." });
  }

  try {
    // Llamar a la función agruparAnagramas con las palabras recibidas
    const resultado = agruparAnagramas(palabras);
    res.json({ anagramas: resultado });
  } catch (error) {
    console.error("Error procesando anagramas:", error);
    res.status(500).json({ error: "Ocurrió un error al procesar los anagramas." });
  }
});

// Función para agrupar anagramas
function agruparAnagramas(palabras) {
  const anagramas = new Map();

  // Agrupamos las palabras por anagramas
  palabras.forEach((palabra) => {
    const clave = palabra.split('').sort().join(''); // Ordenamos las letras para obtener la clave del anagrama
    if (!anagramas.has(clave)) {
      anagramas.set(clave, []);
    }
    anagramas.get(clave).push(palabra);
  });

  // Convertimos el mapa en un array y ordenamos las palabras dentro de cada grupo
  const gruposOrdenados = Array.from(anagramas.values()).map((grupo) =>
    grupo.sort((a, b) => a.localeCompare(b))
  );

  console.log(gruposOrdenados);
  // Ordenamos los grupos según la primera palabra de cada uno
  gruposOrdenados.sort((a, b) => a[0].localeCompare(b[0]));

  console.log(gruposOrdenados);

  return gruposOrdenados;
}

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
