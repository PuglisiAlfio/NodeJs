async function luckyDraw(player) {
  try{
    const myPromise = await new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));

      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
    return myPromise;
  } catch (error){
    console.log(error)
  }
}

async function gameLuckyDraw() {
  try {
    const joeResult = await luckyDraw("Joe");
    console.log(joeResult);
    const carolineResult = await luckyDraw("Caroline");
    console.log(carolineResult);
    const sabrinaResult = await luckyDraw("Marco");
    console.log(sabrinaResult);
  } catch (error) {
    console.log(error);
  }
}
gameLuckyDraw();
