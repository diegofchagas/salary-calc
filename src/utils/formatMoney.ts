export const formatMoney = (value: number) => {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits:2,
    style:'currency',
    currency: 'BRL'
  })
};
