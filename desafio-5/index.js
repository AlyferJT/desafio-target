function reverseString(str) {
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
}

// Dados de teste
// const inputString = "Desafio Target Sistemas";
const userStringInput = prompt("Digite uma string para inverter:");
const reversedString = reverseString(userStringInput);

// Envia o resultado para o console
console.log(`A string invertida é: ${reversedString}`);
