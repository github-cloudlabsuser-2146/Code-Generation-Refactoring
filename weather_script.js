// Función para obtener datos meteorológicos
async function obtenerDatosMeteorologicos(ciudad) {
    const apiKey = "e8468cf3e6cf8e794eb79d998300709f"; // Reemplaza con tu clave de API de OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} - ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();

        // Mostrar datos meteorológicos
        console.log(`Clima en ${datos.name}, ${datos.sys.country}:`);
        console.log(`Temperatura: ${datos.main.temp}°C`);
        console.log(`Humedad: ${datos.main.humidity}%`);
        console.log(`Descripción: ${datos.weather[0].description}`);
    } catch (error) {
        console.error("Error al obtener los datos meteorológicos:", error.message);
    }
}

// Solicitar al usuario el nombre de la ciudad
const ciudad = prompt("Introduce el nombre de la ciudad para consultar el clima:");
if (ciudad) {
    obtenerDatosMeteorologicos(ciudad);
} else {
    console.log("No se proporcionó ninguna ciudad.");
}