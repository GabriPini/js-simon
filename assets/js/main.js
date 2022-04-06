

setTimeout( function(){
  
    let numbersRandom = [];
    while (numbersRandom.length < 5) {
        let number = Math.floor(Math.random() * 100) + 1;
        if (numbersRandom.includes(number ) == false) {
            numbersRandom.push(number );
        }
    }
    document.querySelector('.numberSimon').innerHTML = numbersRandom
    console.log(numbersRandom)


  }, 1);



