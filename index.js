import pug from "pug";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compiledFunction = pug.compileFile(
  path.join(__dirname, "templates", "index.pug")
);

const outFilePath = path.join(__dirname, "index.html");

const html = compiledFunction();

fs.writeFileSync(outFilePath, html);
