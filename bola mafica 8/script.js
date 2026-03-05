document.addEventListener("DOMContentLoaded", () =>{

    let ballbutton=document.getElementById("ball-button");

    ballbutton.addEventListener("click", async () =>{
        try{
            let ballInputText=document.getElementById("resposta").value;
                if(!ballInputText)
                    return alert("Peça um conselho!");
                let resposta = await fetch (`https://api.adviceslip.com/advice`)
                let dados =await resposta.json();

                let ballresposta= document.getElementById("ball-resp");
                ballresposta.textContent=dados.slip.advice;

        }catch(error){
            console.log("Erro"+ error);
        }
    });

});