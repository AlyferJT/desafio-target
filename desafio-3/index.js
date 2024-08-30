// IMPORTS
const fs = require("fs");

// JSON Path - Caminho do arquivo com os dados do faturamento do mês
const filePath = "data.json";

// Função que retorna o cálculo das informações do arquivo JSON
function calculateRevenue(filePath) {
	const data = fs.readFileSync(filePath, "utf-8");
	const revenue = JSON.parse(data);

	// Filtro dos dias com faturamento válido
	const validRevenues = revenue
		.filter((dia) => dia.valor > 0)
		.map((dia) => dia.valor);

	// Filtrar dia de menor e maior faturamento
	const lowerRevenue = Math.min(...validRevenues);
	const higherRevenue = Math.max(...validRevenues);

	// Calculo da média do mês
	const monthlyAverage =
		validRevenues.reduce((acc, val) => acc + val, 0) / validRevenues.length;

	// Contagem de dias com faturamento acima da média
	const aboveAverageDays = validRevenues.filter(
		(valor) => valor > monthlyAverage
	).length;

	return { lowerRevenue, higherRevenue, aboveAverageDays };
}

// Coleta os dados
const { lowerRevenue, higherRevenue, aboveAverageDays } =
	calculateRevenue(filePath);

// Envia os resultados para o console
console.log(`Menor valor de faturamento: ${lowerRevenue}`);
console.log(`Maior valor de faturamento: ${higherRevenue}`);
console.log(`Dias com faturamento acima da média: ${aboveAverageDays}`);
