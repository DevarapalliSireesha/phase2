function submit() {
  var career=document.getElementById('career').value;
  var name=document.getElementById('name').value;
  var branch=document.getElementById('branch').value;
  var phno=document.getElementById('phno').value;
  var email=document.getElementById('email').value;
  var degree=document.getElementById('degree').value;
  var dcollege=document.getElementById('dcollege').value;
  var dbranch=document.getElementById('dbranch').value;
  var dmarks=document.getElementById('dmarks').value;
  var idegree=document.getElementById('idegree').value;
    var icollege=document.getElementById('icollege').value;
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

  //create Database
  var request=indexedDB.open("DBMS",1);
  var result;
  console.log(request);
  //upgradeneeded
  request.onupgradeneeded=function(e){
    result=e.target.result;
    store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}
  //success
  request.onsuccess=function(e){
  console.log("reached successfully");
  result=e.target.result;
  var tx=result.transaction("resume","readwrite");
  store=tx.objectStore("resume");
  store.put(
    {
      co:career,
      Name:name,
      Branch:branch,
      phno:phno,
      email:email,
      Education:[
        {
          Degree:degree,
          college:dcollege,
          Branch:dbranch,
          Marks:dmarks

        },
        {
          Degree:idegree,
          college:icollege,
          Branch:ibranch,
          Marks:imarks

        },
        {
          Degree:board,
          college:school,
          Branch:medium,
          Marks:dmarks

        },

      ],
      Skills:skills
    }
    );
  }
  //error
  request.onerror=function(e) {
    console.log("error"+e);
  }
  window.open("index.html","_self");
}
