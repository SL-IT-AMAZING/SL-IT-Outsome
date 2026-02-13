import { cpSync, mkdirSync, existsSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOME = homedir();
const PUBLIC = resolve(__dirname, 'public');
const LANDING = resolve(__dirname, '../landing-page');
const REACT_APP = resolve(__dirname, '../vibe-coding-app');

// Clean
if (existsSync(PUBLIC)) rmSync(PUBLIC, { recursive: true });
mkdirSync(PUBLIC, { recursive: true });

// 1. Copy landing page HTML files + assets
const landingFiles = ['index.html', 'apply.html', 'programs.html', 'us-track.html', 'request-demo.html', 'slit-logo-dark.svg', 'slit-logo-light.svg', 'hero-bg.png'];
for (const f of landingFiles) {
  const src = resolve(LANDING, f);
  if (existsSync(src)) cpSync(src, resolve(PUBLIC, f));
}

// 2. Build React app (run separately if needed: cd to REACT_APP && npm run build)
// Skip execSync here due to path encoding issues — build React app manually first
const reactDist2 = resolve(REACT_APP, 'dist');
if (!existsSync(reactDist2)) {
  console.error('ERROR: React app not built yet. Run "npm run build" in the React app directory first.');
  process.exit(1);
}
console.log('React app already built, using existing dist/');

// 3. Copy React build output to /vibe-coding/
const reactDist = resolve(REACT_APP, 'dist');
mkdirSync(resolve(PUBLIC, 'vibe-coding'), { recursive: true });
cpSync(reactDist, resolve(PUBLIC, 'vibe-coding'), { recursive: true });

console.log('Build complete! Output in deploy/public/');
