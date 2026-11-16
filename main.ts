import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const src = "entry.png";
const outDir = "/output";
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error("entry.png not found");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
const srcSize = statSync(src).size;
const destSize = statSync(dest).size;
console.log(`source entry.png is ${srcSize} bytes`);
console.log(`copied entry.png (${destSize} bytes)`);
if (srcSize !== destSize) {
  throw new Error(`copy size mismatch: ${srcSize} vs ${destSize}`);
}
const srcBytes = readFileSync(src);
const destBytes = readFileSync(dest);
if (!srcBytes.equals(destBytes)) {
  throw new Error("copy bytes do not match source");
}
console.log(`verified copy matches source (${srcSize} bytes)`);
