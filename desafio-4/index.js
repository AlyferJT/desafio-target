// VALUE LIST
const revenue = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

// Calculo do faturamento total
const totalRevenue = Object.values(revenue).reduce(
	(acc, value) => acc + value,
	0
);

// Calculo do percentual de cada estado
const percentages = {};
for (const [state, value] of Object.entries(revenue)) {
	percentages[state] = (value / totalRevenue) * 100;
}

// Envia o resultado para o console
for (const [state, percentage] of Object.entries(percentages)) {
	console.log(`${state}: ${percentage.toFixed(2)}%`);
}
