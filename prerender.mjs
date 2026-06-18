import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log('Building SSR bundle...');

  await build({
    logLevel: 'warn',
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist-ssr',
      emptyOutDir: true,
    },
  });

  console.log('Rendering HTML...');

  const { render } = await import(
    pathToFileURL(path.resolve(__dirname, 'dist-ssr/entry-server.js')).href
  );

  const template = fs.readFileSync(
    path.resolve(__dirname, 'dist/index.html'),
    'utf-8'
  );

  const appHtml = render();

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), html);

  fs.rmSync(path.resolve(__dirname, 'dist-ssr'), { recursive: true });

  console.log('✓ Prerendering complete — dist/index.html updated');
}

prerender().catch((err) => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
