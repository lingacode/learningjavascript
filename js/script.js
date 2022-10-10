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




// function calculate1(num,mulnum,divnum){
// 	var numarray=[];
// 	var result=[];
// 	for(i=0;i<num;i++){
// 		numarray.push(i);
// 	}
// 	 for(i=0;i< numarray.length;i++){
// 	 	numarray[i]=numarray[i]*mulnum;
// 	 }
// 	for(i=0;i<numarray.length;i++){
// 		if(numarray[i]%divnum == 0){
// 			result.push(numarray[i]);
// 			console.log(result);
// 		}
// 	}
	
//  document.getElementById('answer').innerHTML=result;
//  }




	
 
//  function calculate2(value,mul,div){
// 	var numArray=[];
// 	for(i=0;i<value;i++){
//  		numArray.push(i);
// 	}
// 	var newArray=numArray.map(x=>x*mul)
// 	              .filter(y=>y%div==0);
// 	document.getElementById('answer').innerHTML=newArray;
//  }



// function addnum(start,end){
// 		parseInt(start)+parseInt(end);
		
// 		document.getElementById('add').innerHTML=parseInt(start)+parseInt(end);

// 	 }

// function myNumber(number) {
// 	document.getElementById("myId").innerHTML = Math.sqrt(number);
// }
// function Number() {
// 	document.getElementById("input").innerHTML =Math.PI;
// }

// function myfunction(){
// let message;

// if (new Date().getHours() < 18) {
//   message = "Good day";
// } else {
//   message = "Good evening";
// }

// document.getElementById("day").innerHTML = message;
// }

// function days(){
// 	let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// document.getElementById("dem").innerHTML = "Today is " + day;
// }
const number=[1,100,24,45,118];
number.sort(compareFunction);
function compareFunction(a,b){
  return a-b;
}
console.log(number);
document.getElementById('answer').innerHTML=number;
