import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://www.gl-cdl.com' });
links.forEach(link => stream.write(link));
stream.end();

stream.pipe(createWriteStream('./public/sitemap-gl.xml'));
