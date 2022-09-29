// function printMyName(args){
// 	if(args == "name"){
// 		document.getElementById("name").innerHTML="Linga";
// 	}
// 	if(args == "age"){
// 		document.getElementById("age").innerHTML=23;
// 	}
// 	if(args == "gender"){ 
// 		document.getElementById("gender").innerHTML="Male";
// 	}

// }
// function getMyLength(stringvalue){
// 	document.getElementById('number').innerHTML=stringvalue.length;
// }
// function sliceForMe(stringvalue,start,end){
// 	document.getElementById('sliceForMe').innerHTML=stringvalue.slice(start,end);
// }

// function concat(firstName,lastName){
// 	document.getElementById('concat').innerHTML=firstName.concat(" ",lastName);
// }
// function toUpperCase(string){
// 	document.getElementById('uppercase').innerHTML=string.toUpperCase();
// }
// function toLowerCase(string){
// 	document.getElementById('lowercase').innerHTML=string.toLowerCase();
// }
// function trim(string){
// 	document.getElementById('trim').innerHTML=string.trim();
// }
// function replace( string,replacement,change){
//      document.getElementById('replace').innerHTML=string.replace(replacement,change);
// }
// function  indexof(string,paragraph){
// 	document.getElementById('indexof').innerHTML=string.indexOf(paragraph);
// }
// function  lastindexof(string,graph){
// 	document.getElementById('lastindexof').innerHTML=string.lastIndexOf(graph);
// }
// function  include(string,graph){
// 	document.getElementById('boolean').innerHTML=string.includes(graph);	
// }
// function  thestring(string){
// 	document.getElementById('stringss').innerHTML=string.toString();	
// }

// function match(string,value){
// 	var text="/"+value+"/g";
// 	console.log(text);
// 	document.getElementById('out').innerHTML=string.match(text);
// }

// function printOption(num){
// 	var htmlOutPut="Index: <select>";
// 	for(var a=1;a<=num;a++){
// 		htmlOutPut += `<option>${a}</option>`;

// 	}
// 	htmlOutPut += "</select>";
// 	document.getElementById('output').innerHTML=htmlOutPut;
// }




function calculate(num,mulnum,divnum){
	var numarray=[];
	var result=[];
	for(i=0;i<num;i++){
		numarray.push(i);
	}
	 for(i=0;i< numarray.length;i++){
	 	numarray[i]=numarray[i]*mulnum;
	 }
	for(i=0;i<numarray.length;i++){
		if(numarray[i]%divnum == 0){
			result.push(numarray[i]);
			console.log(result);
		}
	}
	
 document.getElementById('answer').innerHTML=result;
 }



// function addnum(start,end){
// 		parseInt(start)+parseInt(end);
		
// 		document.getElementById('add').innerHTML=parseInt(start)+parseInt(end);

// 	 }