function jajanBoba(uang, callback) {
    // your code here
    let hargaBoba = 5000, sisaUang = uang - hargaBoba

    if(sisaUang > 0){
        setTimeout(() => {
            console.log(`kamu jajan boba dengan harga Rp. ${hargaBoba} \nsisa uang kamu Rp. ${sisaUang}`)
        }, 5000)
        callback(sisaUang)
    }else{
        setTimeout(() => {
            console.log(`Maaf uang kamu belum cukup untuk membeli boba \nSisa uang kamu sebesar ${uang}`)
        }, 5000)
        callback(uang)
    }
}

function jajanSeblak(uang) {   
// your code here
    let hargaSeblak = 8000, sisaUang = uang - hargaSeblak
    if(sisaUang > 0){
        setTimeout(() => {
            console.log(`kamu jajan boba dengan harga Rp. ${hargaSeblak} \nsisa uang kamu Rp. ${sisaUang}`)
        }, 9000)
    }else{
        setTimeout(() => {
            console.log(`Maaf uang kamu belum cukup untuk membeli seblak \nSisa uang kamu sebesar ${uang}`)
        }, 9000)
    }
}

jajanBoba(20000, jajanSeblak)
jajanBoba(10000, jajanSeblak)
jajanBoba(4000, jajanSeblak)

// Expected output

// kamu jajan boba dengan harga Rp. 5000
// sisa uang kamu Rp. 15000

// kamu jajan seblak dengan harga Rp. 8000
// sisa uang kamu sebesar Rp. 7000

// // if you doesn’t have enough money
// Maaf uang kamu belum cukup untuk membeli <nama barang>
// Sisa uang kamu sebesar <sisa uang>

// Don’t forget to handle it if you don't have enough money to buy that snack and don’t forget to use set timeout.
