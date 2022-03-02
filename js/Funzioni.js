// console.log("Hello World!!");
// alert("Ciao mondo");

function apriFinestra() {
    document.open("https://www.uniba.it","","noopener=true");
 
 /*
    document.open();
    document.write("<h1> Hello!! </h1> <p> Ciao </p>");
    document.write("<p> Secondo Paragrafo </p>");
    document.write("<p> Terzo Paragrafo </p>");
    document.write("<p> Ultimo Paragrafo </p>");
   
    document.close();
*/
}

function cambiaTesto() {
    let testoVariato=prompt("Inserisci il testo da variare");
    document.getElementById("terzoParagrafo").innerHTML= testoVariato;
}
function cambiaColore() {
    let coloreTesto=prompt("Inserisci colore testo");
    let coloreSfondo=prompt("Inserisci colore sfondo");

    document.getElementById("terzoParagrafo").style.color = coloreTesto;
    document.getElementById("terzoParagrafo").style.background = coloreSfondo;
}

function mousePassaggio() {
    document.getElementById("secondoparagrafo").innerHTML="Pass u Maus <br> statt attind";
}

function mouseUscita(){
    document.getElementById("secondoparagrafo").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto, numquam eveniet ea nobis debitis, reiciendis iure minima molestias ipsam fugiat. Mollitia rerum provident tenetur vero nisi vel hic exercitationem!";
}

function ripristina() {
    document.getElementById("terzoParagrafo").innerHTML= `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magni architecto, numquam eveniet ea nobis debitis, reiciendis iure minima molestias ipsam fugiat. 
    Mollitia rerum provident tenetur vero nisi vel hic exercitationem!
    `;
    document.getElementById("terzoParagrafo").style.color = "black";
    document.getElementById("terzoParagrafo").style.background = "white";
   
}

let mioSaluto="";
function visualizzaMessaggio(nome, cognome) 
{
   let saluto="ciao "+nome+ " "+cognome;
    return saluto;
}

 mioSaluto=visualizzaMessaggio("Juan", "Rossi");
 console.log(mioSaluto);
