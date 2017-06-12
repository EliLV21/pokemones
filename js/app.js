function cargarPagina(){
  var plantillaPokemons = '<section class="row">' +
    '<section class="col s4">' +
      '<img data-pokemon="__data__" src="__imagen__" alt="">'  +
      '<h4>__nombre__</h4>' +
    '</section>' +
  '</section>';

  $.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
    console.log(response);
    var pokemons = response.results;
    var $contenedor = $("#contenedorPokemon");
    nombrePokemones(pokemons);
  });
  var nombrePokemones = function(pokemons){
    pokemons.forEach(function(pokemon, indice){
      plantillaPokemons.replace("__nombre__", pokemon.name)
      $contenedor.html(plantillaPokemons);
    });
  };

  $(".button-collapse").sideNav();

};

$(document).ready(cargarPagina);
