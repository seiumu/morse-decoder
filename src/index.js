const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  console.log(expr);
  var len = expr.length;
  var result = "";
  for (var i = 0; i < len; i += 10) {
    var str = "";
    var letter = expr.substring(i, i + 10);
    if (letter === "**********") {
      str = " ";
    } else {
      letter = letter.split("11").join("-");
      letter = letter.split("10").join(".");
      letter = letter.split("0").join("");
      str = MORSE_TABLE[letter];
      console.log(str);
    }
    result = result + str;
  }
  console.log(result);
  return result;
}

module.exports = {
  decode,
};
