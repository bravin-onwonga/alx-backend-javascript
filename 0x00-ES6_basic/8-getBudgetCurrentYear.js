export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  const year = new Date().getFullYear();

  budget[`income-${year}`] = income;
  budget[`gdp-${year}`] = gdp;
  budget[`capita-${year}`] = capita;

  return budget;
}
