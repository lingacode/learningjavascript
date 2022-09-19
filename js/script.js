function printMyName(args){
	if(args == "name"){
		document.getElementById("name").innerHTML="Linga";
	}
	if(args == "age"){
		document.getElementById("age").innerHTML=22;
	}
	if(args == "gender"){
		document.getElementById("gender").innerHTML="Male";
	}

}
function getMyLength(stringvalue){
	document.getElementById('num').innerHTML=stringvalue.length;
}
function sliceForMe(stringvalue,start,end){
	document.getElementById('sliceForMe').innerHTML=stringvalue.slice(start,end);
}

function concat(firstName,lastName){
	document.getElementById('concat').innerHTML=firstName.concat(" ",lastName);
}
function toUpperCase(string){
	document.getElementById('uppercase').innerHTML=string.toUpperCase();
}
function toLowerCase(string){
	document.getElementById('lowercase').innerHTML=string.toLowerCase();
}
function trim(string){
	document.getElementById('trim').innerHTML=string.trim();
}
function replace( string,replacement,change){
     document.getElementById('replace').innerHTML=string.replace(replacement,change);
}
function  indexof(string,paragraph){
	document.getElementById('indexof').innerHTML=string.indexOf(paragraph);
}
function  lastindexof(string,graph){
	document.getElementById('indexof').innerHTML=string.lastIndexOf(graph);
}
function  include(string,graph){
	document.getElementById('indexof').innerHTML=string.includes(graph);	
}
function match(string,value){
	var text="/"+value+"/g";
	console.log(text);
	document.getElementById('out').innerHTML=string.match(text);
}
