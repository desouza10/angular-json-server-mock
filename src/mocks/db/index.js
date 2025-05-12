const fs = require("fs");

const pokemonList = JSON.parse(fs.readFileSync(__dirname + "/pokemons.json"));
const pokemonDetails = JSON.parse(fs.readFileSync(__dirname + "/details.json"));

// Cuidado aqui: NÃO aninhar `pokemonList` dentro de outra chave
const merged = {
  pokemon: pokemonList.pokemon,              // já está no formato certo
  details: pokemonDetails.pokemon
};

fs.writeFileSync(__dirname + "/../db.json", JSON.stringify(merged, null, 2));