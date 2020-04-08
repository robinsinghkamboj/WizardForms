export const mobile = (value) => value.replace(/[^\d]/g, '').slice(0, 10);

export const captialize = (value) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);