/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = UITLEG;

var spelerX1 = 90; // x-positie van speler1
var spelerY1 = 460; // y-positie van speler1

var spelerX2 = 90; // x-positie van speler2
var spelerY2 = 45; // y-positie van speler2

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_UP = 38;

var KEY_A = 65;
var KEY_D = 68;
var KEY_S = 83;
var KEY_W = 87;

var ENTER = 13;


var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var goalX = 1050; // x-positie van finish
var goalY = 90;   // y-positie van finish
var goalW = 50;   // breedte van finish
var goalH = 160;  // hoogte van finish






/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */

var tekenVeld = function () {
  fill(0, 200, 255);
  rect(20, 20, width - 2 * 20, height - 2 * 20);
  fill(0, 150, 255);
  rect(20, 550, width - 2 * 20, 150);
  rect(150, 360, 50, 190); //linker onderste beginbalk
  rect(150, 20, 50, 190); // linker bovenste beginbalk
  rect(1050, 250, 50, 300); // rechter onderste eindbalk
  rect(1050, 20, 50, 70); // rechter bovenste eindbalk
  rect(350, 380, 300, 50); // horizontale balk
  rect(300, 20, 50, 200); // eerste verticale balk
  rect(500, 180, 50, 200); // tweede verticale balk
  rect(800, 300, 50, 250); // derde verticale balk
  rect(650, 120, 300, 50); // tweede horizontale balk
    // einde
  fill ("blue");
  rect(goalX, goalY, goalW, goalH);
  text("finish", 1125, 145, 50, 50)
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler1 = function(x, y) {
  fill("black"); // lichaam speler1
  ellipse(x, y, 50, 50);
  ellipse(x, y + 50, 60, 70);
  fill("white"); //ogen
  ellipse(x-10, y-5, 15, 15); //rechteroog
  ellipse(x+10, y-5, 15, 15); //linkeroog
  fill("black")
  ellipse(x-10, y-5, 5, 5); //rechteroog puntje
  ellipse(x+10, y-5, 5, 5); //linkeroog puntje
  fill("orange"); //snavel en voeten
  ellipse(x, y+5, 30, 10);
  ellipse(x-20, y+85, 30, 10)
  ellipse(x+20, y+85, 30, 10)
  fill("white"); //buik
  ellipse(x, y+50, 30, 45);
  fill("black"); //vleugels
  ellipse(x-30, y+50, 15, 45);
  ellipse(x+30, y+50, 15, 45);
};

var tekenSpeler2 = function(x, y) {
  fill("purple"); //lichaam speler2
  ellipse(x, y, 50, 50);
  ellipse(x, y + 50, 60, 70);
  fill("white"); //ogen
  ellipse(x-10, y-5, 15, 15); //rechteroog
  ellipse(x+10, y-5, 15, 15); //linkeroog
  fill("black")
  ellipse(x-10, y-5, 5, 5); //rechteroog puntje
  ellipse(x+10, y-5, 5, 5); //linkeroog puntje
  fill("orange"); // snavel en voeten
  ellipse(x, y+5, 30, 10);
  ellipse(x-20, y+85, 30, 10)
  ellipse(x+20, y+85, 30, 10)
  fill("white"); //buik
  ellipse(x, y+50, 30, 45);
  fill("purple"); //vleugels
  ellipse(x-30, y+50, 15, 45);
  ellipse(x+30, y+50, 15, 45);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler1 = function() {
    if (keyIsDown(KEY_LEFT)){
        spelerX1 -= 5;
    }
    if (keyIsDown(KEY_RIGHT)){
        spelerX1 += 5;
    }
    if (keyIsDown(KEY_DOWN)){
        spelerY1 += 5;
    }
    if (keyIsDown(KEY_UP)){
        spelerY1 -= 5;
    }

    if (spelerX1 < 57){ //linker rand
        spelerX1 = 57;
    }
    if (spelerX1 > 1223){ // rechter rand
        spelerX1 = 1223;
    }
    if (spelerY1 < 45){ // boven rand
        spelerY1 = 45;
    }

    if (spelerY1 > 460){ // beneden rand
        spelerY1 = 460;
    }
    
}

var beweegSpeler2 = function() {
    if (keyIsDown(KEY_A)){
        spelerX2 -= 5;
    }
    if (keyIsDown(KEY_D)){
        spelerX2 += 5;
    }
    if (keyIsDown(KEY_S)){
        spelerY2 += 5;
    }
    if (keyIsDown(KEY_W)){
        spelerY2 -= 5;
    }

    if (spelerX2 < 57){
        spelerX2 = 57;
    }
    if (spelerX2 > 1223){
        spelerX2 = 1223;
    }
    if (spelerY2 < 45){
        spelerY2 = 45;
    }
    if (spelerY2 > 460){
        spelerY2 = 460;
    }

}

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGewonnen = function() {
  if (spelerX1 > goalX && spelerX1 < (goalX + goalW) && spelerY1 > goalY && spelerY1 < (goalY+goalH)) {
     return 1; // speler1 gewonnen 
     // speler1 gewonnen
  } 
  if (spelerX2 > goalX && spelerX2 < (goalX + goalW) && spelerY2 > goalY && spelerY2 < (goalY+goalH)) {
    return 2; // speler2 gewonnen
  } 
  return 0; // niemand gewonnen

};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {

    case UITLEG:
        background("blue");
        textSize(35);
        fill("white")
        text("UITLEG", 550, 50, 200, 200)
        text("Gebruik de pijltjes om de zwarte pinguïn te bewegen.", 150, 150, 1000, 400)
        text("Gebruik de toetsen a, w, s en d om de paarse pinguïn te bewegen.", 50, 250, 1200, 400)
        text("Klik op enter om het spel te starten!", 300, 350, 800, 300)

        if (keyIsDown(ENTER)) {
            spelStatus = SPELEN
        }

        break;
  

    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler1();
      beweegSpeler2();
      
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();

      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler1(spelerX1, spelerY1);
      tekenSpeler2(spelerX2, spelerY2);

      if (checkGewonnen() > 0) {
        spelStatus = GAMEOVER;
      }
      break;
      case GAMEOVER:
          background("blue");
          textSize(35);
          fill("white")
          text("De winnaar is pinguïn", 450, 100, 600, 100);
          text("De zwarte pinguïn is 1, de paarse pinguïn is 2.", 350, 400, 600, 100);
          text("Klik op enter om opnieuw te beginnen.", 350, 500, 600, 100);
          textSize(50);
          text(checkGewonnen(), 600, 200, 50, 50);

      if (keyIsDown(ENTER)) {
            spelStatus = UITLEG
            score = 1000
        }
        break;
 
  }
}
