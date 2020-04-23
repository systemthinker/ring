const toTitleCase = require('to-title-case');
const marked = require('marked');
const markdown = '# heading'

// marked returns the heading converted into HTML
const html = marked(markdown)

// log the converted string
const lower = 'the lord of the rings: the return of the king';
const title = toTitleCase(lower);
console.log(title);