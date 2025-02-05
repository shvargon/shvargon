import { text } from '@sveltejs/kit';

const robotText = 
`User-agent: *
Disallow: /admin/
Allow: /
Sitemap: https://example.com/sitemap.xml`

export function GET() {
    return text(robotText);
}
