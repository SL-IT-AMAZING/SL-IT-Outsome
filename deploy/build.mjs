import { cpSync, mkdirSync, existsSync, rmSync } from 'fs';
import { execSync } from 'child_process';
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
const landingFiles = ['index.html', 'apply.html', 'programs.html', 'us-track.html', 'request-demo.html', 'slit-logo-dark.svg', 'slit-logo-light.svg', 'hero-bg.png', 'favicon.svg'];
for (const f of landingFiles) {
  const src = resolve(LANDING, f);
  if (existsSync(src)) cpSync(src, resolve(PUBLIC, f));
}

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

execSync(`${npmCmd} --prefix "${REACT_APP}" install`, { stdio: 'inherit' });
execSync(`node "${resolve(REACT_APP, 'node_modules/vite/bin/vite.js')}" build --config "${resolve(REACT_APP, 'vite.config.js')}"`, { stdio: 'inherit', cwd: REACT_APP });

const reactDist2 = resolve(REACT_APP, 'dist');
if (!existsSync(reactDist2)) {
  console.error('ERROR: React build output not found at vibe-coding-app/dist');
  process.exit(1);
}

// 3. Copy React build output to /vibe-coding/
const reactDist = resolve(REACT_APP, 'dist');
mkdirSync(resolve(PUBLIC, 'vibe-coding'), { recursive: true });
cpSync(reactDist, resolve(PUBLIC, 'vibe-coding'), { recursive: true });

console.log('Build complete! Output in deploy/public/');
