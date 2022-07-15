var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length; i++){

   var paciente = pacientes[i];

 var tdPeso = paciente.querySelector(".info-peso");
 var peso = tdPeso.textContent;

 var tdAltura = paciente.querySelector(".info-altura");
 var altura = tdAltura.textContent;

 var imc = paciente.querySelector(".info-imc");

 var PesoV = true;
 var AlturaV= true;

 if(peso<=0 || peso>=1000){
    PesoV = false;
    imc.textContent = "Peso inválido!";
    paciente.classList.add("pacienteinvalido");
 }
 if(altura<=0 || altura>=3){
    AlturaV= false;
    imc.textContent = "Altura inválida!";
    paciente.classList.add("pacienteinvalido");
 }
 if(PesoV && AlturaV){
   var imcN = calculaImc(peso,altura);
   imc.textContent = imcN;
 }
}

function calculaImc(peso,altura){
   var imc = 0;
    imc = peso/(altura*altura);
  return imc.toFixed(2);
}
