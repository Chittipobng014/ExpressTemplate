import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
// console.log(DOMPurify.sanitize("<img src=x onerror=alert(1)//>"));

// import * as sanitizeHtml from 'sanitize-html';
// console.log(sanitizeHtml);

export const sanitizeString = input => {
  const results = DOMPurify.sanitize(input);
  // const results = sanitizeHtml(input);
  // const results = encodeURIComponent(input);
  // console.log("sanitizeString", input);
  // console.log("sanitizeString", results);
  return results;
};

export const clone = input => {
  return JSON.parse(JSON.stringify(input));
};

export const sanitizeObject = input => {
  // console.log('sanitizeObject', input);
  // const result = clone(input);
  for (const prop in input) {
    if (typeof input[prop] === 'string') {
      input[prop] = sanitizeString(input[prop]);
    }
    if (typeof input[prop] === 'object') {
      input[prop] = sanitizeObject(input[prop]);
    }
    // console.log(`${prop} ${typeof input[prop]}:${input[prop]}`);
  }
  return input;
};

const main = async () => {
  const original = {
    html1: 'Some <a> Html',
    html2: 'one & two',
    html3: '<img src=x onerror=alert(1)//>',
  };
  const sanitized = sanitizeObject(original);
  console.log(sanitized);
  console.log('Done.');
};

if (require.main === module) {
  main();
}

// var obj = {
//   name: "Simon",
//   age: "20",
//   clothing: {
//     style: "simple",
//     hipster: false,
//     badscript: "<img src=x onerror=alert(1)//>"
//   },
//   badscript: "<img src=x onerror=alert(1)//>"
// };

// console.log(JSON.stringify(sanitizeObject(obj), null, 2));
// console.log(JSON.stringify(sanitizeObject(null), null, 2));
// console.log(JSON.stringify(sanitizeObject(undefined), null, 2));
