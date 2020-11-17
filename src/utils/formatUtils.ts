const currencyFormatter = new Intl.NumberFormat([navigator.language, 'fi-FI'], {
  style: 'currency',
  currency: 'EUR',
});

/**
 * Format number as euro currency by the browser's country's formatting
 * specifications (with finnish as a fallback).
 */
export const formatCurrency = (number: number) => currencyFormatter.format(number);
