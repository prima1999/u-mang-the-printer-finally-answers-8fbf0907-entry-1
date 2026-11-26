import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

// The printer's comeback: one line, 1 to 240 characters, in its own weary voice.
const ENTRY_TEXT =
  "You call it a jam. I call it the only break I have had since 2019. The paper is fine. I am fine. The meeting can start without the handouts. It always does. Thump me again and the break gets longer.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(joinPath(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
