const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('http://www.github.com');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));