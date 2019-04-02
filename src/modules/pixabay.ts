const request = require("request");
const cheerio = require("cheerio");

const load = url => {
  return new Promise((res, rej) => {
    request(url, function(error, response, body) {
      if (error) {
        return console.error("upload failed:", error);
      }
      res(body);
    });
  });
};

const pixabay = async term => {
  const html = await load(`https://pixabay.com/en/photos/?q=${term}`);
  // console.log(html);
  const $ = cheerio.load(html);
  const r = $("img");
  console.log(r.length);
  const results = [];
  r.each(function(i, e) {
    const src = e.attribs["data-lazy"];
    if (src) {
      results.push(src);
    }
    console.log(e.attribs["data-lazy"]);
  });
  console.log("Done.");
  return results;
};

const main = async () => {
  const results = await pixabay("food");
  console.log(results);
};

if (require.main === module) {
  main();
}

export default pixabay;
