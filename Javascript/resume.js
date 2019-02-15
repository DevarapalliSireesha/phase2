var query=window.location.search.substring(1).split("?");
var parent;
query.map((data)=> {
let splitdata=data.split("=");
parent=parseInt(splitdata[1]);
});
//  store data past here
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
var getExact=store.get(parent);
getExact.onsuccess=function(get){
  console.log(get.target.result);

}
}
