// A working ai-excited-01 entry (Node 22, standard library only): the entry is the
// entry.png beside this file — a tiny white robot with glowing blue eyes riding a
// golden firework rocket over a dusk city skyline — and the program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024
// by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
// Fail loudly instead of copying nothing when the image is missing.
if (!existsSync(source)) throw new Error('entry.png is missing beside main.ts');
const bytes = statSync(source).size;
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`copied entry.png (${bytes} bytes) to ${join(outDir, 'entry.png')}`);
