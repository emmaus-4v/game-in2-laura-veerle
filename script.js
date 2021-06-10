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

var spelerX1 = 200; // x-positie van speler1
var spelerY1 = 100; // y-positie van speler1

var spelerX2 = 300; // x-positie van speler2
var spelerY2 = 100; // y-positie van speler2

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
  fill("orange"); //snavel en voeten
  ellipse(x, y+5, 30, 10);
  ellipse(x-20, y+85, 30, 10)
  ellipse(x+20, y+85, 30, 10)
  fill("white"); //buik
  ellipse(x, y+50, 30, 45);


};

var tekenSpeler2 = function(x, y) {
  fill("purple"); //lichaam speler2
  ellipse(x, y, 50, 50);
  ellipse(x, y + 50, 60, 70);
  fill("orange"); // snavel en voeten
  ellipse(x, y+5, 30, 10);
  ellipse(x-20, y+85, 30, 10)
  ellipse(x+20, y+85, 30, 10)
  fill("white"); //buik
  ellipse(x, y+50, 30, 45);

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
var checkGameOver = function() {
    
  return false;
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
        textSize(20);
        text("Gebruik de pijltjes om de zwarte pingiun te bewegen", 420, 300, 500, 400)

        if (keyIsDown(13)) {
            spelStatus = SPELEN
        }

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

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
