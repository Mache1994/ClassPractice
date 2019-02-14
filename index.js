window.onload=function(){
console.log("Load JS correctly");


document.getElementById("submitInput").addEventListener("click", function(event) {
   event.preventDefault();
});

document.getElementById("submitInput").addEventListener("click", GetName);


document.getElementById("CancelInput").addEventListener("click", function(event) 
{
   event.preventDefault();
});

function GetName() 
{
	var name = String(document.getElementById("formElement1").value);
  console.log(name);
}
};