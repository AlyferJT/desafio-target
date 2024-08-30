function isInFibonacci(number) {
	// Testa se o número não é negativo ou se não é um número
	try {
		number = parseInt(number);
		if (number < 0) {
			throw new Error("O número deve ser positivo.");
		}
	} catch (e) {
		console.log(`Entrada inválida: ${e.message}`);
		return false;
	}

	// Acrescenta um número fibonacci na lista até ultrapassar o valor de number
	let fibonacciList = [0, 1];
	while (number > fibonacciList[fibonacciList.length - 1]) {
		fibonacciList.push(
			fibonacciList[fibonacciList.length - 1] +
				fibonacciList[fibonacciList.length - 2]
		);
	}

	// Retorna um valor Boolean se o número estiver na lista
	return fibonacciList.includes(number);
}

// Pede um input do usuário
const userInput = prompt(
	"Digite um número para verificar se ele faz parte da sequência de Fibonacci: "
);
const result = isInFibonacci(userInput);

// Envia o resultado para o console
if (result) {
	console.log("Este número pertence à sequência de Fibonacci");
} else {
	console.log("Este número NÃO pertence à sequência de Fibonacci");
}
