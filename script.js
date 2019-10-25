document.addEventListener('DOMContentLoaded', function(){
//Variables globales
var ano, mes, dia;
var dias = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO']; 
var meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
var options = { year: 'numeric', month: 'long', day: 'numeric' };
//Funcionalidad
document.getElementById('form1').addEventListener('submit', submit);
function pf(f) {
  var fp = f.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);//fechaProcesada con RegExp
  año=fp[3]; mes=fp[2]; dia=fp[1];//globales
  return (fp) ? new Date(fp[3],fp[2]-1, fp[1]) : '-1';
}
function submit(e){ 
  console.log('--------------------------------------');
  e.preventDefault();//Evitamos el submit por defecto
  var fechaProcesada = pf(document.getElementById('input1TextoFecha').value);
  (fechaProcesada == '-1')?muestraError():muestraSalidaEstandar(fechaProcesada);
}
function muestraError(){console.log("Fecha incorrecta");}
function muestraSalidaEstandar(fechaProcesada){
  console.log("Fecha larga: " + fechaProcesada.toLocaleDateString("es-ES",options));
  muestraPrimerDiaSemana(fechaProcesada);
}
function muestraPrimerDiaSemana(fechaProcesada){
  console.log("Dia introducido: " + dia)
  console.log("Mes introducido: " + mes)
  console.log("Año introducido: " + año)
  console.log("1er dia de " + meses[mes-1] + " es " + dias[new Date(año,mes-1).getDay()])
  muestraUltimoDiaSemana(fechaProcesada);
}
function muestraUltimoDiaSemana(fechaProcesada){
/*If you provide 0 as the dayValue in Date.setFullYear you get the last day of the previous month*/
  console.log("Último dia de " + meses[mes-1] + " es " + dias[new Date(año,mes,0).getDay()])
}
})
