// URL base de la API de Restcountries
const baseUrl = "https://restcountries.com/v3.1/";

// Endpoint para obtener la lista de todos los países
const endpoint = "all";

// Función para agregar opciones al datalist
function addCountryToDatalist(countryName) {
  const countriesDatalist = document.getElementById("countries");
  const option = document.createElement("option");
  option.value = countryName;
  countriesDatalist.appendChild(option);
}

// Realiza una solicitud GET a la API
fetch(baseUrl + endpoint)
  .then(response => response.json())
  .then(data => {
    // Obtén solo los nombres de los países
    const countryNames = data.map(country => country.name.common);
    
    // Ordena la lista de nombres de países alfabéticamente
    countryNames.sort();

    // Limpia el datalist actual
    const countriesDatalist = document.getElementById("countries");
    countriesDatalist.innerHTML = '';

    // Agrega los nombres de países ordenados al datalist
    countryNames.forEach(countryName => {
      addCountryToDatalist(countryName);
    });
  })
  .catch(error => {
    console.error("Error en la solicitud:", error);
  });
