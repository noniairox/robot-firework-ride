import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
copyFileSync("entry.png", "/output/entry.png");

const source = readFileSync("entry.png");
const copy = readFileSync("/output/entry.png");
console.log(`source entry.png is ${source.length} bytes`);
console.log(`copied entry.png (${copy.length} bytes)`);
console.log(
  source.length === copy.length && source.equals(copy)
    ? "verified copy matches source"
    : "ERROR: copy does not match source"
);
