document.getElementById("validerM").addEventListener("click",function(){
    let sexe = document.getElementById("sexe").value;
    let poids = parseFloat(document.getElementById("poids").value);
    let age = parseInt(document.getElementById("age").value);
    let taille = parseFloat(document.getElementById("taille").value)/100;
    let profil = parseFloat(document.getElementById("profil").value);
    let result = 0;
    if(sexe === "M"){
         result = ((13.707 * poids) + (492.3 * taille) - (6.673 * age) + 77.607) * profil;
    } else if(sexe ==="F") {
         result = ((9.740 * poids) + (172.9 * taille) - (4.737 * age) + 667.051) * profil;
    }
    document.getElementById("resultM").innerHTML ="Votre dépense énergétique quotidienne est :<b> " + result.toFixed(2) + " </b>Kcal";
});
document.getElementById("resetM").addEventListener("click",function(){
     document.getElementById("sexe").value ="";
     document.getElementById("poids").value ="";
     document.getElementById("age").value ="";
     document.getElementById("taille").value ="";
     document.getElementById("profil").value ="";
     document.getElementById("resultM").innerHTML ="";
});