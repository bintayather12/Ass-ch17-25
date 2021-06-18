// Q1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var ary =[
//     [   ],
//     [   ],
//     [   ],
//     [   ]
// ];
// Q2. Declare and initialize a multidimensional array
// representing the following matrix:

// var ary =[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(var a=0;a<4;a++){
//     for(var b=0;b<4;b++){
//         document.write(ary[a][b]+ "   ")
//     }
//     document.write("<br>");
// }

// Q3. Write a program to print numeric counting from 1 to 10

// var num =[1,2,3,4,5,6,7,8,9,10];
// for(var i=0;i<=9;i++){
//     document.write(num[i]+"<br>");
// }

// Q4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var table=prompt("Enter a number to show its multiplication table"); 
// var tableLength=prompt("Enter length multiplication table");
// for (var i=1;i<=tableLength;i++){
//     document.write(table+"x"+i+"="+table*i+"<br>")
// }



// Q5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruit=["apple","banana","mango","orange","strawberry"];
// for(var a=0; a<=4; a++){
//     document.write(fruit[a] + "<br>");
// }

//  var ary =["Element at index o is apple","Element at index 1 is banana"," Element at index 2 is mango","Element at index 3 is orange","Element at index 4 is strawberry"];
// for(var a=0; a<=4; a++){
//     document.write(ary[a] + "<br>");
// }


// Q6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// var con =["Counting:"];
// document.write(con+"<br>");
// for(var a=1;a<=16;a++){
//     if(a===16){
//         break
//     }
//     document.write(a+"<br>");
// }

// var con =[" Reverse counting:"];
// document.write(con +"<br>");
// var coun= [1,2,3,4,5,6,7,8,9,10];
// coun.reverse();
// document.write(coun+"<br>"+"<br>");

// var con =[" Even:"];
// document.write(con +"  "+"<br>");
//     for(var a=1; a<=20;a++){
//         if(a % 2==0){
//             document.write(a +"   "+"<br>");
//         }
//     }

// var odd =[" Odd:"];
// document.write(odd +"   "+"<br>");
// for(var a=1; a<=20;a++){
//     if(a % 2!=0){
//         document.write(a +"  "+"<br>");
//     }
// }

// var ser =[" Series:"];
// document.write(ser +"<br>");
// var ser= ['2k', '4k','6k', '8k','10k','12k','14k','16k','18k','20k'];
// document.write(ser+"<br>"+"<br>");



// Q7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. 


// var items =["cake","apple pie","cookies","chips","patties"];
// var x=prompt('Welcome to Fresh Bakrey.What do you want to order sir/mam');

//     if("cake","apple pie","cookies","chips","patties"){
//         alert(" It is avaiabile in our bakrey.");
//     }
//     else {
//         alert(" We are sorry it is not available in our bakrey.");
//     }

// //     // Q8. Write a program to identify the largest number in the
// //     // given array.
// //     // A = [24, 53, 78, 91, 12].

//     var num =[24,53,78,91,12];
// document.write(num +"<br>");
// var numbers =[24,53,78,91,12];
// document.write(Math.max(...numbers) +"<br>");

//     Q9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var A =["Array items:",24,53,78,91,12];
// document.write(A+"<br>");
// var numbers =[24,53,78,91,12];
// document.write(Math.min(...numbers) +"<br>");



// Q10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(var i= 1; i <=100; i++){
//         document.write( 5*i +"<br>")
//     }
    

                                        // CH:21-25 "STRING METHODS"


    // 1.Write a program that takes two user inputs for first & last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName=prompt("enter your first name");
// var lastName=prompt("enter your last name");
// document.write("welcome" + " " + firstName + " " + lastName);


// 2.Write a program to take a user input about his favorite mobile phone model. Find and display 
//the length of user input in your browser

// var model=prompt("Enter your favourite mobile phone model");
// alert(model);
// document.write("<br>");
// var str="Samsung Galaxy S6 Edge Plus"
// var a=str.length;
// document.write(a);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var str ="pakistani";
// document.write(str.indexOf("n"));
// document.write("<br>");


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var text ="hello world";
// document.write(text.indexOf("l",5));


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var str ="pakistani";
// var a=str.charAt(3);
// documents.write(a);


// 6. Repeat Q1 using string concat() method.

// var firstName="Huma";
// var lastName="Ather";
// var a=firstName.concat(lastName);
// document.write(a);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var str="hyderabad";
// var a=str.replace("hyder","islam");
// document.write(a);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message ="Ali and omer are class fellows. They study and play together.";
// document.write(message.replace("and","&"));


// 9.Write a program that converts a string “472” to a no 472.Display the values & types in your browser.

// var integerString = "427"
// var num=Number(integerstring);


// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var str=prompt("enter some text");
// var a=str.toUpperCase();
// document.write(a);


// 11. Write a program that takes user input. Convert and show the input in title case.

// var str=prompt("Enter which language are you learning");
// var a=str.toTitleCase();
// document.write(a);


// 12.Write a program that converts the variable num to string.
// var num = 35.36 ;Remove the dot to display “3536” display in your browser.

var str= 35.36;
var a=str.toString();
document.write(a);



// 13. Write a program to take user input and store username in a variable. If the username 
//contains any special symbol among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var a=prompt("Enter your name");
if(x=="!"||","||"."||"@"){
    alert("Enter a valid user name");
}




// 14.You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching,prompt the user
// whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE,
// program should inform about its availability. Example:

// var items =["cake","apple pie","cookies","chips","patties"];
// var x=prompt('Welcome to Fresh Bakrey.What do you want to order sir/mam');

//     if("cake","apple pie","cookies","chips","patties"){
//         alert(" It is avaiabile in our bakrey.");
//     }
//     else {
//         alert(" We are sorry it is not available in our bakrey.");
//     }


// 15. Write a program to take password as an input from user.The password must qualify these requirements:
// a. It should contain alphabets and numbers b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var x= prompt("Enter a password");
if(x=="0,1,2,3,4,5,6.,7,8,9,"){
    alert("It shouldn't start with number");
}
 else if(x=="ASCII" || x=="A-Z"){
    alert("it should contain alphabets and numbers both");
}
else if(x==" , , , , ,"){
    alert("It must at least 6 characters long");
}
else (x!=="A-Z" || x!=="ASCII");{
    alert("Enter a valid password ");
}
document.write(x);



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var str = 'university of karachi';
var ar = str.split('');
document.write( ar ); 



// 17. Write a program to display the last character of a user
// input.

var text ="pakistan"
var y=text.charAt(text.length-1)
document.write(y)




// 18. You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string.

var temp = "The quick brown fox jumps over the lazy dog";
var count = (temp. match(/the/g) || [])
console.log(count); 
