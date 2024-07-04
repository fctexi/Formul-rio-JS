const inputsFormulario = document.querySelectorAll(".input");
const inputTextArea = document.querySelector(".input-text-area");
const inputUm = inputsFormulario[0]
const inputDois = inputsFormulario[1]
const inputTres = inputsFormulario[2]
const btnEnviar = document.querySelector(".btn-enviar");
const alerta = document.getElementsByClassName("mensagem")
const form = document.querySelector(".form")

form.addEventListener("submit", 
    function (item) {
        item.preventDefault();
    }
)

inputsFormulario.forEach( 
    function (input) {
        input.addEventListener('change',
            function(){
                if(input.value !== ""){
                    input.classList.add("input-preenchido")
                }
                
                else{
                    input.classList.remove("input-preenchido")
                }
            }
        )
})



btnEnviar.addEventListener("click", executarAlerta)

btnEnviar.addEventListener("click", 
    function(){
        if(inputUm.value === ""){
            alerta[0].classList.remove("display")
        }else{
            alerta[0].classList.add("display")
        }
    }
)

btnEnviar.addEventListener("click", 
    function(){
        if(inputDois.value === ""){
            alerta[1].classList.remove("display")
        }else{
            alerta[1].classList.add("display")
        }
    }
)

btnEnviar.addEventListener("click", 
    function(){
        if(inputTres.value === ""){
            alerta[2].classList.remove("display")
        }else{
            alerta[2].classList.add("display")
        }
    }
)

inputTextArea.addEventListener('change',
    function(){
        if(inputTextArea.value !== ""){
            inputTextArea.classList.add("input-preenchido")
        }
        
        else{
            inputTextArea.classList.remove("input-preenchido")
        }
    }
)

btnEnviar.addEventListener("click", 
    function(){
        if(inputTextArea.value === ""){
            inputTextArea.classList.add("input-alerta");
            alerta[3].classList.remove("display")
        }else{
            inputTextArea.classList.remove("input-alerta");
            alerta[3].classList.add("display")
        }
    }
)

function executarAlerta () {
    inputsFormulario.forEach(
        function (item) {
            if (item.value === ""){
                item.classList.add("input-alerta")
            }else{
                item.classList.remove("input-alerta")
            }
        }
    )
}