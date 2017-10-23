// #long text
// # upper lower space
// no leading/trailing/double space

// input
// text

// output
// number of messages to send the entier text

// constraints
// can contain k chracters
// each must be max length
// don't split word
// concatinating messages retrieve original text
// space at the start and end of the messages are removed

// be correct rather than care for the performance

function solution(S, K) {
  var counter = 1;
  var break_location;

  var m = S.split(" ").sort(function(a, b){ 
    return b.length - a.length;
  })

  if (m[0].length > K || S.length === 0 || typeof(S) !== "string" || typeof(K) !== "number") {
    return -1
  }

  function wordcount(sentence) {
    var word_count = 0;

    if (sentence.length <=0) {
      return counter;
    }

    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i]=== " ") {
        break_location = i;
      }
      word_count++;
      if (word_count > K) {
        var splitted = sentence.split('').splice(break_location + 1, sentence.length - break_location);
        counter ++;
        break_location = 0;
        return wordcount(splitted.join(''), 13);
      }
    }
  }

  wordcount(S, K);
  return counter;
}

console.log(solution("SMS messages are really short", 13));
console.log(solution("short", 13));
console.log(solution("", 13));
console.log(solution("dfghjkjhgfdfghjjhgfdfghjhgfdfghjhgfdfghjhgfdfghjhgfdfghgfdfghjhgffgh", 13));