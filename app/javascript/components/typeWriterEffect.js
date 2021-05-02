const typeWriterEffect = () => {

const words = ['think', 'design', 'create', 'code'];
let count = 0;
let letter = 0;
let wordToPrint = "";
let direction = 'forward';

const inputWords = document.querySelector('#inputWords');
console.log ('d');

if (inputWords) {

console.log ('d');
const cycle = () => {
  console.log('im cycle');
  let word = words[count];


if (direction == 'forward'){

  if (letter < word.length ) {
    wordToPrint += word[letter];
    letter++;
    updateText(wordToPrint);
    } else {
      direction = 'backward'
    }
  } else {
      if (wordToPrint.length>0 ) {
        wordToPrint = wordToPrint.slice(0,-1);
        updateText(wordToPrint);
      } else {
        startOver()
      }
    }

  }

  setInterval(cycle,200);
  }


  const startOver = () => {
    resetState();
    if (count <words.length - 1) {
      count++;
    } else {
      count=0;
    }

  }

  const resetState =() => {
    letter = 0;
    wordToPrint = "";
    direction = "forward";
  }


const updateText = (text) => {
  inputWords.textContent = text;
  }




}


export {typeWriterEffect}

