import fs from "fs";
import path from "path";
import showdown from "showdown";

const converter = new showdown.Converter();

const resume = fs.readFileSync("src/data/resume.md", "utf-8");

export default converter.makeHtml(resume);
