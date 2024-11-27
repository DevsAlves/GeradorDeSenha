const letter = document.querySelector(".letters");
const size = document.querySelector(".size"); 
const submit = document.getElementById("submit");


submit.addEventListener("click", event => { 
    event.preventDefault(); 

    if(letter.value.trim() !== "") {
        const valueLetter = letter.value.toLowerCase().trim();

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