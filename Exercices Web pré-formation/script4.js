document.getElementById("valider").addEventListener("click",function(){
    let nbr = parseInt(document.getElementById("nbr").value);
    let unite = ["zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
    let dizaine = ["Vingt","Trente","Quarante","Cinquante","Soixante","Soixante-dix","Quatre-vingt","Quatre-vingt-dix"];
    let dizaine1 =["vingt","trente","quarante","cinquante","soixante","soixante-dix","quatre-vingt","quatre-vingt-dix"]; 
    let centaine = ["Cent","Deux-cent","Trois-cent","Quatre-cent","Cinq-cent","Six-cent","Sept-cent","Huit-cent","Neuf-cent"];
    //console.log(dizaine[nbr]);
    let final = "";
    let tempC = "";
    let tempD ="";
    let tempU ="";
    let tempExU ="";
    let tempExD = "";
    let tempD1 ="";
    let sNbr = nbr.toString().split("");
    if(nbr < 20){
        final = unite[nbr];
        final = final.charAt(0).toUpperCase()+final.substring(1).toLowerCase();
        document.getElementById("result").innerHTML ="<b>" + final + "</b>";
       //console.log(sNbr);
       } 
         if(nbr >= 20 ){
            tempD  = sNbr[0];
            tempD  = dizaine[tempD - 2];
            //console.log(tempD);
            tempU = sNbr[1];
            tempU = unite[tempU]; 
            final = tempD + " " + tempU;
            //console.log(final);
            if(nbr == 21 || nbr == 31 || nbr == 41 ||nbr == 51 || nbr == 61){
                 final = tempD + " et " + tempU;
                //console.log(tempD + " et " + tempU);
                //document.getElementById("result").innerHTML = final;
                } else if ((nbr>=71 && nbr<=79)||(nbr>=91 && nbr<=99)){
                 tempExD = sNbr[0];
                 tempExD = dizaine[tempExD - 3];
                 tempD = tempExD;
                 tempExU = parseInt(sNbr[1]) + 10;
                 tempExU = unite[tempExU];
                 //console.log(tempExU);
                 tempU = tempExU;
                 final = tempD + " " + tempU;
                if(nbr===71){
                        final = tempD + " et " + tempU;
                    }
                } 
                     if (nbr == 20 || nbr == 30 || nbr== 40 || nbr== 50 ||nbr == 60 ||nbr== 70 ||nbr== 80 ||nbr== 90){
                         final = tempD;
                     }
        }
        document.getElementById("result").innerHTML ="<b>" + final + "</b>"; 
    
    if(nbr>99 ){
            tempC = sNbr[0];
            tempC = centaine[tempC - 1];
            tempD1 = sNbr[1];
            tempD1 = dizaine1[tempD1 -2];
            tempU = sNbr[2];
            tempU = unite[tempU];
             //console.log(tempC + " " + tempD1 + " " + tempU);
             final = tempC + " " + tempD1 + " " + tempU;
                 if (parseInt(sNbr[1]+sNbr[2])<20 && (sNbr[1]!=0 && sNbr[2]!=0)){
                    let tempExS = parseInt(sNbr[2]) + 10;
                     tempExS = unite[tempExS];
                        //console.log(tempC + " " + tempExS);
                        final = tempC + " " + tempExS;
                            } else if(sNbr[1] == 0 && sNbr[2] == 0){
                             //console.log(tempC);
                             final = tempC;
                                } else if (sNbr[1]==0){
                                    final = tempC + " " + tempU;
                                 //console.log(tempC + " " + tempU);
                                    } else if (sNbr[2]==0){
                                        //console.log(tempD1);
                                        final = tempC + " dix";
                                       //console.log(tempC + " " + tempD1);
                                    } else if((parseInt(sNbr[1]+sNbr[2])>71 && parseInt(sNbr[1]+sNbr[2])<=79) || (parseInt(sNbr[1]+sNbr[2])>=71 && parseInt(sNbr[1]+sNbr[2])<=79)){
                                        tempExD = sNbr[1];
                                        tempExD = dizaine1[tempExD - 3];
                                        tempD1 = tempExD;
                                        tempExU = parseInt(sNbr[2]) + 10;
                                        tempExU = unite[tempExU];
                                        tempU = tempExU;
                                        final = tempC + " " + tempD1 + " " + tempU;
                                        if(parseInt(sNbr[1]+sNbr[2])==71){
                                            final = tempC + " " + tempD1 + " et " + tempU;
                                        }
                                        //console.log(final); 
                                    } else if (parseInt(sNbr[1]+sNbr[2])==21 || parseInt(sNbr[1]+sNbr[2])==31 || parseInt(sNbr[1]+sNbr[2])==41 || parseInt(sNbr[1]+sNbr[2])==51 || parseInt(sNbr[1]+sNbr[2])==61){
                                        final = tempC + " " + tempD1 + " et " + tempU;
                                        }
    }
         document.getElementById("result").innerHTML ="<b>" + final + "</b>";
    if(nbr == 1000){
        document.getElementById("result").innerHTML ="<b>Mille</b>";  
    }
    if(nbr > 1000){
        document.getElementById("result").innerHTML ="<b>J'ai décidé de m'arrêter à MILLE.....merci de votre compréhension !</b>"; 
    }
     });
//--------------------------------------------- RESET ------------------------------------------------//
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("result").innerHTML="";
    document.getElementById("nbr").value="";
});