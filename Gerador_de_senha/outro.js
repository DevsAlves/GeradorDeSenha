const letras = document.querySelector(".letras"); 
const size = document.querySelector(".size"); 
const submit = document.getElementById("submit");


submit.addEventListener("click", event => { 
    event.preventDefault()

    if(letras.value.trim() !== "") {
        const valueLetter = letras.value.toLowerCase().trim();

        function add() { 
            const arrayValue = valueLetter.split(",").map(item => item.trim()).filter(item => item !== "");
            console.log(arrayValue); 
        }
        
        


        add();
    } else {
        console.error("ERRO"); 
        alert("Por favor preencha os campos corretamente");
    }
});


// O que faz o trim() -> remove os espaços brancos de uma string 