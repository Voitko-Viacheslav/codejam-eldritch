import cardGreen from "../cardGreen.js";
// console.log(cardGreen)
import cardBlue from "../cardBlue.js";
import cardGray from "../cardGray.js";
// import cardAncients from "/ancients.js";


// mix up button
const mixUp = document.querySelector('.mix-up');

// cards change
const cardResult = document.querySelector('.card-result');

// all encients 
const encientOneCard = document.querySelector('.encient-one-card');
const encientTwoCard = document.querySelector('.encient-two-card');
const encientThreeCard = document.querySelector('.encient-three-card');
const encientFourCard = document.querySelector('.encient-four-card');

// 
let levelCard = ''
encientOneCard.addEventListener('click', () =>{
  levelCard = "one card";
  cardResult.classList.remove('card-result-display');
  cardPosition.classList.remove('card-position-display');
  cardBacg.classList.remove('card-bacg-display');
  mixUp.classList.add('mix-up-display');
})
encientTwoCard.addEventListener('click', () =>{
  levelCard = "two card";
  cardResult.classList.remove('card-result-display');
  cardPosition.classList.remove('card-position-display');
  cardBacg.classList.remove('card-bacg-display');
  mixUp.classList.add('mix-up-display');
})
encientThreeCard.addEventListener('click', () =>{
  levelCard = "three card";
  cardResult.classList.remove('card-result-display');
  cardPosition.classList.remove('card-position-display');
  cardBacg.classList.remove('card-bacg-display');
  mixUp.classList.add('mix-up-display');
})
encientFourCard.addEventListener('click', () =>{
  levelCard = "four card";
  cardResult.classList.remove('card-result-display');
  cardPosition.classList.remove('card-position-display');
  cardBacg.classList.remove('card-bacg-display');
  mixUp.classList.add('mix-up-display');
})



// Stage one color
const stageOneNumberGreen = document.querySelector('.stage-one-number-green');
const stageOneNumberGray = document.querySelector('.stage-one-number-gray');
const stageOneNumberBlue = document.querySelector('.stage-one-number-blue');
// Stage two color
const stageTwoNumberGreen = document.querySelector('.stage-two-number-green');
const stageTwoNumberGray = document.querySelector('.stage-two-number-gray');
const stageTwoNumberBlue = document.querySelector('.stage-two-number-blue');
// Stage three color
const stageThreeNumberGreen = document.querySelector('.stage-three-number-green');
const stageThreeNumberGray = document.querySelector('.stage-three-number-gray');
const stageThreeNumberBlue = document.querySelector('.stage-three-number-blue');


// all Buttons
const buttonVeryEasy = document.querySelector('.btn-level-very-easy');
const buttonEasy = document.querySelector('.btn-level-easy'); 
const buttonMedium = document.querySelector('.btn-level-medium'); 
const buttonHard = document.querySelector('.btn-level-hard');
const buttonVeryHard = document.querySelector('.btn-level-very-hard');


function choiceCardsLayuot () {

  if (levelCard === "one card") {
    stageOneNumberGreen.textContent = 0;
    stageOneNumberGray.textContent = 2;
    stageOneNumberBlue.textContent = 2;

    stageTwoNumberGreen.textContent = 1;
    stageTwoNumberGray.textContent = 3;
    stageTwoNumberBlue.textContent = 0;

    stageThreeNumberGreen.textContent = 3;
    stageThreeNumberGray.textContent = 4;
    stageThreeNumberBlue.textContent = 0;
  }

  if (levelCard === "two card") {
    stageOneNumberGreen.textContent = 1;
    stageOneNumberGray.textContent = 2;
    stageOneNumberBlue.textContent = 1;

    stageTwoNumberGreen.textContent = 3;
    stageTwoNumberGray.textContent = 2;
    stageTwoNumberBlue.textContent = 1;

    stageThreeNumberGreen.textContent = 2;
    stageThreeNumberGray.textContent = 4;
    stageThreeNumberBlue.textContent = 0;
  }

  if (levelCard === "three card") {
    stageOneNumberGreen.textContent = 0;
    stageOneNumberGray.textContent = 2;
    stageOneNumberBlue.textContent = 1;

    stageTwoNumberGreen.textContent = 2;
    stageTwoNumberGray.textContent = 3;
    stageTwoNumberBlue.textContent = 1;

    stageThreeNumberGreen.textContent = 3;
    stageThreeNumberGray.textContent = 4;
    stageThreeNumberBlue.textContent = 0;
  }

  if (levelCard === "four card") {
    stageOneNumberGreen.textContent = 1;
    stageOneNumberGray.textContent = 2;
    stageOneNumberBlue.textContent = 1;

    stageTwoNumberGreen.textContent = 2;
    stageTwoNumberGray.textContent = 3;
    stageTwoNumberBlue.textContent = 1;

    stageThreeNumberGreen.textContent = 2;
    stageThreeNumberGray.textContent = 4;
    stageThreeNumberBlue.textContent = 0;
  }
}

// card background
const cardBacg = document.querySelector('.card-bacg');
// card position
const cardPosition = document.querySelector('.card-position')

// // display mixUp
// buttonVeryEasy.addEventListener('click', () => {
//   mixUp.classList.add('mix-up-display');
//   cardBacg.classList.remove('card-bacg-display');
//   cardPosition.classList.remove('card-position-display');
//   cardResult.classList.remove('card-result-display');
// });
// // display mixUp
// buttonEasy.addEventListener('click', () => {
//   mixUp.classList.add('mix-up-display');
//   cardBacg.classList.remove('card-bacg-display');
//   cardPosition.classList.remove('card-position-display');
//   cardResult.classList.remove('card-result-display');
// });
// display mixUp
buttonMedium.addEventListener('click', () => {
  mixUp.classList.add('mix-up-display');
  cardBacg.classList.remove('card-bacg-display');
  cardPosition.classList.remove('card-position-display');
  cardResult.classList.remove('card-result-display');
});
// // display mixUp
// buttonHard.addEventListener('click', () => {
//   mixUp.classList.add('mix-up-display');
//   cardBacg.classList.remove('card-bacg-display');
//   cardPosition.classList.remove('card-position-display');
//   cardResult.classList.remove('card-result-display');
// });
// // display mixUp
// buttonVeryHard.addEventListener('click', () => {
//   mixUp.classList.add('mix-up-display');
//   cardBacg.classList.remove('card-bacg-display');
//   cardPosition.classList.remove('card-position-display');
//   cardResult.classList.remove('card-result-display');
// });


// output thenumbering
mixUp.addEventListener('click', () => {
  choiceCardsLayuot();
  cardBacg.classList.add('card-bacg-display');
  mixUp.classList.remove('mix-up-display');
  cardPosition.classList.add('card-position-display');
  cardResult.classList.add('card-result-display');
});


// title One stage
const titleOneStage = document.querySelector('.title-one');
const titleTwoStage = document.querySelector('.title-two');
const titleThreeStage = document.querySelector('.title-three');


let greenArray = [];
let grayArray = [];
let blueArray = [];
buttonMedium.addEventListener('click', () => {
  for (let key in cardGreen) {
    // if (cardGreen[key].difficulty == 'easy') {
    // greenArray.push(cardGreen[key].id)
    // }
    greenArray.push(cardGreen[key].id)
  } 
  for (let key in cardGray) {
    grayArray.push(cardGray[key].id)
  } 
  for (let key in cardBlue) {
    blueArray.push(cardBlue[key].id)
  } 
})





// let brownArray = [];
// let bluArray = [];
// cardBacg change card
let mediumArrayAll = [greenArray,grayArray,blueArray];
let color = '';
cardBacg.addEventListener('click', () => {


  // if (stageOneNumberGreen.textContent == 0) {
  //   // mediumArrayAll.splice(0,1)
  //   !cardMedium();
  // }

  if (stageOneNumberGray.textContent > 0 || stageOneNumberBlue.textContent > 0 || stageOneNumberGreen.textContent > 0)  {
    cardMedium();

    if (color == "green" && stageOneNumberGreen.textContent > 0) {
      stageOneNumberGreen.textContent--
    } else if(color == "blue" && stageOneNumberBlue.textContent > 0) {
      stageOneNumberBlue.textContent--
    } else if (color == "brown" && stageOneNumberGray.textContent > 0) {
      stageOneNumberGray.textContent--
    }
  } else if (stageOneNumberGray.textContent == 0 && stageOneNumberBlue.textContent == 0 && stageOneNumberGreen.textContent == 0)  {
    titleOneStage.classList.add('title-color-stage');
    cardMedium();

    if (color == "green" && stageTwoNumberGreen.textContent > 0) {
      stageTwoNumberGreen.textContent--
    } else if(color == "blue" && stageTwoNumberBlue.textContent > 0) {
      stageTwoNumberBlue.textContent--
    } else if (color == "brown" && stageTwoNumberGray.textContent > 0) {
      stageTwoNumberGray.textContent--
    }  else if (stageTwoNumberGray.textContent == 0 && stageTwoNumberBlue.textContent == 0 && stageTwoNumberGreen.textContent == 0)  {
      titleTwoStage.classList.add('title-color-stage');
      cardMedium();
  
      if (color == "green" && stageThreeNumberGreen.textContent > 0) {
        stageThreeNumberGreen.textContent--
      } else if(color == "blue" && stageThreeNumberBlue.textContent > 0) {
        stageThreeNumberBlue.textContent--
      } else if (color == "brown" && stageThreeNumberGray.textContent > 0) {
        stageThreeNumberGray.textContent--
      } 
      else if (stageThreeNumberGray.textContent == 0 && stageThreeNumberBlue.textContent == 0 && stageThreeNumberGreen.textContent == 0)  {
        titleThreeStage.classList.add('title-color-stage');
        cardResult.classList.remove('card-result-display')
      } 
    } 
  }
 
})

// console.log(greenArray)
let randomMinAll = 0;
function cardMedium() {
  
  let randomMediumArrayAll =  Math.floor(Math.random() * ((mediumArrayAll.length) - randomMinAll) + randomMinAll);

 let result = '';
  if (randomMediumArrayAll == 0) {
    let minGreen = 1;
    let green = greenArray;
    let randomNumGreen =  Math.floor(Math.random() * ((green.length - 1) - minGreen) + minGreen);
    result = randomNumGreen;
    color = "green";
  } 
  if (randomMediumArrayAll == 1 ) {
    let minGray = 1;
    let gray = grayArray;
    let randomNumGray =  Math.floor(Math.random() * ((gray.length - 1) - minGray) + minGray);
    result = randomNumGray;
    color = "brown";
  }
  if (randomMediumArrayAll == 2) {
    let minBlue = 1;
    let blue = blueArray;
    let randomNumBlue =  Math.floor(Math.random() * ((blue.length - 1) - minBlue) + minBlue);
    result = randomNumBlue;
    color = "blue";
  }


  let greenMedium = (mediumArrayAll[randomMediumArrayAll][result])
  console.log(greenMedium)
  cardResult.style.backgroundImage =
  `url(https://raw.githubusercontent.com/Voitko-Viacheslav/eldritch-codejam-image/main/assets/MythicCards/${color}/${greenMedium}.png)`;
}

