const rs= require('readline-sync') ; 

let num1 = rs.question("Insira um valor: ")

let num2 = rs.question("Insira outro valor: ")

num1 = Number(num1)
num2 = Number(num2)

if (num1 > num2){
    console.log(`o numero ${num1} é maior!`)
}else if (num1 === num2){
    console.log('Os numeros são iguais!')
}else {
    console.log(`O numero ${num2} é maior!`)
}