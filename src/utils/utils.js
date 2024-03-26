
export const formatDate = (transactionDate) => {
  const date = new Date(transactionDate + 'T00:00:00Z')
  return date.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: '2-digit', year: 'numeric' });
}

export const formatAmount = (transactionAmount) => {
  return transactionAmount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
}