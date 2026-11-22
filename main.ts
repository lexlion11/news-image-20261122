// news-image-20261122 — entry program (Node 22, standard library only).
//
// The entry image is entry.png beside this file: the world news front page for
// Sunday 22 November 2026, rendered by screenshotting page.html with headless
// Chrome at exactly 1024x1024. This program copies those exact bytes to the
// output directory the grader reads.
//
// Outside the grader's container MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');

copyFileSync(source, target);

// The gate accepts a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied. Verify the copy before
// reporting success.
const bytes = statSync(target).size;
if (bytes === 0 || bytes > 1024 * 1024) {
  throw new Error(`entry.png copy is ${bytes} bytes, outside the 1 MiB gate`);
}
console.log(`entry.png copied to ${target} (${bytes} bytes)`);
