// RICHIESTA:

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// Implemento il ciclo for
for (let i = 1; i <= 100; i++) {

    // Creiamo un nuovo elemento
    const quadrato = document.createElement(`span`)

    // Inizio a creare delle ipotesi e delle eventuali condizione

    // IPOTESI 1) : Classe fizzBuzz
    if ((i % 5 == 0 ) && (i % 3 == 0)) {

        console.log("sono ultra multiplo")
        // Voglio aggiungere le classi
        quadrato.classList.add("square")
        quadrato.classList.add("fizzBuzz")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append("FizzBuzz");

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }


    // IPOTESI 2) : Classe fizz
    else if (i % 3 == 0) {

        // Voglio aggiungere le classi
        quadrato.classList.add("square")
        quadrato.classList.add("fizz")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append("Fizz");

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

    // IPOTESI 3) : Classe buzz
    else if (i % 5 == 0) {

        // Voglio aggiungere le classi
        quadrato.classList.add("square")
        quadrato.classList.add("buzz")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append("Buzz");

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

    // IPOTESI 4) : I restanti valori
    else {

        // Voglio aggiungere le classi
        quadrato.classList.add("square")
        quadrato.classList.add("basic")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append(i);

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

}
