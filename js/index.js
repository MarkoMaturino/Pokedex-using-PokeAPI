
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function makeUL(array) {
  const list = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(array[i]));
      list.appendChild(item);
  }
  return list;
}

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const pokemonTypes = data.types.map(x => capitalizeFirstLetter(x.type.name)).join("/")
        const pokemonMoves = data.moves.map(x=> x.version_group_details[0].level_learned_at + ':' + x.move.name ) 
        document.querySelector(".pokemon").innerText =  capitalizeFirstLetter(data.name)
        document.querySelector('.pokemonPicture').src  = data.sprites.other["official-artwork"]["front_default"]
        document.querySelector(".pokemonType").innerText = ` Type:${pokemonTypes}`
        document.querySelector(".pokemonMoves").innerHTML = ""
        document.querySelector('.pokemonMoves').appendChild(makeUL(pokemonMoves))
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
