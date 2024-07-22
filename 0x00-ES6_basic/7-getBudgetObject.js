export default function getBudgetObject(income, gdp, capita) {
  const arg1 = 'income';
  const arg2 = 'gdp';
  const arg3 = 'capita';

  const budget = {
    [arg1]: income,
    [arg2]: gdp,
    [arg3]: capita,
  };

  return budget;
}
