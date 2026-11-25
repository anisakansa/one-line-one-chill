import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The cabin photos finally loaded, and the thing in the window had been waving at me for three summers.";

// Gate: the sealed scorer accepts 1-200 non-whitespace UTF-8 characters.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry fails the 1-200 character gate");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", ENTRY, "utf8");
