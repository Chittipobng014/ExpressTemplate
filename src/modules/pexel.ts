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

const pexels = async term => {
  const html = await load(`https://www.pexels.com/search/${term}/`);
  console.log(html);
  const $ = cheerio.load(html);
  const r = $("img");
  console.log(r.length);
  const results = [];
  r.each(function(i, e) {
    if (e.attribs.class == "photo-item__img") {
      results.push(e.attribs.src);
    }
  });
  console.log("Done.");
  return results;
};

const main = async () => {
  const results = await pexels("restaurants");
  console.log(results);
};

if (require.main === module) {
  main();
}

export default pexels;
