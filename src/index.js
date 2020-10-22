module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'];

  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
  'ninety'];

  let numberString = number.toString();

  if (number === 0) return 'zero';

  // 1-20

  if (number < 20) {
      return ones[number];
  }

  // 20 - 99

  if (numberString.length === 2) {
      if (numberString[1] !== '0') {
        return `${tens[numberString[0]]} ${ones[numberString[1]]}`;
    } else {
      return `${tens[numberString[0]]}`;
    }
  }

  // >= 100

  if (numberString.length === 3) {
      if (numberString[1] === '0' && numberString[2] === '0') { //100
          return `${ones[numberString[0]]} hundred`;
      } else if (numberString[2] !== '0' && numberString[1] !== '1' && numberString[1] !== '0') { //122
          return `${ones[numberString[0]]} hundred ${tens[numberString[1]]} ${ones[numberString[2]]}`;
      } else if (numberString[1] === '1') { //111
        return `${ones[numberString[0]]} hundred ${ones[parseInt(numberString[2]) + 10]}`;
      } else if (numberString[1] === '0') { // 102
        return `${ones[numberString[0]]} hundred ${ones[numberString[2]]}`;
      } else {
        return `${ones[numberString[0]]} hundred ${tens[numberString[1]]}`;
      }
  }

}
