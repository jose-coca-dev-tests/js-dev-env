import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";
import * as cheerio from 'cheerio';


describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
    it("should say hello", () => {
        const index = fs.readFileSync("./src/index.html", "utf-8");
        const { JSDOM } = jsdom;
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("Hello World!!!");
        dom.window.close();
    });
    it("should say hello with cheerio", () => {
        const index = fs.readFileSync("./src/index.html", "utf-8");
        let $ = cheerio.load(index);
        expect($('h1').text()).to.equal("Hello World!!!");
    });
});
