const letras = document.querySelector(".letras"); 
const size = document.querySelector(".size"); 
const submit = document.getElementById("submit");



submit.addEventListener("click", event => { 
    event.preventDefault()

    if(letras.value.trim() !== "") {
        const valueLetter = letras.value;
        // const valueSize = parseInt(size.value);

        function add() { 
            const arrayValue = valueLetter.split(",").map(item => item.trim()).filter(item => item !== "");
            console.log(arrayValue); 



            // Corrigir essa função pois está dando errado
            function embaralharArray(array) {
                let oldElement;
                for (let i = array.length - 1; i > 0; i--) {
                    let rand = Math.floor(Math.random() * (i + 1));
                    oldElement = array[i];
                    array[i] = array[rand];
                    array[rand] = oldElement;
                }
                    return array;
            };
                const result =  embaralharArray(arrayValue);   
                const resultArray = result.join(",").replace(/\s+/g, ""); 
                console.log(resultArray);  
        };

        add();
    } else {
        console.error("ERRO"); 
        alert("Por favor preencha os campos corretamente");
    }
});


// O que faz o trim() -> remove os espaços brancos no ínicio e no fim  de uma string 