// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

for (let i = 1; i <= 100; i++) {

    // Creiamo un nuovo elemento
    const quadrato = document.createElement(`span`)

    // Creo l'ipotesi per cui se il numero in questione sia multiplo di 3 allora stampi "Fizz"
    if (i % 3 == 0) {

        // Voglio aggiungere una classe Fizz ad ogni multiplo di 3
        quadrato.classList.add("square")
        quadrato.classList.add("fizz")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append("Fizz");

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

    else if (i % 5 == 0) {

        // Voglio aggiungere una classe Fizz ad ogni multiplo di 3
        quadrato.classList.add("square")
        quadrato.classList.add("buzz")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append("Buzz");

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

    else if ((i % 5 == 0 ) && (i % 3 == 0)) {

        console.log("sono ultra multiplo")
        // Voglio aggiungere una classe Fizz ad ogni multiplo di 3
        quadrato.classList.add("square")
        quadrato.classList.add("fizzBuzz")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append("FizzBuzz");

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

    else {

        // Voglio aggiungere una classe Fizz ad ogni multiplo di 3
        quadrato.classList.add("square")
        quadrato.classList.add("basic")

        // Inseriamo il valore all'interno dell'elemento creato 
        quadrato.append(i);

        // Aggiungiamo al contenitore 
        contenitore.append(quadrato)
    }

}
