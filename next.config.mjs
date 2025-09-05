/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
poweredByHeader: false,
images: {
remotePatterns: [
{ protocol: 'https', hostname: '**' },
{ protocol: 'http', hostname: '**' }
]
},
async headers() {
const ContentSecurityPolicy = [
"default-src 'self'",
"script-src 'self' 'unsafe-inline' 'unsafe-eval'",
"style-src 'self' 'unsafe-inline'",
"img-src 'self' data: https:",
"font-src 'self' data:",
"connect-src 'self' https:",
"frame-ancestors 'none'",
'base-uri \"none\"',
'form-action \"self\"'
].join('; ');


const securityHeaders = [
{ key: 'Content-Security-Policy', value: ContentSecurityPolicy },
{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
{ key: 'X-Content-Type-Options', value: 'nosniff' },
{ key: 'X-Frame-Options', value: 'DENY' },
{ key: 'X-XSS-Protection', value: '0' },
{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
];


return [
{ source: '/(.*)', headers: securityHeaders }
];
}
};


export default nextConfig;