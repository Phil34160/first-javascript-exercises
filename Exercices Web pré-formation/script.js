document.getElementById("validerT").addEventListener("click",function(){
    let nbR = document.getElementById("nbRow").value;
    let nbC = document.getElementById("nbCol").value;
    let table = "<form><table border ='1'>";
    for (let i =0; i<parseInt(nbR);i++){
     table+="<tr>" + "<th><b> Row " + (i+1) + "</b></th>";
    
    for ( let j=0; j<parseInt(nbC);j++){
      table+="<td></td>";

      }
      table+="</tr>";
    }
      table+="</table></form>";
   
    document.getElementById("resultTable").innerHTML= table;
    });
   document.getElementById("resetT").addEventListener("click",function(){
     document.getElementById("nbRow").value ="";
     document.getElementById("nbCol").value ="";
     document.getElementById("resultTable").innerHTML="";
   });

   //------------------------------ fonction métabolisme -----------------------------------//

  