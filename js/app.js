var pokemones = [
  {
      "src": "assets/img/bulbasaur.png"
  },
  {
      "src": "assets/img/ivysaur.png"
  },
  {
      "src": "assets/img/venusaur.png"
  },
  {
      "src": "assets/img/charmander.png"
  },
  {
      "src": "assets/img/charmeleon.png"
  },
  {
      "src": "assets/img/charizard.png"
  },
  {
      "src": "assets/img/squirtle.png"
  },
  {
      "src": "assets/img/wartortle.png"
  },
  {
      "src": "assets/img/blastoise.png"
  },
  {
      "src": "assets/img/caterpie.png"
  },
  {
      "src": "assets/img/metapod.png"
  },
  {
      "src": "assets/img/butterfree.png"
  },
  {
      "src": "assets/img/weedle.png"
  },
  {
      "src": "assets/img/kakuna.png"
  },
  {
      "src": "assets/img/beedrill.png"
  },
  {
      "src": "assets/img/pidgey.png"
  },
  {
      "src": "assets/img/pidgeotto.png"
  },
  {
      "src": "assets/img/pidgeot.png"
  },
  {
      "src": "assets/img/rattata.png"
  },
  {
      "src": "assets/img/raticate.png"
  },
];

function cargarPagina(){
  var plantillaPokemons = '<section class="col s3 contenidoPokemones">' +
    '<a href="#modal1"><img data-pokemon="__data__" class="imagenesPokemones" src="__imagen__" alt=""></a>'  +
    '<span>__nombre__</span>' +
  '</section>';

  $.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
    var pokemons = response.results;
    nombrePokemones(pokemons, pokemones);
  });
  var nombrePokemones = function(pokemons, pokemones){
    var $contenedor = $("#contenedorPokemon");
    var plantillaFinal = "";
    pokemons.forEach(function(pokemon, indice){
      plantillaFinal += plantillaPokemons.replace("__nombre__", pokemon.name)
                          .replace("__imagen__", pokemones[indice].src)

    });
      $contenedor.html(plantillaFinal);
  };

  function mostrarModal(){
      $.getJSON("http://pokeapi.co/api/v2/pokemon-species/", function(response){
        var colorPokemon = response.result.color;


      });

  };
  console.log(mostrarModal);

$('#modal1').modal();

};

$(document).ready(cargarPagina);
