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
function sliceForMe(stringvalue,startIndex,endIndex){
	document.getElementById('sliceForMe').innerHTML=stringvalue.slice(startIndex,endIndex);
}