function solution(N) {
  var NString = N.toString();
  var NObj = {};
  var NLength = NString.length;

  if (N === 0) {
    return 1;
  }

  function factorial(x) {
    if(x == 0 || x < 0) {
       return 1;
    }
    return x * factorial(x-1);
  }

  for (let i = 0; i < NString.length; i++) {
    if (NObj.hasOwnProperty(NString[i])) {
      NObj[NString[i]]++;
    } else {
      NObj[NString[i]] = 1;
    }
  }

  // the codility interface does not allow Object.values()
  var dupe = [];
  var keys = Object.keys(NObj);
  for (let i = 0; i < keys.length; i++) {
    dupe.push(NObj[keys[i]]);
  }

  var result;
  var combineDupes = 1;
  result = factorial(NLength);
  for (let i = 0; i < dupe.length; i++) {
    result = result / factorial(dupe[i]);
  }  

  if (NObj.hasOwnProperty("0")) {
    dupe[dupe.indexOf(NObj[0])]--;
    var lengthWithoutHead = NLength - 1;
    var zeroHeadCase = factorial(lengthWithoutHead);
    for (let i = 0; i < dupe.length; i++) {
      zeroHeadCase = zeroHeadCase / factorial(dupe[i]);
    }
    result = result - zeroHeadCase;
  }

  return result;
}

console.log(solution(1010000000));
