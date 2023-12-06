// console
// console.log("Shaban Khan JavaScript Notes December 2023 ...");

/*
==================================================================
2. Data Types in JS

 var myName = "Shaban Khan";
console.log(myName);
console.log(typeof(myName));

var myAge = 24;
console.log(myAge);
console.log(typeof(myAge))

var isAdmin = true
console.log(isAdmin)
console.log(typeof(isAdmin)) 

*/

/*
==================================================================
Challange 1 Guess the output

we are using typeof() for getting type of data

console.log(10+"20") //1020 
console.log(10*"20") // 200
console.log(10-"shaban") // NaN
console.log(10+"Shaban") // 10Shaban

Any arithematic operation perfromed between number_string other than '+' , will
be solved as integer operation , but '+' operation will act as concatination

console.log(typeof(10+"20")) // (string)

console.log(10-"20") //10 (int)
console.log("Shaban "+ "Khan"); // Shaban Khan (string )
console.log(" "+" ") //    (sting)
console.log(" "+0)  // 0 (string)
console.log("Shaban " - "Khan") // NaN

console.log(true+true) // 2 (int)
console.log(true+false) // 1 (int)
console.log(false+false) // 0 (int)
console.log(false-true) //-1 (int)

*/

/*
==================================================================
Question 1 "What is the difference between "null" & "undefine"

var myVar;
console.log(typeof(myVar)) //undefine (undefine) because datatype not define

var myNull = null 
console.log(myNull) // null (object)
*/

/*
==================================================================
Question 2 What is NaN (Not a Number )
Ans : if we want to perform any arithimatic operation between
(string & string), (string & integer) other than addition , it will return NaN value , which means it
can not be treated as number 

Although, if we want to perform operation between two strings which contains
numbers as string , then it'll perform the artithematic operation on numbers
Eg. ("9" - 5) = 4

To check if NaN we use 'isNan()'

Practice quesitons

console.log(NaN === NaN); // false 
console.log(Number.NaN === NaN) // false 
console.log(isNaN(NaN)); // true 
console.log(Number.isNaN(NaN)) //true

*/

/*
==================================================================
3. Operators in JavaScript

    3.1 Aassignment operator 
        var myVar1 = 5
        var myVar2 =5
    
    important output 
    console.log("Is two variable equal "+ myVar1===myVar2)
    //Is two variable equal false 
    //because the additing will be performed first , thus the result will be false 
    
    //so always use new mehtod
    console.log(`Is two variable equal ${myVar1 === myVar2}`)


   3.2 Arithematic operators 
    It take two operands and give one output
    console.log(3+5) //8
    console.log(7-2) //5
    console.log(14/2) //7
    console.log(7*7) //49
    console.log(12%10) //2 remainder


    3.3 Increament and Decrement operator prefix(++i) postfix(i++)

    var num = 5
    var new_num = num++;
    console.log(num) // 6
    console.log(new_num) //5

    var num = 5
    var new_num = ++num;
    console.log(num); // 6
    console.log(new_num) //6


    3.4 Comparison operator 

    var a =20
    var b=40 
    console.log(a==b) // false
    consol.log(a > b ) //false
    console.log(a<b) //true
    console.log(a!=b) //true


    var a ="40"
    var b=40 
    console.log(a==b) // true


    3.5 Logical Operator returns(true/false)

    //&& (AND Operator) returns true only if both conditions satisfied
    var a ="40"
    var b=40 
    console.log(a==b && a<=b) // true


    // || (OR Operator) returns true if any one condition is true
    console.log(a==b || a!=b) // true  

    // ! (NOT operator) returns opposite 
    console.log(!(a==b)) // flase


    3.5 String Operators

    //concatination operators (+)




*/

/*
Q.3 Outputs of the following 
    i. console.log(3**3) // 9
    ii. console.log(90+"shaban") // 90shaban
    iii. Write a program to swap two numbers

        function swapn(a , b)
        {
            a = a^b
            b = a^b
            a=a^b
            console.log(`${a} , ${b}`)
        }

*/

/*
Q.4 what is differance between ==  and ===
    == is losse comparision check 
    === is strict comparision check 
    var a = 5;
    var b = '5';
    console.log(a==b) //true
    console.log(a===b) // false

 */

// ==================================================================
// 4. Controll statements and loops
//     4.1 if else statement 

//         var isRaining = true;
//         if(isRaining)
//         {
//             console.log("Take Umbrella");
//         }
//         else 
//         {
//             console.log("No Need to take Umbrella");
//         }


//     4.2 ternary Operator  (condition)?"true":"false"
//         var age = 18;
//         console.log((age>=18)? "You  are eligible ":"Not Eligible")
//         //you are eligible 


//     4.3 Switch Statements

//         var poption = 3;

//         switch(poption)
//         {
//             case 1:
//                     console.log("You choosed option 1");
//                     break;
//             case 2:
//                 console.log("You choosed option 2");
//                 break;
//             case 3:
//                 console.log("You choosed option 3");
//                 break;
//             default: 
//                 console.log("You didn't selected defined option ")
//                 break;

//         }
    


//     4.4 While loop 
//         var c = 10
//         while(c--)
//         {
//             console.log("Hello world")
//         }


//     4.5 do while // it will run minimum 1 time 

//         var num =1;

//         do {
//             console.log(num++);
//         }while(num<=10)


//     4.6 For Loop
//     for(var i=1;i<=10;i++)
//     {
//         console.log(`2 X ${i} = ${2*i} `)
//     }



/*
==================================================================
5. Functions
    function sum2(a=0,b=0)
    {
        console.log(a+b);
    }
    sum2(); //0
    sum2(50,40); //90

  5.1 function expression  
   Assinging a function to a variable 


*/

function sum2(a=0,b=0)
    {
        return a+b;
    }
var funExp = sum2(50,40); 
console.log(funExp);


 
