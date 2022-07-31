// DON't forget update index.html after update types!

export const envConfig = (process.env || (window as any).env) as { REACT_APP_SENTRY_DSN: string; NODE_ENV: string };

export const basePath = 'https://react-learwords.herokuapp.com';
