/* Regular Expression
    - Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "http://elzero.info";
let url7 = "www.elzero.org:8000/articles.php?id=10000&cat=topics";

let reg =
  /(https?:\/\/)?(w{3}.)?(\w+\.(org|com|net|info))(:\d{4}\/\w+\.(php)\?\w{2}=\d{1,}\&\w+=\w+)?/gi;

console.log(url1.match(reg)); // ['elzero.org']
console.log(url2.match(reg)); // ['http://elzero.org']
console.log(url3.match(reg)); // ['https://elzero.org']
console.log(url4.match(reg)); // ['https://www.elzero.org']
console.log(url5.match(reg)); // ['https://www.elzero.org:8080/articles.php?id=100&cat=topics']
console.log(url6.match(reg)); // ['http://elzero.info']
console.log(url7.match(reg)); // ['www.elzero.org:8000/articles.php?id=10000&cat=topics']
