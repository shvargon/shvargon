import { domain, protocols } from '$config';
const pages = ['', 'about'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(page => `
            <url>
                <loc>${protocols}://${domain}/${page}</loc>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
        `).join('')}
    </urlset>`;

export const GET = async () => {
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
};
