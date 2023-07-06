let student = prompt("Qual o seu nome")
let n1 = prompt("digite sua primeira nota")
let n2 = prompt("digite sua segunda nota")

let avarege = (Number(n1)+ Number(n2)) / 2

let result = avarege > 7

avarege = avarege.toFixed(2)

if (result) {
  alert(" a media do aluno" + student + "foi: " + avarege + "passou com sucesso!")
  
} else {
  alert("a media do aluno foi de: " + avarege + " nao foi dessa vez tente novamente.")
  
}