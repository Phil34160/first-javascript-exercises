document.getElementById("valider").addEventListener("click",function(){
    let liquide = document.getElementById("liquide").value;
    let qte1 = document.getElementById("qte1").value;
    let qte2 = document.getElementById("qte2").value;
    let qte3 = document.getElementById("qte3").value;
    let qte4 = document.getElementById("qte4").value;
    let qte5 = document.getElementById("qte5").value;
    let montant = parseFloat(document.getElementById("montant").value).toFixed(2);
    montant = montant.replace(",",".");
    console.log(qte3);
    let somme = 0;
    let rendu = 0;
    console.log(montant);
    if( liquide == 2){
        document.getElementById("result_montant").innerHTML="<b>Parfait, vous m'économisez des lignes de code !</b>";
    } else {
    somme = (qte1 * 145) + (qte2 * 259) + (qte3 * 0) + (qte4 * 439) + (qte5 * 0);
    console.log(somme);
    document.getElementById("rappel").innerHTML="Rappel de votre commande : <b>[" + qte1 + "] W10Home &nbsp;[" + qte2 + "] W10Pro &nbsp;[" + qte3 + "] Ubuntu &nbsp;[" + qte4 + "] W10Pro(WS) &nbsp;[" + qte5 + "] Elementary</b>";
    document.getElementById("result_montant").innerHTML="Le total de votre commande s'élève à : <b id='result_montant1'>" + somme + " Euros</b>";
    rendu = montant - somme;
    
    if(rendu > 0){
        document.getElementById("result_rendu").innerHTML="Nous vous devons : <b id='result_rendu1'>" + rendu + " Euros</b>";
    } else if (rendu < 0){
        document.getElementById("result_rendu").innerHTML="Désolé, il vous manque : <b id='result_rendu1'>" + Math.abs(rendu) + " Euros</b>";
    } else {
        document.getElementById("result_rendu").innerHTML="Le compte est bon !"
    }
    }
})

document.getElementById("reset").addEventListener("click",function(){
    for (let i = 0; i<5;i++){
    document.getElementsByTagName("input")[i].value="0";
    }
    document.getElementById("result_montant").innerHTML="";
    document.getElementById("result_rendu").innerHTML="";
    document.getElementById("rappel").innerHTML="";
    document.getElementById("liquide").value= 1;
    document.getElementById("montant").value="";
})