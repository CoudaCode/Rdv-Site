document.addEventListener("DOMContentLoaded", ()=>{
    let btnValider = document.querySelector(".btnValider")
    let myform = document.getElementById("myform");
    function CreateRDV() {
        let nom = document.getElementById("nom")
        let prenom = document.getElementById("prenom");
        let email = document.getElementById("mail");
        let motif = document.getElementById("motif");
        let numero = document.getElementById("numero");
        let recupR = localStorage.getItem("Client");
         recupR = JSON.parse(recupR)
         let gene = new Date()
         const hre = gene.getHours();
         const mnute = gene.getMinutes();

        if(nom.value !="" || prenom.value != "" || email.value != "" || motif.value !="" || numero.value != ""){
            let data ={
                nom: nom.value,
                prenom: prenom.value,
                email: email.value,
                motif: motif.value,
                numero: numero.value,
                dateInscri: gene.toLocaleDateString(),
                heure : `${hre}H : ${mnute} `
            } 
                if(recupR != null){
                    recupR.push(data)
                    localStorage.setItem("Client", JSON.stringify(recupR))
                    Show()
                }
                else{
                    recupR = []
                    recupR.push(data);
                    localStorage.setItem("Client", JSON.stringify(recupR));
                    Show()
                    
                }

        }
        else{
            alert("Veuillez renseigner tout les champs")
        }
        
    }
    
   
    function Show(){
        divInfo = document.getElementById('popupdiv');
        if (divInfo.style.display == 'none'){
            divInfo.style.display = 'block';
        }else{
            divInfo.style.display = 'none';
        }
        
    }
    
    function Hide(){
        divInfo = document.getElementById('popupdiv');
        if (divInfo.style.display == 'block'){
            divInfo.style.display = 'none';
        } else {
            divInfo.style.display = 'block';
        }
    }
    myform?.addEventListener("submit", (e)=>e.preventDefault())
    btnValider?.addEventListener("click", CreateRDV)

let backgroundPopUp = document.querySelector(".buttonInPopUp")
backgroundPopUp.addEventListener("click", Hide);


    
})