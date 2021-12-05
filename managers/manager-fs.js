import fs from 'fs';

// afegiu codi per llegir './data/movies.json'
// let movies = [];
let movies = fs.readFileSync('./data/movies.json');
// let array = [];
// movies.forEach(e => {
//     array.push(Object.entries(e));
// });
console.log(movies);
export default movies;