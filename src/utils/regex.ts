export const isValidPhonenumber = (value: string) => {
  return /^\d{7,}$/.test(value.replace(/[\s()+\-\.]|ext/gi, ''));
};
