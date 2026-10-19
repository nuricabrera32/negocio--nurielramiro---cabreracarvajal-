const btnCargar = document.getElementById('btnCargar');
const divResultado = document.getElementById('resultado');

btnCargar.addEventListener('click', async () => {
    divResultado.innerHTML = '<p>Cargando datos de Dragonite...</p>';

    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/dragonite');

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la informacion.');
        }

        const datos = await respuesta.json();

        // Conversiones requeridas: peso a kg y altura a metros
        const pesoKg = datos.weight / 10;
        const alturaM = datos.height / 10;
        const tipos = datos.types.map(t => t.type.name).join(', ');

        divResultado.innerHTML = `
            <h3>${datos.name.toUpperCase()}</h3>
            <img src="${datos.sprites.front_default}" alt="${datos.name}">
            <p><strong>Tipo(s):</strong> ${tipos}</p>
            <p><strong>Peso:</strong> ${pesoKg} kg</p>
            <p><strong>Altura:</strong> ${alturaM} m</p>
        `;

    } catch (error) {
        divResultado.innerHTML = `<p style="color: red;">Error al conectar con la PokeAPI.</p>`;
    }
});