const size = document.querySelector(".size"); 
const submit = document.getElementById("submit");

const arrayDeCaracteres = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "<", ">", "?"
];


submit.addEventListener("click", event => { 
    event.preventDefault()
    
    if(size.value !== "") {
        function add() { 
           return arrayDeCaracteres.sort( (a,b) => Math.random() - 0.5); 

        //    Falta adicionar o limite que o user inserir
        }

        const result = add().join(",").trim().replace(/,/g, "");; 
        console.log(result);



    }else {
        console.error("ERRO"); 
        alert("Por favor preencha os campos corretamente");
    }
});


// O que faz o trim() -> remove os espaços brancos no ínicio e no fim  de uma string 