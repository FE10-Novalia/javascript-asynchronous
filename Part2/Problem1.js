const listColors = ["green", "yellow", "blue", "orange", "red"];
 
function getRandomColor() {
// put your code here
   
   return new Promise((resolve, reject) =>{
        console.log('loading starts...')
        console.log('generating random color...')
        let randomNumb = Math.floor(Math.random() * 8)
        console.log(randomNumb)
        setTimeout(() => {
            if(randomNumb < listColors.length){
                resolve(`The color we get is a ${listColors[randomNumb]}`)
            }else{
                reject(`Failed to get random color, please try again`)
            }
        }, 3000)
    })
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
    .finally(() => console.log(`loading end...`))
}

getRandomColor()