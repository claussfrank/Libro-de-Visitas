// funcion que nos  permite previsualizar  el  texto con su parametros predefinidos
function mostrarTexto() {
    var texto = document.getElementById("areaDeTexto").value;
    document.getElementById("textoIngresado").innerHTML = texto;
}


//funciones  para cambiar TAMAÑO de  texto
function textoGrande() {
  document.getElementById("textoIngresado").style.fontSize= "200%"
}
function textoMediano(){
  document.getElementById("textoIngresado").style.fontSize="150%"
}
function textoChico(){
  document.getElementById("textoIngresado").style.fontSize="75%"
}


//funciones para cambiar COLOR de texto
function colorTexto(){
  var colorIngresadoTexto=prompt("Ingresa  el color de tu texto puede ser en: \n En color hexadecimal  #ffffff ó en Inglés como black ");
    document.getElementById("textoIngresado").style.color= colorIngresadoTexto;
}
function colorFondo(){
  var colorIngresadoFondo=prompt("Ingresa  el color de tu texto puede ser en: \n En color hexadecimal  #ffffff ó en Inglés como black ");
    document.getElementById("textoIngresado").style.backgroundColor = colorIngresadoFondo;
}


// funciones  para Alinear texto
function alinearIzq(){
  document.getElementById("textoIngresado").style.textAlign="left";
}
function alinearCentro(){
  document.getElementById("textoIngresado").style.textAlign="center";
}
function alinearDerecha(){
  document.getElementById("textoIngresado").style.textAlign="right";
}
// funcion para  enviar TEXTO CON ESTILO
function enviarComentario(){
  var recibirTexto = document.getElementById("textoIngresado");
  var publicarTexto = recibirTexto.cloneNode(true);
  publicarTexto.removeAttribute("id");

  var publicado = document.getElementById ("textoUsuario");
  textoUsuario.insertBefore(publicarTexto, publicado.firstChild);

  var linea =document.createElement("hr");
  textoUsuario.insertBefore(linea, publicado.firstChild);
}
