var pvp1 = 100
var atqp1 = 50
var defp1 = 15
var manap1 = 100

var pvp2 = 100
var atqp2 = 50
var defp2 = 15
var manap2 = 100

var pvp3 = 100
var atqp3 = 30
var defp3 = 15
var manap3 = 100

var pvp4 = 100
var atqp4 = 30
var defp4 = 15
var manap4 = 100

var pvmonstre1 = 250
var atqmonstre1 = 15

var pvmonstre2 = 500
var atqmonstre2 = 30

var pvmonstre3 = 250
var atqmonstre3 = 15

var monstreChoisit = 0

document.getElementById("infoAction").innerHTML = "le jeu commence";
document.getElementById("vie1").innerHTML = pvp1
document.getElementById("mana1").innerHTML = manap1
document.getElementById("degat1").innerHTML = atqp1

document.getElementById("vie2").innerHTML = pvp2
document.getElementById("mana2").innerHTML = manap2
document.getElementById("degat2").innerHTML = atqp2

document.getElementById("vie3").innerHTML = pvp3
document.getElementById("mana3").innerHTML = manap3
document.getElementById("degat3").innerHTML = atqp3

document.getElementById("vie4").innerHTML = pvp4
document.getElementById("mana4").innerHTML = manap4
document.getElementById("degat4").innerHTML = atqp4

var monstre2 =document.getElementById("monstre2")
var buttonattaque = document.getElementById("attaque")

infomonstre1.style.opacity="0";
infomonstre2.style.opacity="0";
infomonstre3.style.opacity="0";


imgScorpion1.onmouseover=function(){
    infomonstre1.style.opacity="1";
    imgScorpion1.onmouseout=function(){
        infomonstre1.style.opacity="0";
    }
}
imgDragon.onmouseover=function(){
    infomonstre2.style.opacity="1";
    imgDragon.onmouseout=function(){
        infomonstre2.style.opacity="0";
    }
}
imgScorpion2.onmouseover=function(){
    infomonstre3.style.opacity="1";
    imgScorpion2.onmouseout=function(){
        infomonstre3.style.opacity="0";
    }
}


buttonattaque.onclick = function(){
    monstreChoisit = prompt("Veuillez choisir un monstre à attaquer: 1=Scorpion 1____2=DRAGON____3=SCOPRION 2")
    if(monstreChoisit == 1){ 
        pvmonstre1 = pvmonstre1 -atqp1
        document.getElementById("pvmonstre1").innerHTML = pvmonstre1
        document.getElementById("infoAction").innerHTML = "Vous infligez "+atqp1+" dégat au SCORPION 1";
        if(pvmonstre1 <= 0){
            document.getElementById("monstre1").style.visibility="hidden";
            document.getElementById("infoAction").innerHTML = "Le scorpion 1 est mort!!";
            testVictoire();
        }
    }
    if(monstreChoisit == 2){ 
        pvmonstre2 = pvmonstre2 -atqp1
        document.getElementById("pvmonstre2").innerHTML = pvmonstre2
        document.getElementById("infoAction").innerHTML = "Vous infligez "+atqp1+" dégat au DRAGON";
        if(pvmonstre2 <= 0){
            document.getElementById("monstre2").style.visibility="hidden";
            document.getElementById("infoAction").innerHTML = "Le dragon est mort!!";
            testVictoire();
        }
    }
    if(monstreChoisit == 3){ 
        pvmonstre3 = pvmonstre3 -atqp1
        document.getElementById("pvmonstre3").innerHTML = pvmonstre3
        document.getElementById("infoAction").innerHTML = "Vous infligez "+atqp1+" dégat au SCORPION 2";
        if(pvmonstre3 <= 0){
            document.getElementById("monstre3").style.visibility="hidden";
            document.getElementById("infoAction").innerHTML = "Le scorpion 2 est mort!!";
            testVictoire();
        }
    }
}
var testVictoire = function() { 
    if(pvmonstre1 <= 0 && pvmonstre2 <= 0 && pvmonstre3 <= 0){ 
        document.getElementById("infoAction").innerHTML = "Les monstres sont morts vous avez gagné la partie.";
    }
}
