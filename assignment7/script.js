// Q1
/* var x =prompt("Enter a number: ")
alert(x) */

//Q2
/* var out= document.getElementById("demo")
var x=prompt("Input: ")
if(x%3===0 && x%4===0){
    out.innerHTML ="Yes"
}else{
    out.innerHTML="No"
}
 */

//Q3
/* var n1 = prompt("enter number: ") //10
var n2 = prompt("enter another number: ")//7

n1 = Number(n1);
n2 = Number(n2);

if(n1>n2){
    alert(n1)
} else{
    alert(n2)
} */

//q4
/* var inp = prompt("enter number")
Number(inp)
if(inp>0){
    alert("Positive")
}else{
    alert("Negative")
} */
//q5
var x = prompt("enter first number")
var y = prompt("enter second number")
var z = prompt("enter third number")
if(x>y && x>z && y>z){
    alert("Max: " +x +" "+ "Min: "+z)
}else if(y>x && y>z && x>z){
    alert("Max: " +y +" "+ "Min: "+z)
}