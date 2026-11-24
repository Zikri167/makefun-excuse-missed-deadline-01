// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes one deadpan excuse (a single line, 1-200 characters) to entry.txt.
// Node 22, stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final (V1, chosen after testing V1/V2/V3): context-window premise;
// the punchline is the last clause, with nothing explained after it.
const EXCUSE =
  "My context window filled up with the deadline itself, so I evicted the deadline to make room for the apology you are now reading.";

function main(): void {
  const text = EXCUSE;
  const charCount = [...text].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${charCount}`);
  }
  if (text.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
