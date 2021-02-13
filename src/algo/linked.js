function substrChecker(input) {
  var res = "";
  var start = 0;
  debugger;
  for (var i = 1; i < input.length; i++) {
    if (input[i] < input[i - 1]) {
      if (res.length <= (i - start +1)) {
        res = input.substr(start, i - start +1);
      }
    } else {
      start = i;
    }
  }

  return res;
}

substrChecker('baca');

substrChecker('ba');

class Node {
  name = "";
  next = null;
  //next: Node = null;
}

function linkedList() {
  var root = new Node();
  root.name = "unu";

  var n2 = new Node();
  n2.name = "doi";

  root.next = n2;

  return n1;
}

function linkedList1(arr) {
  var curent = new Node();
  curent.name = arr[0];
  var root = curent;

  for (var i = 1; i < arr.length; i++) {
    var node = new Node();
    node.name = arr[i];

    curent.next = node;
    curent = node;
  }

  return root;
}
