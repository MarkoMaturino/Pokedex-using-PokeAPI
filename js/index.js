//Example fetch using pokemonapi.co
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
  
        document.querySelector(".pokemon").innerText =  capitalizeFirstLetter(data.name)
        document.querySelector('.pokemonPicture').src  = data.sprites.other["official-artwork"]["front_default"]
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
