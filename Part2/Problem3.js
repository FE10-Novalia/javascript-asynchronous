const listBrands = [
    {
      brand: 'H&M',
      processTime: 7000
    },
    {
      brand: 'Zara',
      processTime: 4000
    },
    {
      brand: 'Uniqlo',
      processTime: 5000
    },
    {
      brand: 'Pedro',
      processTime: 9000
    },
    {
      brand: 'The Executive',
      processTime: 10000
    },
    {
      brand: 'Adidas',
      processTime: 8000
    },
    {
      brand: 'Nike',
      processTime: 7000
    },
    {
      brand: 'Puma',
      processTime: 6000
    },
    {
      brand: 'Converse',
      processTime: 6000
    },
    {
      brand: 'Mark & Spencer',
      processTime: 9000
    },
   ]
    
   function randomizeBrand(typeApparel) {
    // your code here
    return new Promise((resolve) => {
      let randomNumb = Math.floor(Math.random() * 10)
      let { brand, processTime } = listBrands[randomNumb]
      setTimeout(() => {
        resolve({[typeApparel] : brand})
      }, processTime)
    })
   }
    
   let promises = [];
    
   promises.push(randomizeBrand("clothes"));
   promises.push(randomizeBrand("pants"));
   promises.push(randomizeBrand("shoes"));
   promises.push(randomizeBrand("hat"));

Promise.all(promises).then(promiseAll => {
  // let {clothes, pants, shoes, hat } = (...promiseAll)
  let allKeys = promiseAll.map(item => Object.keys(item))
  console.log(`I wear ${allKeys[0]} from ${promiseAll[0][allKeys[0]]} & I wear ${allKeys[1]} from ${promiseAll[1][allKeys[1]]} & I wear ${allKeys[2]} from ${promiseAll[2][allKeys[2]]} & I wear ${allKeys[3]} from ${promiseAll[3][allKeys[3]]}`)
})
   

   
//    Expected Output
   
//    loading starts...
   
//    I wear clothes from Uniqlo & I wear pants from Zara & I wear shoes from H&M & I wear hat from Nike
   
//    loading end...
   