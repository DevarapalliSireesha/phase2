function submit() {
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
  var branch=document.getElementById('branch').value;
  var phno=document.getElementById('phno').value;
  var degree=document.getElementById('degree').value;
  var dcollege=document.getElementById('dcollege').value;
  var dbranch=document.getElementById('dbranch').value;
  var dmarks=document.getElementById('dmarks').value;
  var idegree=document.getElementById('idegree').value;
  var ibranch=document.getElementById('ibranch').value;
  var imarks=document.getElementById('imarks').value;
  var board=document.getElementById('board').value;
  var school=document.getElementById('school').value;
  var medium=document.getElementById('medium').value;
  var smarks=document.getElementById('smarks').value;
  var skills=document.getElementById('skills').value;

  var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;
  //ternary operation
  indexedDB?console.log("success"):console.log("browser Not Supported");
  var request=indexedDB.open("DBMS",1);
  console.log(request);
}
