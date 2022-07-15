var botaoadicionar =document.querySelector("#adicionar-paciente")

botaoadicionar.addEventListener("click",function(event){
 event.preventDefault();
 var form = document.querySelector("#form-adiciona");
 var paciente = obtemPacienteDoFormulario(form);
 var pacienteTr = montaTr(paciente);

 var tabela = document.querySelector("#tabela-pacientes");
 tabela.appendChild(pacienteTr)

})

function obtemPacienteDoFormulario(form){

var paciente = {
nome:form.nome.value,
altura:form.altura.value,
peso:form.peso.value,
gordura:form.gordura.value,
imc:calculaImc(form.peso.value, form.altura.value)
}
return paciente;
}

function montaTr(paciente){
    var pacienteTR =document.createElement("tr");
    var NomeTd = document.createElement("td");
    var AlturaTd = document.createElement("td");
    var PesoTd = document.createElement("td");
    var GorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    NomeTd.textContent = paciente.nome;
    AlturaTd.textContent = paciente.altura;
    PesoTd.textContent = paciente.peso;
    GorduraTd.textContent =paciente.gordura;
    imcTd.textContent = paciente.imc;
   
    pacienteTR.appendChild(NomeTd);
    pacienteTR.appendChild(PesoTd);
    pacienteTR.appendChild(AlturaTd);
    pacienteTR.appendChild(GorduraTd);
    pacienteTR.appendChild(imcTd);

 NomeTd.classList.add("info-nome");
 AlturaTd.classList.add("info-altura");
 PesoTd.classList.add("info-peso");
 GorduraTd.classList.add("info-gordura");
 imcTd.classList.add("info-imc");
 pacienteTR.classList.add("paciente");
    
    return pacienteTR;
}