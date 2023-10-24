// URL base de la API de Restcountries
const baseUrl = "https://restcountries.com/v3.1/";

// Endpoint para obtener la lista de todos los países
const endpoint = "all";

// Función para agregar filas a la tabla
function addCountryToTable(countryName) {
  const countryList = document.getElementById("country-list");
  const newRow = countryList.insertRow();
  const cell = newRow.insertCell(0);
  cell.innerHTML = countryName;
}

// Realiza una solicitud GET a la API
fetch(baseUrl + endpoint)
  .then(response => response.json())
  .then(data => {
    // Obtén solo los nombres de los países y agrégalos a la tabla
    data.forEach(country => {
      addCountryToTable(country.name.common);
    });
  })
  .catch(error => {
    console.error("Error en la solicitud:", error);
  });
