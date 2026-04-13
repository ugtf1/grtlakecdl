import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/programs', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://www.greatlakescdlacademy.net' });
links.forEach(link => stream.write(link));
stream.end();

stream.pipe(createWriteStream('./public/sitemap-greatlakes.xml'));
