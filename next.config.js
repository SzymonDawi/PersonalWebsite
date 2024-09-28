/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    connect-src 'self' https://personalwebsitewagtailprod.onrender.com https://api.github.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://wagtail-media-szymon.s3.amazonaws.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src 'self' https://www.figma.com https://embed.figma.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
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