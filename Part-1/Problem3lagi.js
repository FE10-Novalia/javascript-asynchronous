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
    // your code here
    console.log('Let the game begin...\n\n')

    let i = 1
    while(i <= 5){
        let secondsHere = seconds()
        let stepHere = callback()
        setTimeout(()=>{
        console.log(`step ini membutuhkan ${secondsHere / 1000} detik untuk menyelesaikannya`)
        console.log(`step ini mendapatkan ${stepHere} langkah`)
        console.log(`sehingga langkahnya bertambah dari ${stepNow} menjadi ${stepNow + stepHere}`)
        console.log('-------------------------------------------------------------')
        stepNow += stepHere
    }, secondsHere)
        // snakesAndLaddersGame(stepHere, generateRandomSeconds, generateRandomSteps)
        i++
    }
    setTimeout(() => {
        if(stepNow >= shallPassed){
           console.log(`\nCongratulations, you have passed this game! And your total step is ${stepNow}\n`)
        }else{
           console.log(`\nGoodbye! you didn't passed this game because your step only ${stepNow}, because minimum step to pass this game is ${shallPassed}\n`)
        }
        console.log('game over\n')
    }, 10000)
}

snakesAndLaddersGame(steps, generateRandomSeconds, generateRandomSteps)
