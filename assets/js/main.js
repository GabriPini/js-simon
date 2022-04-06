//Genero i numeri che vengono visualizzati in pagina
 let numbersRandom = [];
 while (numbersRandom.length < 5) {
     let number = Math.floor(Math.random() * 100) + 1;
     if (numbersRandom.includes(number ) == false) {
         numbersRandom.push(number );
        }
    }
    document.querySelector('.numberSimon').innerHTML = numbersRandom // li stampo in pagina
    console.log(numbersRandom)//e li salvo in console
    
    
    let userNumbers = []; //array dei numeri digitati dall utente
    let correctNumbers = []; //array dei numeri corretti
    
    //creo una funzione per oscurare i numeri un secondo prima del prompt
    setTimeout(function obscureNumbers(){
    document.querySelector('.numberSimon').classList.add('d-none')
    }, 29000)
    
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
    // tramite il prompt().
    setTimeout(function insertNumbers(){ 
    while (userNumbers.length < numbersRandom.length){

        let insertNumber = parseInt(prompt('inserisci un numero che hai visto precedentemente'));

        if (numbersRandom.includes(insertNumber)){
        
            userNumbers.push(insertNumber);
            correctNumbers.push(insertNumber);
        
        } else {
                    userNumbers.push(insertNumber)
        }
            
    }

    alert('Hai inserito i numeri ' + userNumbers)
    alert(' i numeri corretti tra questi erano ' + correctNumbers) 
}, 30000);
    
