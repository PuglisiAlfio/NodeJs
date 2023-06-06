function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));

      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
}

Promise.allSettled([
    luckyDraw('Joe'),
    luckyDraw('Caroline'),
    luckyDraw('Sabrina')
])
    .then(results => {
        results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log(result.value); //value = resolve
        } else {
            console.log(result.reason); //reason = reject
        }
        });
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });