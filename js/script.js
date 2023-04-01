document.addEventListener("DOMContentLoaded", ()=>{
    let btnValider = document.querySelector(".btnValider")
    function CreateRDV() {
        let nom = document.getElementById("nom")
        let prenom = document.getElementById("prenom");
        let email = document.getElementById("email");
        let motif = document.getElementById("motif");
        let numero = document.getElementById("numero");
        let recupR = localStorage.getItem("Client");
         recupR = JSON.parse(recupR)
         let gene = new Date()

        if(nom.value !="" || prenom.value != "" || email.value != "" || motif.value !="" || numero.value != ""){
            let data ={
                nom: nom.value,
                prenom: prenom.value,
                email: email.value,
                motif: motif.value,
                numero: numero.value,
                dateInscri: gene.toLocaleDateString()
            } 
                if(recupR != null){
                    recupR.pus(data)
                    localStorage.setItem("Client", JSON.stringify(recupR))
                }
                else{
                    recupR = []
                    recupR.push(data);
                    localStorage.setItem("Client", JSON.stringify(recupR));  
                }

        }
        else{
            alert("Veuillez renseigner tout les champs")
        }
        
    }
   

    function InFo() {
    
    }
    btnValider.addEventListener("click", CreateRDV)



    
})