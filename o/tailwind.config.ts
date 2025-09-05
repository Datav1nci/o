import type { Config } from 'tailwindcss';


const config: Config = {
darkMode: ['class'],
content: [
'./app/**/*.{ts,tsx}',
'./components/**/*.{ts,tsx}',
'./content/**/*.{md,mdx,json}',
],
theme: {
extend: {
container: { center: true, padding: '1rem' }
},
},
plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
export default config;