/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    connect-src 'https://personalwebsitewagtailprod.onrender.com';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' 'https://fonts.googleapis.com/';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'https://www.figma.com/';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
 
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
}