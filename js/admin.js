function Affiche() {
    let items = document.querySelector(".items");
    let Motif = document.querySelector(".motif");
    let heure = document.querySelector(".heure");
    let recupData = localStorage.getItem("Client");
    recupData = JSON.parse(recupData);

    recupData?.forEach(element => {
        console.log(element)
        let card = `
        <div class="card">
              <span class="name">${element.nom} ${element.prenom}</span>
              <p class="motif">${element.motif}</p>
              <p class="heure">${element.heure}</p>
              <p><button>Valider</button></p>
            </div>
        `
        items.innerHTML += card
    });

}
Affiche()