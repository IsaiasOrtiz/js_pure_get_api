const API_KEY = "0tCG0blvAGg68OKgEg2L112YHEnDwKDf";
var limite = prompt("Ingrese el limite de imagenes");
var url_base = "https://api.giphy.com/v1/gifs/trending?api_key=[API_KEY]&limit=[LIMIT]";
//var url_base = "https://api.giphy.com/v1/gifs/random?api_key=[API_KEY]";

var imagenModal = document.getElementById("modalImg");

url_base = url_base.replace("[API_KEY]",API_KEY);
url_base = url_base.replace("[LIMIT]",limite);
async function peticion(){
    const peticion  =  await fetch(url_base);
    const respuesta = peticion.json();
    return respuesta;
}
function addImagenBtn(componente){
  var componenteId = componente.id;
  console.log(componenteId);
}
function indexa(imagen){
  document.getElementById("modalImg").src = imagen;
  console.log(" ES : " + imagen );
}
function tarjeta(titulo, descripcion, imagen)
{
    var tarjeta = "<div class='col-md-4'>"+
    "<div class='card text-center'>"+
    "<div class='card-header d-flex bg-dark text-white justify-content-between align-items-center'>"+
    titulo+  
    "</div>"+
    "<img src='"+imagen+"'>"+
    "<div class='card-body'>  <p> "+
    descripcion+"</p><a class='btn btn-info btn-block' onclick='indexa(`"+imagen+"`)' data-toggle='modal' data-target='.bd-example-modal-lg'>Ver</a></div> </div></div>";
    return tarjeta;
}

function promesa(texto){
  const array_datos = texto.data;
  var tarjetas = "";
  for(var i=0 ; i<array_datos.length ; i++){
    tarjetas = tarjetas + tarjeta(array_datos[i].username , array_datos[i].title, array_datos[i].images.original.webp, i);
  }
  document.getElementById("contenido").innerHTML = tarjetas;
  console.log(tarjetas);
}


peticion().then(promesa);


