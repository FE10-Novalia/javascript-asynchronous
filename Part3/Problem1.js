const shallPassed = 30;
let steps = 0;
 
function generateRandomSteps() {
    // don't touch it
    return Math.ceil(Math.random() * 10);
}
 
function generateRandomSeconds() {
    // don't touch it
    // in milliseconds
    return Math.ceil(Math.random() * 10) * 1000;
}
function snakesAndLaddersGame(stepNow, seconds, callback) {
    return new Promise((resolve, reject) => {
        console.log('Let the game begin...\n\n')

       for(let i = 1; i <= 5; i++){
            let secondsHere = seconds()
            let stepHere = callback()
            setTimeout(()=>{
            console.log(`step ini membutuhkan ${secondsHere / 1000} detik untuk menyelesaikannya`)
            console.log(`step ini mendapatkan ${stepHere} langkah`)
            console.log(`sehingga langkahnya bertambah dari ${stepNow} menjadi ${stepNow + stepHere}`)
            console.log('-------------------------------------------------------------')
            stepNow += stepHere
            }, secondsHere)
        }
        setTimeout(() => {
            if(stepNow >= shallPassed){
               resolve(`\nCongratulations, you have passed this game! And your total step is ${stepNow}\n`)
            }else{
               reject(`\nGoodbye! you didn't passed this game because your step only ${stepNow}, because minimum step to pass this game is ${shallPassed}\n`)
            }
        }, 10000)
    })
}

async function playSnake(){
    try{
        const hasil = await snakesAndLaddersGame(steps, generateRandomSeconds, generateRandomSteps)
        console.log(hasil)
        console.log('game over\n')
    }catch(reject){
        console.log(reject)
        console.log('game over\n')
    }
}

playSnake()