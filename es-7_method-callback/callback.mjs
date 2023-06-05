import { writeFile } from 'node:fs';
import { readFileSync } from 'node:fs';

writeFile('message.txt', 'Dammi tre parole', 'utf-8', (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(readFileSync("message.txt", "utf8"));
    }
})