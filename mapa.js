// Función para cargar datos desde un archivo JSON
function cargarDatosDesdeJSON(archivo, callback) {
    fetch(archivo)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al cargar datos:', error));
}

// Función para crear opciones en un select
function crearOpcionesEnSelect(selectElement, datos) {
    datos.forEach(item => {
        const option = document.createElement('option');
        option.value = item.valor;
        option.textContent = item.nombre;
        selectElement.appendChild(option);
    });
}

const estadoSelect = document.getElementById('estadoSelect');
const municipioSelect = document.getElementById('municipioSelect');

// Cargar y mostrar estados
cargarDatosDesdeJSON('estados.json', estados => {
    crearOpcionesEnSelect(estadoSelect, estados);
});

// Cargar y mostrar municipios
cargarDatosDesdeJSON('municipios.json', municipios => {
    // Obtener un arreglo con todos los municipios
    const todosLosMunicipios = Object.values(municipios).flat();
    // Crear opciones en el select de municipios
    crearOpcionesEnSelect(municipioSelect, todosLosMunicipios);
});

/*
// Evento para cargar y mostrar municipios al seleccionar un estado
estadoSelect.addEventListener('change', function() {
    const selectedEstado = estadoSelect.value;
    // Filtrar municipios por estado
    const municipiosFiltrados = municipios.filter(municipio => municipio.estado === selectedEstado);
    municipioSelect.innerHTML = '<option value="">Selecciona un Municipio</option>'; // Reiniciar el select de municipios
    crearOpcionesEnSelect(municipioSelect, municipiosFiltrados);
});
*/