// URL base de la API de Restcountries
const baseUrl = "https://restcountries.com/v3.1/";

// Endpoint para obtener la lista de todos los países
const endpoint = "all";

// Función para agregar opciones al select
function addCountryToSelect(countryName) {
  const countrySelect = document.getElementById("country-select");
  const option = document.createElement("option");
  option.value = countryName;
  option.textContent = countryName;
  countrySelect.appendChild(option);
}

// Realiza una solicitud GET a la API
fetch(baseUrl + endpoint)
  .then(response => response.json())
  .then(data => {
    // Obtén solo los nombres de los países y agrégalos al select
    data.forEach(country => {
      const countryName = country.name.common;
      addCountryToSelect(countryName);
    });
  })
  .catch(error => {
    console.error("Error en la solicitud:", error);
  });
