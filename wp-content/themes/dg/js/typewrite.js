
const phrases = [ "We are a creative consultancy",
  "We are a creative incubator",
  "We are a creative partner for  CEOs and their organizations",
  "We build design  driven solutions  that launch new  business, products, channels & services"];

function updateString(string, position) {
  currentString += string[position];
  console.log(currentString);
};


function typewrite(phrase){
  let callCount = 0;
  let currentString = "";
  const maxCallCount = phrase.length;
  const repeater = setInterval(function () {
    if (callCount < maxCallCount) {
      updateString(phrase, callCount);
      callCount += 1;
    } else {
      clearInterval(repeater);
    }
  }, 70);
}


typewrite(phrase);

