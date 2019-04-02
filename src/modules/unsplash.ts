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

const unsplash = async term => {
  const html = await load(`https://unsplash.com/search/photos/${term}/`);
  // console.log(html);
  const $ = cheerio.load(html);
  // console.log()

  const r = $("img");
  // console.log(r);
  const results = [];
  r.each(function(i, e) {
    // if ()
    console.log("DEBUG");
    console.log(e.attribs["data-test"]);
    console.log(e.attribs["src"]);
    if (e.attribs["data-test"] === "standard-photo-grid-multi-col-img") {
      results.push(e.attribs["src"]);
    }
  });
  return results;
};

const main = async () => {
  const results = await unsplash("food");
  console.log(results);
};

if (require.main === module) {
  main();
}

export default unsplash;
