// Regex

var str = "This is a black ball pen. This pen is really smooth. It is parker PEN"

// 1st way
// var pattern = /pen/gi;

// 2nd way
var pattern = new RegExp('.', 'gi');

// console.log(str.search(pattern))

// console.log(pattern.test(str))

// console.log(str.match(pattern))



// RegEx Groups

// var str = "88769160170"
// var pattern = /^[\d]{10}/g

// var str = "654654373017943"
// var pattern = /^[\d]{10}$/g

// var str = "(91)8657493210"
// var pattern = /^(91)?[\d]{10}$/g

// var str = "+918657493210"
// var pattern = /^(\+91)?[\d]{10}$/g

var str = "www.google.com"
var pattern = /^www\.[\w]+\.(com|in|co|org)?$/g

console.log(str.match(pattern))