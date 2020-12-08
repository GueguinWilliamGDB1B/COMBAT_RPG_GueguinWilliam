var pvp1 = 100
var atqp1 = 50
var defp1 = 15
var manap1 = 100

var pvperso2 = 100
var atqpersonnage2 = 50
var defp2 = 15
var manap2 = 100

var pvperso3 = 100
var atqpersonnage3 = 30
var defp3 = 15
var manap3 = 100

var pvperso4 = 100
var atqpersonnage4 = 30
var defp4 = 15
var manap4 = 100

var pvmonstre1 = 250
var atqmonstre1 = 15

var pvmonstre2 = 500
var atqmonstre2 = 30

var pvmonstre3 = 250
var atqmonstre3 = 15

document.getElementById("infoAction").innerHTML = "le jeu commence";

document.getElementById("pvmonstre1").style.visibility="hidden";
document.getElementById("nommonstre1").style.visibility="hidden";


document.getElementById("pvmonstre3").style.visibility="hidden";
document.getElementById("nommonstre3").style.visibility="hidden";

var monstre2 =document.getElementById("monstre2")
var buttonattaque = document.getElementById("attaque")

buttonattaque.onclick = function(){
    pvmonstre2 = pvmonstre2 -atqp1
    document.getElementById("pvmonstre2").innerHTML = pvmonstre2
    if(pvmonstre2 <= 0){
        document.getElementById("monstre2").style.visibility="hidden";
        document.getElementById("infoAction").innerHTML = "Le dragon est mort!!";
    }
}
monstre2.onmouseout = function (){
    if (pv_monstre_2 > 0){
        document.getElementById("pvmonstre2").style.visibility="hidden";
        document.getElementById("nommonstre2").style.visibility="hidden";
        monstre2.onmouseover = function() {
            document.getElementById("pvmonstre2").style.visibility="visible";
            document.getElementById("nommonstre2").style.visibility="visible";
        }
    }
}



