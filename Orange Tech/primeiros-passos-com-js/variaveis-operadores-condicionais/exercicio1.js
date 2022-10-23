/*
Faca um algoritmo que dado as 3 notas de um aluno calcule e imprima a sua media a sua classificacao conforme tabela abaixo

media menor que 5 - reprovado
media entre 5 e 7 - recuperacao
media acima de 7 - aprovado

*/

const nota1 = 10;
const nota2 = 4;
const nota3 = 2;

const media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
    console.log("Aprovado");
}else if(media <= 7)
{
    console.log("Recuperacao");
}
else{
    console.log("Reprovado");
}