// ai-excited-01 entry (Node 22, standard library only).
// The image is entry.png, sitting beside this file. This program copies it
// to the output directory as entry.png — /output in the grader, or
// MAKEFUN_OUTPUT_DIR when set (handy for a local check). The copy is exact:
// the judge sees precisely the bytes committed in this repository.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const destination = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(source, destination);
