// Chapter : 01
// Task : 01
// alert("Hello World");

// Task : 02
// alert("Error! Please enter a valid password.");

// Task : 03
//  alert("Welcome to JS land...Happy coding!");

// Task : 04
// alert("Welcome to JS land...");
// alert("Happy coding!");

// Task : 05
// console.log("Hello.. I can run JS through my web browser's console");


// Chapter : 02

// Task : 01
// var userName = "xyz"

// Task : 02
// var myName = "Abdul Samad"

// Task : 03
// var message = "Hello World!"
// alert(message);

// Task : 04
// var a = "Abdul Samad"
// var b = "18 year old"
// var c = "Certified Mobile Application Development"
// alert(a);
// alert(b);
// alert(c);

// Task : 05
// var a = "PIZZA" 
// var b = "IZZA"
// var c = "ZZA"
// var d = "ZA"
// var e = "A"
// document.write(a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e);



// Task : 06
// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(design);

// Chapter : 03

// Task : 01
// var age = "I am 23 years old"
// alert(age);

// Task : 02
// var birthYear = "My birth year is 1997"
// document.write(birthYear);

// Task : 03
// var xyz = "John Doe ordered 5 T-shirt(s) on XYZ Clothing store"
// document.write(xyz);

// Chapter : 05

// Task : 01
// var a = 2;
// var b = 3;
// var c = a + b;
// document.write(c);

// Task : 02
// var price = 600
// var tickets = 5
// var totalCost = price * tickets
// document.write("Total cost of buy 5 tickets to a movie is" + " " + totalCost + "PKR")

// Task : 03
// var C = 25;
// var F = (C * 9/5) + 32

// document.write(C + "C is " + F + "F");

// document.write("<br>")

// var F = 99;
// var C = (F - 32) * 5/9

// document.write(F + "F is " + C + "C");

// Task : 04
// var obtain = 850
// var total = 1100
// var percentage = obtain / total * 100
// document.write(percentage);

// Chapter 6-9

// Task : 01
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a = " + a + "<br>" + "b = " + b + "<br>" + "result = " + result);

// Task : 02
// var sub1 = prompt("Enter subject 1");
// var sub2 = prompt("Enter subject 2");
// var sub3 = prompt("Enter subject 3");
// var totalNum = 100
// var obtain1 = prompt("Enter obtain marks of " + sub1)
// var obtain2 = prompt("Enter obtain marks of " + sub2)
// var obtain3 = prompt("Enter obtain marks of " + sub3)
// document.write(sub1 + "==>" + "    " + obtain1 + "    " + obtain1/totalNum*100 + "%" + "<br>");

// document.write(sub2 + "==>" +  "    " + obtain2 + "    " + obtain2/totalNum*100 + "%" + "<br>");

// document.write(sub3 + "==>" +  "    " + obtain3 + "    " + obtain3/totalNum*100 + "%" + "<br>");

// Chapter 9-11
// Task : 01
// var city = prompt("Enter city name");
// if(city == "karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("Welcome to " + city)
// }

// Task : 02
// var gender = prompt("Enter your gender");
// if(gender == "male"){
//     alert("Good Morning Sir");
    
// }
// else if(gender == "female"){
//     alert("Good Morning Ma’am");
// }
// else{
//     alert("????")
// }

// Task : 03

// var color = prompt("Enter signal color");
// if(color == "red"){
//     alert("Must Stop");
// }
// else if(color == "yellow"){
//     alert("Ready to move");
// }
// else if(color == "green"){
//     alert("Move now");
// }
// else{
//     alert("enter right color");
// }

// Task : 04
// var fuel = prompt("Enter fuel reading");
// if(fuel <= "0.25"){
//     alert("Please refill the fuel in your car");
// }

// Task : 05
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Task : 06
// var a = prompt("Enter obtaining marks");
// var b = prompt("Enter total marks");
// var c = a/b*100;
// if(c >= 80){
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "A+" + "<br>" +"Remarks:" + " " + "Excellent");
// }
// else if(c >= 70){
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "A" + "<br>" +"Remarks:" + " " + "Good");
// }
// else if(c >= 60){
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "B" + "<br>" +"Remarks:" + " " + "You need to improve");
// }
// else if(c >= 50){
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "C" + "<br>" +"Remarks:" + " " + "Sorry");
// }
// else if(c >= 40){
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "D" + "<br>" +"Remarks:" + " " + "Sorry");
// }
// else if(c >= 33){
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "E" + "<br>" +"Remarks:" + " " + "Sorry");
// }
// else{
//     document.write("Obtain Marks:" +" "+ a + "<br>" +"Total Marks:" +" "+ b + "<br>" +"Percentage:" +" "+ c + "<br>" +"Grade:" +" "+ "FAIL" + "<br>" +"Remarks:" + " " + "Sorry");
// }

// Task : 07
// var a = 2;
// var b = prompt("Guess a number");
// if(b == a){
//     alert("Bingo! Correct answer");
// }
// else if(b == a+1 || b == a-1){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Wrong answer");
// }

// Task : 08
// var a = prompt("Enter a number Divisible by 3");
// if(a % 2){
//     alert("Good Work");
// }
// else{
//     alert("Enter corret value");
// }

// Task : 09
// var a = +prompt("Enter 1st value");
// var b = +prompt("Enter 2nd value");
// var c = prompt("Enter operator");
// if(c == "+"){
//     alert(a+b);
// }
// else if(c == "-"){
//     alert(a-b);
// }
// else if(c == "*"){
//     alert(a*b);
// }
// else if(c == "/"){
//     alert(a/b);
// }
// else if(c == "%"){
//     alert(a%b);
// }
// else{
//     alert("Please enter correct operator");
// }

// Chapter : 12-13
// Task : 01
// var a = "12345";
// var b = prompt("Enter your password");
// var c = prompt("Conform your password");
// if(b == a && c == a){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }

// Task : 02
// var a = prompt("Enter time in O'clock");
// if(a == 0000){
//     alert(12 + "am")
// }
// else if(a == 0100){
//     alert(1 + "am")
// }
// else if(a == 0200){
//     alert(2 + "am")
// }
// else if(a == 0300){
//     alert(3 + "am")
// }
// else if(a == 0400){
//     alert(4 + "am")
// }
// else if(a == 0500){
//     alert(5 + "am")
// }
// else if(a == 0600){
//     alert(6 + "am")
// }
// else if(a == 0700){
//     alert(7 + "am")
// }
// else if(a == 0800){
//     alert(8 + "am")
// }
// else if(a == 0900){
//     alert(9 + "am")
// }
// else if(a == 1000){
//     alert(10 + "am")
// }
// else if(a == 1100){
//     alert(11 + "am")
// }
// else if(a == 1200){
//     alert(12 + "am")
// }
// else if(a == 1300){
//     alert(1 + "pm")
// }
// else if(a == 1400){
//     alert(2 + "pm")
// }
// else if(a == 1500){
//     alert(3 + "pm")
// }
// else if(a == 1600){
//     alert(4 + "pm")
// }
// else if(a == 1700){
//     alert(5 + "pm")
// }
// else if(a == 1800){
//     alert(6 + "pm")
// }
// else if(a == 1900){
//     alert(7 + "pm")
// }
// else if(a == 2000){
//     alert(8 + "pm")
// }
// else if(a == 2100){
//     alert(9 + "pm")
// }
// else if(a == 2200){
//     alert(10 + "pm")
// }
// else if(a == 2300){
//     alert(11 + "pm")
// }
// else{
//     alert("Enter Correct Time");
// }

// Chapter 14-16
// Task : 01

// var arr = ["HSC", "SSC", "BCS", "BS", "B.COM","M.Phil.","PhD"];
// document.write("<ol>")
// for(var a = 0; a < 7; a++){
//     document.write("<li>" + ")" + " "  + arr[a] + "</li>");
// }
// document.write("<ol>")

// Task : 02
// var arr = ["Tariq","Nasir","Zameer"];
// var arr2 = [350,400,450];
// var totalNum = 500;
// for(var a = 0; a < 3; a++){
//     document.write("Score of " + arr[a] + " is " + arr2[a] +". " +"Percentage: "+ arr2[a]/totalNum*100 +"%" +"<br>");
// }

// Task : 03
// var arr = ["this", "is", "my", "cat"];
// var a = arr.join(" ");
// document.write(a);

// Task : 04
// var a = [320,230,480,120];
// document.write("Score of students : " + a + "<br>");
// a.sort();
// document.write("Ordered Score of students : " + a);

// Chapter : 17-20
// Task : 01
// var a = [
//     [],
//     [],
//     []
// ];

// Task : 02
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(var a = 0; a < 3; a++){
//     for(var b = 0; b < 4; b++){
//         document.write(arr[a][b] + " ");
//     }
//     document.write("<br>");
// }

// Task : 03
// var a = 1;
// for(a = 1; a < 11; a++){
//     document.write(a + "<br>");
// }

// Task : 04
// var table = +prompt("Enter a number of table");
// var a = +prompt("Enter length of table");

// for(var i = 1; i <= a; i++){
// document.write(table + " " + "x" + " " + i + " " + "=" + " " + table*i + "<br>")
// }

// Task : 05
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var a = 0; a < 5; a++){
//     document.write(fruits[a] + "<br>");
// }
   
// Task : 06
// var a = ["cake", "bread", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC bakery!", "Search items here..");
// for(var i = 0; i < 5; i++){
//     if(b == a[i]){
//         alert(b + " is available");
//     }
//     else{
//         alert(b + " is not available");
//     }
//    break
// }

// Chapter : 21-25

// Task : 01
// var a = prompt("Enter your first name");
// var b = prompt("Enter your last name");
// var c = a + " " + b;
// alert("Hello! " + c);

// Task : 02
// var a = prompt("Enter your fav. Cellphone Model");
// document.write("My fav. phone is: " + a +"<br>" + "Length of string : " + a.length)

Chapter : 26-30
Task : 01

// var a = prompt("Enter Positive Integer Number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("Number : " + a + "<br>");
// document.write("Round of value : " + b+ "<br>");
// document.write("Floor value : " + c+ "<br>");
// document.write("Ceil value : " + d);

// Task : 02

// var a = prompt("Enter Positive Integer Number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("Number : " + a + "<br>");
// document.write("Round of value : " + b+ "<br>");
// document.write("Floor value : " + c+ "<br>");
// document.write("Ceil value : " + d);

// Task : 03
// var a = 5;
// var b = Math.random(a);
// document.write(b);

// Task : 04
// var headsuser = prompt('Enter headsuser name');
// var tailsuser = prompt('Enter tailsuser name');
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     alert('Heads ' + headsuser + ' won the toss')
// }
// else{
//     alert('Tials ' + tailsuser + ' won the toss')
// }

// Task : 05
// var a = Math.floor (Math.random() *100) + 1;
// document.write(a);

// Task : 06

// var a = Math.floor(Math.random() *10) +1;
// var b = prompt("Guess the value b/w 1-10");
// if(b == a){
//     alert("Correct answer");
// }
// else{
//     alert("Try again");
// }

// Chapter : 31-34
// Task : 01

// var rightNow = new Date();
// document.write(rightNow)

// Task : 02
// var a = new Date();
// var b = a.getMonth();
// if(b == 0){
//     document.write("january");
// }
// else if(b == 1){
//     document.write("feburary");
// }
// else if(b == 2){
//     document.write("march");
// }
// else if(b == 3){
//     document.write("april");
// }
// else if(b == 4){
//     document.write("may");
// }
// else if(b == 5){
//     document.write("june");
// }
// else if(b == 6){
//     document.write("july");
// }
// else if(b == 7){
//     document.write("august");
// }
// else if(b == 8){
//     document.write("september");
// }
// else if(b == 9){
//     document.write("october");
// }
// else if(b == 10){
//     document.write("november");
// }
// else if(b == 11){
//     document.write("december");
// }

// Task : 03
// var a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var b = new Date();
// var c = b.getDay();
// var d = a[c];
// alert(d);

Task : 04 
// var a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var b = new Date();
// var c = b.getDay();
// var d = a[c];

// if(d == "sun" || "sat"){
//     alert("It's Funday");
// }
// else{
//     alert(d);
// }

Task : 05
// var now = new Date();
// var month = now.getMonth();
// var a = prompt("Costumer Name");
// var units = +prompt("Number of Units")
// var rate = 16;
// var netAmount = units*rate
// var latePay = +netAmount*0.05
// var abc = netAmount+latePay;
// var b = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov","dec"];
// var c = b[month];
// for(var i = 0; i <12; i++){
//     document.write("Costumer Name: " + a + "<br>")
//     document.write("Current Month:  " + c + "<br>")
//     document.write("Number of Units: " + units + "<br>")
//     document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
//     document.write("Gross Amount Payable (After Due Date): " + abc + "<br>");


//     break
// }

// Chapter : 35-38
// Task : 01
// var a = new Date();
// function nowDate(){
//     alert(a);
// }
// nowDate();

// Task : 02
// var a = prompt("Enter first name:");
// var b = prompt("Enter second name:");
// var c = a + " " + b;
// function fullName(){
//     alert(c);
// }
// fullName();

// Task : 03
// var a = +prompt("Enter first value:");
// var b = +prompt("Enter second value:");
// var c = a + b;
// function sumValue(){
//     alert(c);
// } 
// sumValue();

// Task : 04
// function calCu(){
// var a = +prompt("Enter 1st value");
// var b = +prompt("Enter 2nd value");
// var c = prompt("Enter operator");
// if(c == "+"){
//     alert(a+b);
// }
// else if(c == "-"){
//     alert(a-b);
// }
// else if(c == "*"){
//     alert(a*b);
// }
// else if(c == "/"){
//     alert(a/b);
// }
// else if(c == "%"){
//     alert(a%b);
// }
// else{
//     alert("Please enter correct operator");
// }
// }
// calCu();

// Task : 05
// var arr = [];
// var a = +prompt("Enter start value");
// var b = +prompt("Enter end value");

// for(i = a; i <= b; i++){
//     document.write(i + "<br>");
// }

// Task : 06
// var word = prompt ("Enter your word");
// var check = "";
// for(var i = word.length -1; i >= 0; i--){
//     check += word[i]
// }
// if(word === check){
//     document.write(word + " is a palidrome word");
//     }
//     else{
//         document.write(word + " is not a palidrome word"); 
//     }

// Task : 07
// var r = +prompt("Enter radius of cicle:");
// var p = 3.14;

// function calcCircumference(){
// document.write("The circumference is: " + 2*p*r + "<br>");

// }

// function calcArea(){
//     document.write("The area is: " + p*(r*r));
// }

// calcCircumference()
// calcArea();

// Chapter : 34-40
// Task : 01
// function power(a,b){
//     alert(a*b);
// }
// power(2,2);

// Task : 02  
// function area(){
//     var a = 10;
//     var b = 10;
//     var c = 5;
    
//     var S = (a+b+c)/2;
//     var area = (S-a) * (S-b) * (S-c) * S
//     alert(area);
// }
// area();

// Task : 03
// function main(a,b,c){
// var m = a+b+c;
// return m;
// }
// // function average(){
// // var avr = m / 3
// // return avr;
// // }
// // function percentage(){
// // var per = m/3*100
// // return per;
// // }
// var ans = main(40,50.60)
// document.write(ans)

// Task : 04

// var a = prompt("Enter distance btwn 2 cities in Km");

// function mtr(){
    
// document.write(a * 1000+ " m" + "<br>")
// }
// function ft(){
// document.write(a * 3280.84+ " ft" + "<br>")
// }
// function inh(){
//     document.write(a * 39370+ " in" + "<br>")
// }
// function centi(){
//     document.write(a * 100000+ " cm")
// }
// mtr();
// ft();
// inh();
// centi();


