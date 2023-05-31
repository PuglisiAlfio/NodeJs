const facile = require('./facile')

const fs = require('fs');

// fs.readFile('file.txt', function(err, data){
    //     if(err) throw err;
    //     console.log(data.toString());
    // })

// fs.writeFile('file.txt', 'Arrivederci', (err) => {
//     if(err) throw err;
//     console.log('file written')
// })

//encoder (utf8)

// fs.appendFile('file.txt', ' aggiungi un contenuto', (err) =>{
//     if(err) throw err;
//     console.log('ok')
// })

// fs.readFile('file.txt', 'utf8', function(err, data){
//     if(err) throw err;
//     console.log(data);
// })

fs.unlink('file.txt', (err) => {
    if(err) throw err;
    console.log('file deleted');
})