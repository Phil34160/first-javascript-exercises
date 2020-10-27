document.getElementById("generate").addEventListener("click",function(){
    let consonnes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    let voyelles = ["a","e","i","o","u","y"];
    let mots = document.getElementById("mot").value;
    let syllabe = Math.floor(Math.random() * document.getElementById("syl").value + 1);
    let mixage_syllabes_consonnes = "";
    let mixage_syllabes_voyelles = "";
    let syl_final = "";
    let result_final = "";
    let nbr_syl_c = 1 + Math.floor(Math.random() * (5 - 2) + 1);
    let nbr_syl_v = 1 + Math.floor(Math.random() * (5 - 2) + 1);

    for(let l=0;l<mots;l++){
       for ( let i =0; i<syllabe;i++){
         for (let j=0; j<nbr_syl_c;j++){
            mixage_syllabes_consonnes = consonnes[Math.floor(Math.random() * consonnes.length)];
            
            console.log(mixage_syllabes_consonnes);
           }
         for (let k=0;k<nbr_syl_v;k++){
            mixage_syllabes_voyelles = voyelles[Math.floor(Math.random() * voyelles.length)];
           }
        let temp = mixage_syllabes_voyelles + mixage_syllabes_consonnes;
        syl_final += temp ;
    }
      result_final += syl_final + " ";
      syl_final = "";
      syllabe = Math.floor(Math.random() * document.getElementById("syl").value + 1);   
    }
    document.getElementById("resultA").innerHTML = "Je crois qu' E.T souhaite rentrer chez lui : <b>" + result_final + " !</b>";
    });

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("resultA").innerHTML = "";
    document.getElementById("mot").value="";
    document.getElementById("syl").value="";
})