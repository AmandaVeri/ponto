export function formatCurrency(value: number, currency = 'BRL', locale = 'pt-BR') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

export function formatDate(value: Date | string, locale = 'pt-BR', timeZone?: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone }).format(new Date(value));
}
