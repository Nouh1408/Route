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
/* var x = prompt("enter first number")
var y = prompt("enter second number")
var z = prompt("enter third number")
var max, min
if (x >= y && x >= z) {
    max = x;
} else if (y >= x && y >= z) {
    max = y;
} else {
    max = z;
}

if (x <= y && x <= z) {
    min = x;
} else if (y <= x && y <= z) {
    min = y;
} else {
    min = z;
}
alert("Max element: "+max+" min element: "+min) */

//q6
/* var x= prompt("Enter a number: ")
if(x%2==1){
    alert("odd")
}else{
    alert("even")
} */

//q7
/* var x=prompt("enter letter")
if(x=='a'||x=='e'||x=='o'||x=='i'||x=='u'){
    alert("vowel")
} else{
    alert("constant")
} */ // should i add more || so i can include the uppercase form???

//q9
/* var x= prompt("enter a number: ")
for(var i=0;i<=x;i++){
    alert(i)
} */

//q10
/* var x=prompt("enter a nmber: ")
for(var i=1;i<=12;i++){
    var mul = x*i
    alert(mul)
} */

//12
/* var x= prompt("enter a number: ")
for(var i=1;i<x;i++){
    if(i%2==0){
        alert(i+" ")
    }
} */
//q12
/* var bottom = Number(prompt("Enter the base: ")); // 4
var top = Number(prompt("Enter the exponent (another number): ")); // 3
bottom = Number(bottom);
top = Number(top);
var result =3
result =Number(result)
for (var i = 0; i < top; i++) { //3
    result =result* bottom
}
window.alert(result) */

// q13
/* var fst = Number(prompt("Enter marks of first subject: "));
var second = Number(prompt("Enter marks of second subject: "));
var third = Number(prompt("Enter marks of third subject: "));
var fourth = Number(prompt("Enter marks of fourth subject: "));
var fifth = Number(prompt("Enter marks of fifth subject: "));

var total_marks = fst + second + third + fourth + fifth;
var avg = total_marks / 5; 
var percentage = (total_marks / 500) * 100; 

alert("Total Marks: " + total_marks);
alert("Average: " + avg);
alert("Percentage: " + percentage + "%"); */

//q13
/* var month = Number(prompt("enter month number:"));
var days;
if(month>0 && month<13){
    if(month === 2){
        days = 28
    } else if(month === 4 || month ===6 || month===9 || month ===11){
        days =30
    } else{
        days =31
    }
}else{
    alert("invalid number")
}
alert(days)
 */

//q14
/* var physics = Number(prompt("Enter marks for Physics:"));
var chemistry = Number(prompt("Enter marks for Chemistry:"));
var biology = Number(prompt("Enter marks for Biology:"));
var mathematics = Number(prompt("Enter marks for Mathematics:"));
var computer = Number(prompt("Enter marks for Computer:"));

var total = physics+chemistry+biology+mathematics+computer
var percentage= (total/500)*100

var grade
if (percentage >= 90) {
    grade = "A"
} else if (percentage >= 80) {
    grade = "B"
} else if (percentage >= 70) {
    grade = "C"
} else if (percentage >= 60) {
    grade = "D"
} else if (percentage >= 40) {
    grade = "E"
} else {
    grade = "F"
}
alert("Total Marks: " + total)
alert("Percentage: " + percentage + "%")
alert("Grade: " + grade) */

/* q15
var month= +prompt("enter a number from 1-12")
var days
switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31
        break
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30
        break
    case 2:
        days = 28 
        break
    default:
        days = "Invalid number"
}
alert(days) */

/*  q16
var vow = prompt("enter a vowel")
var char

switch (vow) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        char = "is a vowel"
        break
    default:
        char = "not a vowel"

}
alert(char) */

/* q17
var fst = +prompt("enter a number")
var snd = +prompt("enter another number")
var max
switch (true) {
    case fst > snd:
        max = fst
        break
    case snd > fst:
        max = snd
        break
    default:
        max = "equal"
        break
}
alert(max) */

/* q18 
var x= +prompt("enter a number: ")
var check
switch(true){
    case x%2===1:
    check ="Odd"
    break
    case x%2===0:
        check="Even"
        break;
}
alert(check) */

/* q19 
var x= +prompt("enter a number")
var check
switch(true){
    case x>0:
        check = "Positive"
        break
        case x<0:
            check = "Negative"
            break
            case x==0:
                check="Zero"
                break
}
alert(check) */

/* q20
 var x=+prompt("enter a number: ")
var op=prompt("enter operation")
var y=+prompt("enter anothe rnumber")

var result
switch(op){
    case '+':
    result = x+y
    break
    case '-':
        result=x-y
        break
        case '*':
            result = x*y
            break
            case '/':
                result= x/y
                break
}
alert(result) */