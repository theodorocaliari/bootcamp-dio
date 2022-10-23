/*
elabore um algoritmo que dado o peso e altura de um aldulto mostre sua condicao de acordo com a tabela abaixo

imc
abaixo de 18.5 abaixo do peso
entre 18.5 e 25 peso normal
entre 25 e 30 acima do peso
entre 30 e 40 obeso
acima de 40 obesidade grave

imc = peso / (altura * altura)

*/

const pesoEmKg = 90;
const alturaEmM = 1.80;

const imc = pesoEmKg / (alturaEmM * alturaEmM);

console.log(imc);

if(imc > 40){
    console.log("obesidade grave");
}else if(imc > 30 && imc < 40){
    console.log("obeso");
}else if(imc > 25 && imc < 30){
    console.log("acima do peso");
}else if(imc > 18.5 && imc < 25){
    console.log("peso normal");
}else{
    console.log("abaixo do peso");
}