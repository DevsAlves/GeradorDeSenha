const size = document.querySelector(".size"); 
const submit = document.getElementById("submit");
const resultado = document.querySelector(".finalResult");
const other = document.getElementById("otherPass"); 
const copy = document.getElementById("copy");

const arrayDeCaracteres = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "/", "<", ">", "?"
];


submit.addEventListener("click", event => { 
    event.preventDefault()

    if(size.value !== "") {
        const limit = parseInt(size.value);

        if ( limit > 18) {
            alert("Passou do limite");
        }else{
            function generate() {  
                let pass = ""; 
                for(i = 0; i < limit ; i++) {
                   const randomIndex = Math.floor(Math.random() * arrayDeCaracteres.length) ;
                   pass += arrayDeCaracteres[randomIndex]; 
                }
                return pass; 
            };


            const passGenerate = generate(); 
            resultado.innerHTML = `<p> ${passGenerate} </p>`;
            resultado.style.display = "block";


            size.style.display = "none";
            submit.style.display = "none";
            other.style.display = "block";


            copy.style.display = "block"; 
            
            // Parte do user copiar
            copy.addEventListener("click", () => {
                navigator.clipboard.writeText(passGenerate);
                alert(`Texto copiado: ${passGenerate}`);
            });

            size.value = ""; 
        }

    }else {
        console.error("ERRO"); 
        alert("Por favor preencha os campos corretamente");
    }
});