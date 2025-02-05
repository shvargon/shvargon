export const protocols = process.argv.includes('dev') ? 'http' : 'https';
export const domain = import.meta.env.VITE_DOMAIN;