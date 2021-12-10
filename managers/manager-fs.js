import fs from 'fs';

let movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf8"));
export default movies;