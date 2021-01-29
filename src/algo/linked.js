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

  for(var i=1;i<arr.length;i++){
    var node = new Node();
    node.name = arr[i];
    
    curent.next = node;
    curent = node;

  }

  return root;
}
