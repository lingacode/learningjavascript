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
	document.getElementById('concat').innerHTML=firstName.concat(" "+lastName);
}
