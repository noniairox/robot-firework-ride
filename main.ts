import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const source = "entry.png";
const outDir = "/output";
const dest = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png not found in repo root");
}

const sourceSize = statSync(source).size;
console.log(`source entry.png is ${sourceSize} bytes`);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

const size = statSync(dest).size;
if (size !== sourceSize) {
  throw new Error(`copy mismatch: expected ${sourceSize} bytes, got ${size}`);
}
console.log(`verified copy matches source (${size} bytes)`);
console.log(`copied entry.png (${size} bytes)`);
