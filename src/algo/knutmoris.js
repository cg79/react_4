function km(input, word) {
  // debugger;
  var p1 = 0;
  var p2 = 0;

  while (p1 < input.length) {
    if (input[p1] === word[p2]) {
      p1++;
      p2++;
      if (p2 === word.length) {
        return p1 - word.length;
      }
    } else {
      p1++;
      p2 = 0;
    }
  }

  return -1;
}

km("abbbbbbbbbb", "abbbbc");

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var i = 0;
  var result = 0;
  var max = 0;
  var stack = [-1];

  while (i < s.length) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      if (stack.length > 0) {
        var x = stack.pop();
        if (stack.length === 0) {
          stack.push(i);
        } else {
          result = Math.max(result, i - stack[stack.length - 1]);
        }
      }
    }

    i++;
  }

  return result;
};



function guid() {
  return ‘xxxxxxxx - xxxx - 4xxx - yxxx - xxxxxxxxxxxx’.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == ‘x’ ?r: (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
function greutate() {
  return Math.floor(Math.random() * 200);
};
function varsta() {
  return Math.floor(Math.random() * 150);
};
class persoana {
  constructor(guid, greutate, varsta) {
    this.guid = guid;
    this.greutate = greutate;
    this.varsta = varsta;
  }
}

function npersoane(n) {
  var persoane = [];
  var guidValue = '';
  var greutateValue = 0;
  var varstaValue = 0;

  for (var i = 0; i < n; i++) {
    guidValue = guid();
    greutateValue = greutate();
    varstaValue = varsta();

    persoane.push(new persoana(guidValue, greutateValue, varstaValue));
  }
  
  return persoane;
}