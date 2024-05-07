function medidas(){
    const contador = document.getElementById("contador");
    let valor = 0;
    let tempo = setInterval(()=>{
        valor += 1;

        contador.innerHTML = ` + ${valor}`

        if(valor == 300){
            clearInterval(tempo)
        }
    });

    const contador2 = document.getElementById("contador1");
    let valor2 = 0;
    let tempo2 = setInterval(()=>{
        valor2 += 1;

        contador2.innerHTML = ` + ${valor2}`

        if(valor2 == 500){
            clearInterval(tempo2)
        }
    });

    const contador3 = document.getElementById("contador2");
    let valor3 = 0;
    let tempo3 = setInterval(()=>{
        valor3 += 1;

        contador3.innerHTML = ` + ${valor3}`;

        if(valor3 == 1000){
            clearInterval(tempo3);
        }
    });
}

//É acionado quando HTMl é totalmente carregado e não espera imagem, css, video, etc
document.addEventListener("DOMContentLoaded", function(){
    let email = document.querySelector("#email");
    let msg = document.querySelector(".mensagem");

    email.add.addEventListener("keyup",function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            email.style.display = "none";
            email.value = "";
            msg.style.display = "block";
        }
    });
});