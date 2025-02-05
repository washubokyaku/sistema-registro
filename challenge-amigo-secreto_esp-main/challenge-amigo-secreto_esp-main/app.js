document.addEventListener('DOMContentLoaded', function() {
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnSortear = document.getElementById('btnSortear');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    const inputAmigo = document.getElementById('amigo');

    // Funcionalidad para agregar nombres
    btnAdicionar.addEventListener('click', function() {
        const nombreAmigo = inputAmigo.value.trim();
        if (nombreAmigo) {
            const li = document.createElement('li');
            li.textContent = nombreAmigo;
            listaAmigos.appendChild(li);
            inputAmigo.value = '';
        } else {
            alert('Por favor, ingrese un nombre válido.');
        }
    });

    // Funcionalidad para sortear un amigo secreto
    btnSortear.addEventListener('click', function() {
        const amigos = Array.from(listaAmigos.children).map(li => li.textContent);
        if (amigos.length > 1) {
            const shuffled = amigos.sort(() => 0.5 - Math.random());
            resultado.innerHTML = '';
            shuffled.forEach((amigo, index) => {
                const li = document.createElement('li');
                li.textContent = `${amigo} es el amigo secreto de ${shuffled[(index + 1) % shuffled.length]}`;
                resultado.appendChild(li);
            });
        } else {
            alert('Debe haber al menos dos nombres en la lista para realizar el sorteo.');
        }
    });
});