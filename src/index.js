// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default



// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function createPokemonCard(card) {
    let liEl = document.createElement('li')
    liEl.className = 'card'
    let imgEl = document.createElement('img')
    imgEl.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    imgEl.alt = ''
    imgEl.className = "card--img"
    let h2El = document.createElement('h2')
  h2El.textContent = `Name: ${'pokemon."pokemon"'}`
  document.body.append(liEl)
  liEl.append(imgEl)
  h2El.innerText = 'Bulbasa'
  
     }

     createPokemonCard(data) 