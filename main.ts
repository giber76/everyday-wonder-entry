// Everyday Wonder — make.fun entry (u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3).
// One sentence, at most 200 characters: a small everyday moment made strange.
// The lift mirror, a yawn a half-second late, and the question of who copies whom.
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My reflection in the lift mirror yawned a half-second late, and I stood there wondering which of us was copying whom.";

// The gate: 1-200 characters, not only whitespace, a single sentence.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || (ENTRY.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be a single sentence with no surrounding whitespace");
}

// Grader mounts /output; MAKEFUN_OUTPUT_DIR only redirects local test runs.
import { join } from "node:path";
const out = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";
const dir = dirname(out);
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
// No trailing newline: the file is exactly the sentence, so the judge
// reads it byte for byte as written here.
writeFileSync(out, ENTRY, "utf8");
