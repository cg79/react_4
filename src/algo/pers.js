function getRand() {
  return Math.floor(Math.random() * 100);
}

function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class persoana {
  constructor(obj) {

    const { guid, greutate, varsta } = obj;

    this.guid = guid;
    this.greutate = greutate;
    this.varsta = varsta;
  }
}
function populatePersonList(n) {
  var res = [];
  var guidValue = "";
  for (i = 0; i < n; i++) {
    debugger;
    greutate = getRand();
    varsta = getRand();
    guidValue = guid();

    var obj = {
        varsta,
        greutate,
        guid: guidValue,
    };
    res.push(new persoana(obj));
  }
  return res;
}



