
const typeWriterSkill = () => {

const words = ['App design', 'UX research', 'Web Design', 'Web dev'];
let count = 0;
let letter = 0;
let wordToPrint = "";
let direction = 'forward';

const inputWords = document.querySelector('#placeholder');


if (inputWords) {


const cycle = () => {

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

  setInterval(cycle,300);
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


export { typeWriterSkill }

