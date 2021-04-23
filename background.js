// function display_h1 (results){
//   h1=results;
//   document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
// }
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   var tab = tabs[0];
//   tab_title = tab.title;
//   chrome.tabs.executeScript(tab.id, {
//     code: 'document.querySelector("div.cXedhc.uQ4NLd").textContent'
//   }, display_h1);
// });


var results = document.querySelector("div.cXedhc.uQ4NLd");
var h = document.getElementById("#id1");
console.log(results.textContent);
h.textContent = results.textContent;