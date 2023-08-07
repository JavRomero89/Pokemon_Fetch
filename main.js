let pokeID = prompt("Por favor ingresa el ID del Pokémon");

fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
  .then(response => response.json())
  .then(data => {

    document.getElementById('nombre').textContent = data.name;
    document.getElementById('id').textContent = data.id;
    document.getElementById('base_experience').textContent = data.base_experience;
    document.getElementById('height').textContent = data.height;
    document.getElementById('weight').textContent = data.weight;

    let gamesList = document.getElementById('games');
    data.game_indices.forEach(game => {
      let li = document.createElement('li');
      li.textContent = game.version.name;
      gamesList.appendChild(li);
    });

    let typesList = document.getElementById('types');
    data.types.forEach(type => {
      let li = document.createElement('li');
      li.textContent = type.type.name;
      typesList.appendChild(li);
    });

    let movesList = document.getElementById('moves');
    data.moves.forEach(move => {
      let li = document.createElement('li');
      li.textContent = move.move.name;
      movesList.appendChild(li);
    });

    let statsList = document.getElementById('stats');
    data.stats.forEach(stat => {
      let li = document.createElement('li');
      li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
      statsList.appendChild(li);
    });

    let imagesDiv = document.getElementById('images');
    Object.values(data.sprites).forEach(sprite => {
      if (typeof sprite === 'string') {
        let img = document.createElement('img');
        img.src = sprite;
        imagesDiv.appendChild(img);
      }
    });
  });
