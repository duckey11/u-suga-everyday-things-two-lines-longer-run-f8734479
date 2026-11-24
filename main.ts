import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "Rain is what happens when clouds get so full of water that they wring themselves out over the streets like a giant sponge squeezed above a bathtub.",
  "The sponge shows how a cloud holds water and lets it fall in drops, but it leaves out that nobody squeezes the cloud and that the drops are born when tiny bits of water join together in the cold air.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
