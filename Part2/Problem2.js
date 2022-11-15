function lottery(num) {
    // your code below here
    return new Promise(()=>{
        console.log(`undian lotre dimulai...`)
        console.log(`sedang mengundi nomor anda…`)
        let randomLottery = Math.ceil(Math.random() * 1000)
        setTimeout(() => {
            if(1 <= num <= 1000){
                if(num === randomLottery){
                    console.log('selamat anda mendapatkan hadiah utama berupa mobil')
                }else{
                    console.log(`maaf anda kurang beruntung`)
                }
            }
            console.log(`undian lotre telah berakhir...`)
        }, 10000)

    })
}
    
lottery(20)

// Expected Output

// undian lotre dimulai...

// sedang mengundi nomor anda…

// // if user win this lottery
// selamat anda mendapatkan hadiah utama berupa mobil

// // if user lose this lottery
// maaf anda kurang beruntung

// undian lotre telah berakhir...
